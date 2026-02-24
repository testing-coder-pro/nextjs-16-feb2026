interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <div>Dashboard</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
