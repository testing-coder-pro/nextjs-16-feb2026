interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <div className="">Blog Layout</div>
      {children}
    </>
  );
};

export default BlogLayout;
