import styles from './button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const Button = (props: ButtonProps) => {
  const { children, variant = 'primary' } = props;
  return <a className={`${styles.button} ${styles[variant]}`}>{children}</a>;
};

export default Button;
