import React from 'react';
import Orientation from'../componentSmall/Orientation';
import Status from'../componentSmall/Status';


const Profile = () => (

  <div>
    <h1 style ={{marginLeft: '2rem' }}>My Profile</h1>
     <div>
     	<Orientation/> 
     	<Status/>
     </div>
  </div>
)

export default Profile;

        // <img src = {require('../photo.jpg')} 
        //  style ={{width :200, height : 170, marginBottom: 10}}
        // />
