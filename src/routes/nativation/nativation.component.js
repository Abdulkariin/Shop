import React from 'react';
import { Fragment} from "react";
import { Outlet , Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './nativation.style.scss'





const Nativation = () => (
   <Fragment>
   
   <div className='navigation'>
   <Link className='logo-container' to='/'>
   <CrwnLogo   className="logo" />
   </Link>
 
    
   <div className='nav-links-container'>
       <Link className='nav-link' to='/shop'>
       SHOP
        </Link>
        <Link className='nav-link'  to='/sign-in'>
            SIGN IN
        </Link>


    </div>
    </div>
     <Outlet />
   </Fragment>
  )
export default Nativation;