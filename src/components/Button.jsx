import "../styles/button.css";
const Button = ({ onClick, backgroundColor, text }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {text}
    </button>
  );
};

export default Button;
