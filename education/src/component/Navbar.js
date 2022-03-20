import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-light bg-dark" >
        <div className="container-fluid">
       
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark" >
        <div className="container-fluid">
           {/* <a className="navbar-brand" href="#">Navbar</a>  */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <a className="navbar-brand" href="#">
                    <img src="./loop.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                    LOOP
                  </a>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/HOMEPAGE.html">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Register
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="./StudentSection/studentsection.html">Student</a></li>
                  <li><a className="dropdown-item" href="#">Teacher</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./leaderboard/student.html">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Contact Us</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  </nav>  
    
    </div>
  )
}

export default Navbar