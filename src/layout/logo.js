import classes from "./logo.module.css";

const Logo = (props) => {
  const { title } = props;

  let header = title || "TV Ranking";
  // if (title) {
  //   header = title;
  // }

  return <div className={classes.logo}>{header}</div>;
};

export default Logo;
