import { strFromU8, unzipSync } from 'fflate';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Project } from '../src/types/projects';

import { reposDownloadZipballArchive } from '../generated/api/github';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required for sync:projects');

const OUTPUT_DIRECTORY = fileURLToPath(new URL('../public/projects', import.meta.url));
const PROJECTS_JSON_FILE = 'projects.json';
const IMAGES_DIRECTORY = 'images/';

const PATHS = {
  images: /^[^/]+\/images\/.+$/,
  projectsJson: /^[^/]+\/projects\.json$/
};

const sync = async () => {
  const reposDownloadZipballArchiveResponse = await reposDownloadZipballArchive({
    path: { owner: 'siberiacancode', repo: 'juniors-bootcamp-examples', ref: 'main' },
    config: {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'User-Agent': 'juniors-bootcamp-portal-sync-projects'
      },
      parse: 'arrayBuffer'
    }
  });

  const archiveData: unknown = reposDownloadZipballArchiveResponse.data;

  if (!(archiveData instanceof ArrayBuffer))
    throw new TypeError('GitHub response is not a ZIP archive');

  const files = unzipSync(new Uint8Array(archiveData), {
    filter: ({ name }) => PATHS.projectsJson.test(name) || PATHS.images.test(name)
  });
  const catalogPath = Object.keys(files).find((path) => PATHS.projectsJson.test(path));

  if (!catalogPath) throw new Error('projects.json is missing from the repository archive');

  const archiveRoot = catalogPath.slice(0, -PROJECTS_JSON_FILE.length);
  const projects = JSON.parse(strFromU8(files[catalogPath])) as Project[];

  for (const project of projects) {
    if (!project.preview) continue;

    if (
      !project.preview.startsWith(IMAGES_DIRECTORY) ||
      !Object.hasOwn(files, `${archiveRoot}${project.preview}`)
    )
      throw new Error(`Screenshot is missing from images/: ${project.preview}`);

    project.preview = `/projects/${project.preview}`;
  }

  await rm(OUTPUT_DIRECTORY, { recursive: true, force: true });
  await mkdir(OUTPUT_DIRECTORY, { recursive: true });

  for (const [path, data] of Object.entries(files)) {
    if (!path.startsWith(`${archiveRoot}${IMAGES_DIRECTORY}`)) continue;

    const destination = join(OUTPUT_DIRECTORY, path.slice(archiveRoot.length));
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, data);
  }

  await writeFile(
    join(OUTPUT_DIRECTORY, PROJECTS_JSON_FILE),
    `${JSON.stringify(projects, null, 2)}\n`
  );
};

await sync();
