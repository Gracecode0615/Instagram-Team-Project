import "../styles/liking.scss"

const Follow = ({ profilePics, username, btn, wth, hgt, rad, bhgt, bwth, bgc, brad, pad, bdr, txt }) => {
    return (
        <div className="liking">

            <div className="profile-pic">
                <img className="dp" src={profilePics} alt="" style={{ width: wth, height: hgt, borderRadius: rad, border:bdr}} />
            </div>

            <div className="username">
                <p> <span className="uname">{username}</span> started following you.</p>
            </div>

            <div className="photo">
                <button className="btn" style={{ width: bwth, height: bhgt, borderRadius: brad, backgroundColor: bgc, padding: pad, color:txt}}>{btn}</button>
            </div>

        </div>

    );
}

export default Follow;