interface Props {
  params: Promise<{ options: string[] }>;
}

const AuthPage = async ({ params }: Props) => {
  const { options } = await params;

  if (options && options[0] === "sign-in") {
    return <div>Sign in</div>;
  }

  if (options && options[0] === "sign-up") {
    return <div>Sign up</div>;
  }

  if (options && options[0] === "forgot-password") {
    return <div>Forgot password</div>;
  }
  return <div>You need to provide valid authentication route</div>;
};

export default AuthPage;
