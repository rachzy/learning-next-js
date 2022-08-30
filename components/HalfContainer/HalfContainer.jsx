import classes from "./HalfContainer.module.css";

const HalfContainer = ({ children, center }) => {
  return (
    <div
      style={center ? { justifyContent: "center", alignItems: "center" } : {}}
      className={classes.halfContainer}
    >
      {children}
    </div>
  );
};

export default HalfContainer;
