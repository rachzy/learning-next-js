import classes from "./DefaultContainer.module.css";

const DefaultContainer = ({ children, spaceBetween }) => {
  return (
    <div
      style={spaceBetween ? { justifyContent: "space-between" } : {}}
      className={classes.defaultContainer}
    >
      {children}
    </div>
  );
};

export default DefaultContainer;
