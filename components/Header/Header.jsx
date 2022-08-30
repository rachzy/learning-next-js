import { useRouter } from "next/router";
import classes from "./Header.module.css";

const Header = ({ children }) => {
  const router = useRouter();
  return (
    <div className={classes.header}>
      <h1
        onClick={() => {
          router.push("/");
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export default Header;
