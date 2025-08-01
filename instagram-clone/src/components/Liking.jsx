import "../styles/liking.scss"

const Liking = ({profilePics, username, photo, hgt, wth, rad}) => {
    return (
        


        <div className="liking">
            

            <div className="profile-pic">
                <img className="dp" src={profilePics} alt="" style={{width:wth, height:hgt, borderRadius:rad}}/> 
            </div>

            <div className="username"> 
               <p>{username} liked your photo</p>
            </div>

             <div className="photo"> 
                <img className="dp" src={photo} alt="" />
            </div>



        </div>
    );
}

 
export default Liking;


// import React from 'react';

// const dummyLikesData = [
//   {
//     id: 1,
//     username: 'john_doe',
//     profilePic: 'https://via.placeholder.com/40',
//   },
//   {
//     id: 2,
//     username: 'jane_smith',
//     profilePic: 'https://via.placeholder.com/40',
//   },
//   {
//     id: 3,
//     username: 'user123',
//     profilePic: 'https://via.placeholder.com/40',
//   },
// ];

// const LikesPage = () => {
//   return (
//     <div style={styles.container}>
//       <h2>Likes</h2>
//       <ul style={styles.list}>
//         {dummyLikesData.map((like) => (
//           <li key={like.id} style={styles.listItem}>
//             <img src={like.profilePic} alt={like.username} style={styles.profilePic} />
//             <span>{like.username}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };



