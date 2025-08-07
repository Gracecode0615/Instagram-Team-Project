import "../styles/efooter.scss"

import "../styles/footer.scss";

const EFooter = ({fill, border="none"}) => {
  return (
    <div className="footer"
        style={{ border: border }}
    >
      <div className="barline">
        <svg
          width="134"

    
          height="5"
          viewBox="0 0 134 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="134" height="5" rx="2.5" fill={fill} />
        </svg>
      </div>
    </div>
  );
};

export default EFooter;
