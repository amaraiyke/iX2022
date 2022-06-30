import React from 'react';

import {Link} from 'react-router-dom';

import { signOut } from 'firebase/auth';

// Import Bootstrap Styling from Node Modules
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


import { auth } from '../../firebase/firebase';

export default function Navbar(props) {


  async function onLogoutClicked() {
    await signOut(auth);
  }

  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <div className="navbar-brand">Navbar</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        {
                            props.user ? 
                                <li className="nav-item">
                                    <button onClick={onLogoutClicked} className='btn btn-primary'>
                                        Logout
                                    </button>
                                </li>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                        }

                    </ul>
                </div>
          </div>
      </nav>
   )
}
