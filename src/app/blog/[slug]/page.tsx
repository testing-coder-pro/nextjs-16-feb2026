interface SingleBlogPageProps {
  params: Promise<{ slug: string }>;
}

const SingleBlogPage = async ({ params }: SingleBlogPageProps) => {
  const { slug } = await params;
  return <div>SingleBlogPage {slug}</div>;
};

export default SingleBlogPage;
