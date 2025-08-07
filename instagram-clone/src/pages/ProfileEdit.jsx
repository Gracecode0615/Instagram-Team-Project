import Footer from "../components/Footer";
import '../styles/profileEdit.scss'
import dp1 from '../assets/dp/dp1.png';

function ProfileEdit(){
    return (
        <div className="profile-edit-container">
            <div className="edit-wrapper">
                <div className="top">
                    <span className="cancel">Cancel</span>
                    <span className="edit active">Edit Profile
                    </span>
                    <span className="done">Done</span>
                </div>

                <div>
                    <img src={dp1} alt="" />
                    <p>Change Profile Photo</p>
                </div>

                <div>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Jacob West</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>jacob_w</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td className="website">Website</td>
                        </tr>
                        <tr>
                            <td>Bio</td>
                            <td>
                                Digital goodies designer <a href="#">@pixsellz </a> 
                                Everything is designed.
                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <p>Switch to Professional Account</p>
                </div>

                <div>
                    <h3>Private Information</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>jacob.west@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+12025550147</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>Male</td>
                        </tr>
                    </table>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProfileEdit
