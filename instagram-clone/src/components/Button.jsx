import "../styles/button.scss";

const Button = ({ bgc, border, text, color }) => {
  return (
    <div>
      <button
        className="signin-signup"
        style={{ backgroundColor: bgc, border: border, color: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
