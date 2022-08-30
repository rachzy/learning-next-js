import Link from "next/link";
import classes from "./GoBack.module.css";

const GoBack = () => {
  return (
    <div className={classes.goBack}>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default GoBack;
