type FieldLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

function FieldLabel({ children, ...rest }: FieldLabelProps) {
  return <label {...rest}>{children}</label>;
}

export { FieldLabel };
