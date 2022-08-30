import Link from "next/link";
import classes from "./Anchor.module.css";

const Anchor = ({ children, href }) => {
  return (
    <Link href={href}>
      <p className={classes.anchor}>{children}</p>
    </Link>
  );
};

export default Anchor;
