import gallery1 from '../assets/gallery/gallery1.png';
import gallery2 from '../assets/gallery/gallery2.png';
import gallery3 from '../assets/gallery/gallery3.png';
import gallery4 from '../assets/gallery/gallery4.png';
import gallery5 from '../assets/gallery/gallery5.png';
import gallery6 from '../assets/gallery/gallery6.png';
import gallery7 from '../assets/gallery/gallery7.png';
import gallery9 from '../assets/gallery/gallery9.png';
import gallery10 from '../assets/gallery/gallery10.png';
import gallery11 from '../assets/gallery/gallery11.png';
import '../styles/gallerygrid.scss';



const grid = [
    gallery1,gallery3,gallery2,gallery4,gallery5,gallery6,gallery7,gallery9,gallery10,gallery11,gallery4,
]

const GalleryGrid = () => {
  return (
    <div className="gallery">
      {grid.map((img, index) =>(
        <div className='gallery-img' key={index}>
          <img src={img} alt=""  className='{index == 3 ? "tall" : "}'/>
        </div>
      ))}
    </div>
  );
};
export default GalleryGrid;