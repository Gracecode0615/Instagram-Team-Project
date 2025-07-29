import '../styles/displayPics.scss';

function UserDP({ imgSrc, alt = '', borderColor = 'gray', size = 60 }) {
  return (
    <div
      className="dp-wrapper"
      style={{
        borderColor: borderColor,
        width: size,
        height: size
      }}
    >
      <img src={imgSrc} alt={alt} className="dp-img" />
    </div>
  );
}

export default UserDP;
