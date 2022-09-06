import React from 'react'
import './Account.css'
const Account = ({ accountPopup, setAccountPopup }) => {
  return (
    <div
      style={accountPopup ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }}
      className='account-popup same'
    >
      <div className='account-credentials'>
        <div className='account-username'>
          <h3>Ardonit Saliji</h3>
          <p>@Ardonit</p>
        </div>
        <img
          onClick={() => setAccountPopup(false)}
          src='https://yt3.ggpht.com/yti/AJo0G0m-2Y8iR9ecaHPVTitXtXBSyBivDb6SNOPmBg=s88-c-k-c0x00ffffff-no-rj-mo'
          alt=''
        />
      </div>
    </div>
  )
}

export default Account
