import React from 'react'
import transform from "../images/desktop/image-transform.jpg"
import standout from "../images/desktop/image-stand-out.jpg"
import graphic from "../images/desktop/image-graphic-design.jpg"
import phtography from "../images/desktop/image-photography.jpg"
import emily from "../images/image-emily.jpg"
import thomas from "../images/image-thomas.jpg"
import jennis from "../images/image-jennie.jpg"
import milk from "../images/desktop/image-gallery-milkbottles.jpg"
import orange from "../images/desktop/image-gallery-orange.jpg"
import cone from "../images/desktop/image-gallery-cone.jpg"
import sugar from "../images/desktop/image-gallery-sugarcubes.jpg"

function Content() {
  return (
    <>
      <div className='row p-0'>
        <div style={{ padding: "  p-0" }} className='col-md-6 bg-white d-flex justify-content-center  flex-column align-items-center p-0'>
          <h1 className='text-start'>Transform your <br /> brand</h1>

          <p>We are a full-service creative agency specializing in <br />
            helping brands grow fast. Engage your clients through <br />
            compelling visuals that do most of the marketing for you.</p>

        </div>
        
          <img src={transform}className="col-md-6" alt= "" />

        

      </div>

      <div className='row p-0'>
        

          <img src={standout}className= "col-md-6 p-0 " alt="" />
        
        <div style={{ padding: "0px 3rem " }} className='col-md-6 bg-white d-flex justify-content-center  flex-column align-items-center'>
          <h1 className='text-start'>Stand out to the right audience</h1>

          <p> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>
         

        </div>

      </div>

      <div className="row">
        <div className="col-md-6 p-0 ">
          <div
            className="my-child-div text center"
            style={{
              backgroundImage: `url(${graphic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "100vh"
            }}
          >
            <div className=' p-5'></div>
            <p className="text-white">Text for the first div</p>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div
            className="my-child-div text-center"
            style={{
              backgroundImage: `url(${phtography})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "100vh"
            }}
          >
            <div className=' p-5'></div>
            <p className="text-white p-5 md-5">Text for the second div</p>
          </div>
        </div>
      </div>


      <div className='row'>
      <div class="col-md-4 text-center">
  <img src={emily} class="card-img-top rounded-circle w-25" alt="..."/>
  <div class="card-body">
    <p class="card-title">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
    <h5 class="card-text">Emily r.</h5>
    <p>Marketing Director</p>
    
  </div>
</div>

<div class="col-md-4 text-center">
  <img src={thomas} class="card-img-top rounded-circle w-25" alt="..."/>
  <div class="card-body">
    <p class="card-title">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
    <h5 class="card-text">Thomas S.</h5>
    <p>Chief Operating Officer</p>
    
  </div>
  
</div>
<div class="col-md-4 text-center">
  <img src={jennis} class="card-img-top rounded-circle w-25" alt="..."/>
  <div class="card-body">
    <p class="card-title">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
  </p>
    < h5 class="card-text">Jennie F.</h5>
    <p>Business Owner </p>
  
  </div>
</div> 
      </div>
      <div className='row '>
        <img src={milk} className= "col-md-3 p-0"alt="" />
        <img src={orange} className='col-md-3 p-0' alt="" />
        <img src={cone} className='col-md-3 p-0' alt="" />
        <img src={sugar} className= "col-md-3 p-0"alt="" />

      </div>

    </>
  )
}

export default Content;