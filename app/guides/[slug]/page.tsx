interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = 'force-dynamic';

const GuidesPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const Content = await import(`../(contents)/${slug}.mdx`);

  return <Content.default />;
};

export default GuidesPage;
