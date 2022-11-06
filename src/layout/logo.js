import classes from "./logo.module.css";

const Logo = (props) => {
  const { title } = props;

  let header = title || "TV Ranking";

  return <div className={classes.logo}>{header}</div>;
};

export default Logo;
