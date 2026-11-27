import type { DocumentRecord } from 'fumadocs-core/search/algolia';

import { algoliasearch } from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import { glob, readFile } from 'node:fs/promises';

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const writeKey = process.env.ALGOLIA_WRITE_KEY;

if (!appId || !writeKey)
  throw new Error('NEXT_PUBLIC_ALGOLIA_APP_ID and ALGOLIA_WRITE_KEY are required for sync:content');

const [file] = await Array.fromAsync(glob('.next/server/{app,route-cache/*/*/$}/static.json.body'));

if (!file) throw new Error('Search documents are missing. Run pnpm build before sync:content');

const documents = JSON.parse(await readFile(file, 'utf8')) as DocumentRecord[];
const client = algoliasearch(appId, writeKey);

await sync(client, { indexName: 'document', documents });

process.stdout.write(`Search updated: ${documents.length} documents\n`);
