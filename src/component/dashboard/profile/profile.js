import React from 'react'
const Profile = () => {
  return (
    <div className='profile'>
        <div className='p-img'>
          <div></div>
        </div>
        <div className='p-content'>
          <div className='p-title'>User Name</div>
          <div className='p-username'>@username</div>
          <div className='p-email'>username@gmail.com</div>
          <div className='p-city'>City</div>
        </div>
        <div className='p-button'><button>Update Profile</button></div>
    </div>
  )
}

export default Profile;