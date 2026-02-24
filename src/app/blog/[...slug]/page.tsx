interface Props {
  params: Promise<{ slug: string[] }>;
}

const CatchAll = async ({ params }: Props) => {
  const { slug } = await params;

  if (slug.length === 2 && slug[1]) {
    return <div>Second component running</div>;
  }

  return <div>CatchAll</div>;
};

export default CatchAll;
