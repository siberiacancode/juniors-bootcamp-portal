interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

const PlatformPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const Content = await import(`../(contents)/${slug.join('/')}/index.mdx`);

  return <Content.default />;
};

export default PlatformPage;
