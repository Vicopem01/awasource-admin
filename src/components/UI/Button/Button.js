import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = ({ isLink, to, onClick, children, type }) => {
  return isLink ? (
    <Link
      to={to}
      className={`${classes.btn} ${type === "yellow" ? classes.yellow : ""} 
        ${type === "white" ? classes.white : ""}
        ${type === "blue" ? classes.blue : ""} `}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${classes.btn} ${type === "yellow" ? classes.yellow : ""} 
    ${type === "white" ? classes.white : ""}
    ${type === "blue" ? classes.blue : ""} `}
    >
      {children}
    </button>
  );
};

export default Button;
