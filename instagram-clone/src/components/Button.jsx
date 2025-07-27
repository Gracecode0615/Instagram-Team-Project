import "../styles/button.scss";

const Button = ({ bgc, bradius }) => {
  return (
    <div>
      <button
        className="signin-signup"
        style={{ backgroundColor: bgc, borderRadius: bradius }}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
