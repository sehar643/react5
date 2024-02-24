import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"></a> */}
          <img src="https://salitexonline.com/cdn/shop/files/logo_2_2413ab87-c321-4fe8-b053-8174b361ab0f_192x64.png?v=1674305469" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Women
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex={-1} aria-disabled="true">Men</a>
              </li>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
            {/* <Link to="form"><button className="btn btn-outline-success" type="submit">Register</button></Link>
        &emsp; */}
            {/* <Link to="login"><button className="btn btn-outline-success" type="submit">Login</button></Link> */}
            {/* </form> */}

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Sign Up / LogIn
            </button>


            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content mbody">
                  <div className="modal-header">
                    <h5 className="modal-title txt" id="exampleModalLabel">Connect with us</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body mbody">
                    <div className="bdy">
                      <div className="section">
                        <div className="container">
                          <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log" />
                                <div className="card-3d-wrap mx-auto">
                                  <div className="card-3d-wrapper">
                                    <div className="card-front">
                                      <div className="center-wrap">
                                        <div className="section text-center">
                                          <h4 className="mb-4 pb-3">Log In</h4>
                                          <div className="form-group">
                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                            <i className="input-icon uil uil-at" />
                                          </div>
                                          <div className="form-group mt-2">
                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                            <i className="input-icon uil uil-lock-alt" />
                                          </div>
                                          <a href="#" className="btn mt-4">submit</a>
                                          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card-back">
                                      <div className="center-wrap">
                                        <div className="section text-center">
                                          <h4 className="mb-4 pb-3">Sign Up</h4>
                                          <div className="form-group">
                                            <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                            <i className="input-icon uil uil-user" />
                                          </div>
                                          <div className="form-group mt-2">
                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                            <i className="input-icon uil uil-at" />
                                          </div>
                                          <div className="form-group mt-2">
                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                            <i className="input-icon uil uil-lock-alt" />
                                          </div>
                                          <a href="#" className="btn mt-4">submit</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>




                  </div>
                  {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
                </div>
              </div>
            </div>





          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar