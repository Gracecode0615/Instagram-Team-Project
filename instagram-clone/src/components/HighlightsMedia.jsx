import '../styles/displayPics.scss';

function HighlightsMedia({ media, alt = '', borderColor = 'gray', size = 60 }) {
  return (
    <div
      className="dp-wrapper"
      style={{
        borderColor: borderColor,
        width: size,
        height: size
      }}
    >
      <img src={media} alt={alt} className="dp-img" />
    </div>
  );
}

export default HighlightsMedia;
