import React from 'react'

function Footer() {
  return (
    <>
    <div className='row text-center p-5' style={{backgroundColor:" hsl(168, 34%, 41%)"}}>
        <h5 >Sunnyside</h5>
        

        <div className='row text-center'>
            <div className='row col-6 mx-auto'>
            <div className='col-md-4'>about</div>
            <div className='col-md-4'>services</div>
            <div className='col-md-4'>projects</div>

            </div>
            
            <div className='my-5 text-center'>
                <div className='col-6 mx-auto'>
                    <img width="50" height="50" src="https://img.icons8.com/office/50/000000/facebook.png" className='mx-3' alt="facebook"/>

                    <img width="50" height="50" src="https://img.icons8.com/ios/50/instagram-new--v1.png" className='mx-3' alt="instagram-new--v1"/>

                    <img width="50" height="50" src="https://img.icons8.com/ios/50/twitter--v1.png" className= "mx-3"alt="twitter--v1"/>

                    <img width="48" height="48" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-pinterest-social-media-tanah-basah-glyph-tanah-basah.png" className='mx-3' alt="external-pinterest-social-media-tanah-basah-glyph-tanah-basah"/>
            </div>
            </div>
        </div>
        </div>


    
    
    
    </>
  )
}

export default Footer