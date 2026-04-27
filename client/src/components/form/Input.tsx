import clsx from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isInvalid?: boolean | undefined;
};

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        'w-full rounded border border-slate-300 bg-slate-50 px-2 py-1 outline-none',
        'user-valid:border-primary user-invalid:border-red-500 focus:border-primary focus:shadow-[0_0_0_3px] focus:shadow-primary/25',
        props.className
      )}
    />
  );
}

export { Input };
