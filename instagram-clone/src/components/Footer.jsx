import "../styles/footer.scss";

const Footer = ({fill="#060606", border="1px solid #dbdbdb"}) => {
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

export default Footer;
