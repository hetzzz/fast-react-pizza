import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  // const className =
  //   "w-max rounded-full bg-yellow-400 px-3 py-3 font-bold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed";

  const base =
    "w-max rounded-full bg-yellow-400 font-bold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-3 py-3",
    small: base + " px-3 py-2 text-xs md:py-2.5",
    round: base + " px-2.5 py-1 text-sm md:px-3.5 md:py-2",
    secondary:
      "w-max rounded-full bg-stone-200 px-3 py-3 font-bold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-400 focus:bg-stone-400 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-1 disabled:cursor-not-allowed",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
