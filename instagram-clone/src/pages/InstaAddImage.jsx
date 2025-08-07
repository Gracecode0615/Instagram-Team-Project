import { FiChevronDown } from "react-icons/fi";

import Footer from '../components/Footer';
import '../styles/InstaAddImage.scss';
import dp1 from '../assets/dp/dp1.png';
import m1 from '../assets/posts_img/m1.png';
import m2 from '../assets/posts_img/m2.png';
import m3 from '../assets/posts_img/m3.png';
import m4 from '../assets/posts_img/m4.png';
import m5 from '../assets/posts_img/m5.jpg';
import m6 from '../assets/posts_img/m6.jpg';


function AddImage() {
    const sampleImages = [dp1, m1, m2, m3, m4, m5, m6];

    return (
        <div className="add-image-container">
            <div className="add-image-scroll">
                <div className="image-wrapper">
                    {/* Top Overlay */}
                    <div className="overlay top">
                        <span className="cancel">Cancel</span>
                        <span className="recents active">
                            Recents <FiChevronDown size={20} />
                        </span>
                        <span className="next">Next</span>
                    </div>

                    {/* Image */}
                    <img className="img-preview" src={dp1} alt="Preview" />

                    {/* Bottom Overlay */}
                    <div className="overlay bottom">
                        <span>
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0C16.7091 0 18.5 1.79086 18.5 4C18.5 6.20914 16.7091 8 14.5 8C13.2418 8 11.7084 7.02693 9.89959 5.08078L9.60439 4.75802C7.69402 6.91934 6.07589 8 4.75 8C2.54086 8 0.75 6.20914 0.75 4C0.75 1.79086 2.54086 0 4.75 0C6.07589 0 7.69402 1.08066 9.60439 3.24198C11.5425 1.08066 13.1741 0 14.5 0ZM4.75 1C3.09315 1 1.75 2.34315 1.75 4C1.75 5.65685 3.09315 7 4.75 7C5.69504 7 7.0506 6.10242 8.7197 4.24739L8.93917 4L8.7197 3.75261C7.0506 1.89758 5.69504 1 4.75 1ZM10.7107 3.51623C12.3027 1.82188 13.5943 1 14.5 1C16.1569 1 17.5 2.34315 17.5 4C17.5 5.65685 16.1569 7 14.5 7C13.5532 7 12.1845 6.1017 10.4917 4.2473L10.2691 4L10.4917 3.7527L10.7107 3.51623Z" fill="white"/>
                            </svg>

                        </span> 
                        <span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 4.5C17 2.01472 14.9853 0 12.5 0H5.25C2.76472 0 0.75 2.01472 0.75 4.5V11.75C0.75 14.2353 2.76472 16.25 5.25 16.25H12.5C14.9853 16.25 17 14.2353 17 11.75V4.5ZM5.25 1H8.25V15.25H5.25C3.317 15.25 1.75 13.683 1.75 11.75V4.5C1.75 2.567 3.317 1 5.25 1ZM16 8.625H9.25V15.25H12.5C14.433 15.25 16 13.683 16 11.75V8.625ZM9.25 1H12.5C14.433 1 16 2.567 16 4.5V7.625H9.25V1Z" fill="white"/>
                            </svg>

                        </span>
                        <span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{ marginRight: '7px' }}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.75C13.6569 0.75 15 2.09315 15 3.75V12C15 13.6569 13.6569 15 12 15H3.75C2.09315 15 0.75 13.6569 0.75 12V3.75C0.75 2.09315 2.09315 0.75 3.75 0.75H12ZM16.0009 3.51468C16.6141 4.06398 17 4.86193 17 5.75V14C17 15.6569 15.6569 17 14 17H5.75C4.86145 17 4.06313 16.6137 3.51381 15.9999L14 16C15.1046 16 16 15.1046 16 14L16.0009 3.51468ZM3.75 1.75H12C13.1046 1.75 14 2.64543 14 3.75V12C14 13.1046 13.1046 14 12 14H3.75C2.64543 14 1.75 13.1046 1.75 12V3.75C1.75 2.64543 2.64543 1.75 3.75 1.75Z" fill="white"/>
                            </svg> 
                            SELECT MULTIPLE
                        </span>
                    </div>
            </div>

                {/* Image Grid and Footer */}
                <div className="img-grid">
                    {sampleImages.map((src, index) => (
                        <img key={index} src={src} alt={`Preview ${index}`} />
                    ))}
                </div>
            </div>

            <div className="add-img-footer">
                <div>
                    <span className="active">Library</span>
                    <span>Photo</span>
                    <span>Video</span>
                </div>
                <Footer border="none" mtop="10px" height="20px"/>
            </div>
        </div>
    );
}

export default AddImage;
