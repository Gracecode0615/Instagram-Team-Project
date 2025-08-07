import "../styles/liking.scss"

const Liking = ({profilePics, username, photo, hgt, wth, rad, btn}) => {
    return (
        <div className="liking">
            
            <div className="profile-pic">
                <img className="dp" src={profilePics} alt="" style={{width:wth, height:hgt, borderRadius:rad}}/> 
            </div>

            <div className="username"> 
               <p> <span className="uname">{username}</span> liked your photo</p>
            </div>

             <div className="photo"> 
                <img className="dp" src={photo} alt="" />
            </div>

        </div>
    );
}

 
export default Liking;




