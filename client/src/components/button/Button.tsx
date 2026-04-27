import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded bg-primary px-4 py-1 text-lg leading-relaxed font-bold tracking-wide text-white outline-none',
        'hover:bg-secondary focus:border-primary focus:shadow-[0_0_0_3px] focus:shadow-primary/25',
        'disabled:cursor-auto disabled:bg-slate-400',
        className
      )}
    >
      {children}
    </button>
  );
}

export { Button };
