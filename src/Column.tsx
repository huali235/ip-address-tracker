interface ColumnProps {
  heading: string;
  children: React.ReactNode;
  Icon?: React.FC;
}

function Column({ heading, children, Icon }: ColumnProps) {
  return (
    <div className="ml-5">
      <div className="flex items-center gap-2 mb-3">
        {Icon && <Icon />}
        <h1 className="uppercase text-sm text-gray-400">{heading}:</h1>
      </div>
      {children}
    </div>
  );
}

export default Column;
