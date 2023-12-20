import PropTypes from "prop-types";

function Column({ heading, children, Icon }) {
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

Column.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  Icon: PropTypes.elementType,
};

export default Column;
