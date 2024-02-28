import React from 'react'
import logo from "../images/logo.svg"
import header from "../images/mobile/image-header.jpg"

function Banner() {
  
  return (
    <> 
    <div style={{ backgroundColor: "rgb(62,191,255)" }}>
        <div style={{
          backgroundImage: `url(${header})`,
          backgroundSize: 'initial',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          
        }}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div style={{
              display: 'flex',
              justifyContent: 'between',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '',
              width:"100%"
            }}>
              
              <div>
                <img src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

             
              <ul class="nav justify-content-end display-flex-row">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Project</a>
                </li>
                
                <button>contact</button>
                
                 
                
              </ul>
             

              
            </div>
          </nav>
          <h1 className='text-center'> We are creatives</h1>
        </div>
       
      </div>
    </>
  );
}
export default Banner