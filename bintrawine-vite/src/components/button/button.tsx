type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const Button = (props: ButtonProps) => {
  const { children, variant = 'primary' } = props;
  return <a>{children}</a>;
};

export default Button;
