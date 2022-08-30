import classes from "./MainWrapper.module.css";

const MainWrapper = ({ children, center }) => {
  if (center) {
    return (
      <div className={`${classes.mainWrapper} ${classes.center}`}>
        {children}
      </div>
    );
  }
  return <div className={classes.mainWrapper}>{children}</div>;
};

export default MainWrapper;
