const Button = (props) => {
  const { type, children, className } = props;
  return (
    <button className={`p-2 rounded-md px-4 ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
