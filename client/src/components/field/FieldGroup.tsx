type FieldGroupProps = {
  children: React.ReactNode;
};

function FieldGroup({ children }: FieldGroupProps) {
  return (
    <div role="group" className="flex flex-col gap-2">
      {children}
    </div>
  );
}

export { FieldGroup };
