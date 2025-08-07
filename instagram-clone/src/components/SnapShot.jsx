import React, { useEffect, useRef, useState } from 'react';
import "../styles/snap-shot.scss"

const SnapShot = () => {
    const [image, setImage] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
            } catch (error) {
                console.error("Error accessing the camera: ", error);
            }
        };
        startCamera();

        return () => {
            if (videoRef.current) {
                const stream = videoRef.current.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                }
            }
        };
    }, []);

    const handleCapture = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        setImage(imageData);
    };


    return (
        <div className='container'>
            
            <div className="camera-container">
                <video ref={videoRef} autoPlay className="video" />
                <button onClick={handleCapture} className="capture-button">Take Picture</button>
                <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
            </div>
            {image && (
        <div className="image-preview">
          <h2>Captured Image:</h2>
          <img src={image} alt="Captured" />
        </div>
      )}

        </div>
    )
}

export default SnapShot;







//   return (
//     <div className="container">
//       <h1>Instagram Picture Shot</h1>
//       <div className="camera-container">
//         <video ref={videoRef} autoPlay className="video" />
//         <button onClick={handleCapture} className="capture-button">Take Picture</button>
//         <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
//       </div>
//       {image && (
//         <div className="image-preview">
//           <h2>Captured Image:</h2>
//           <img src={image} alt="Captured" />
//         </div>
//       )}
    // </div>
