import React  from 'react';

export default function About(props) {
   let myStyle={
     color:props.mode==='dark'?'white':'#1E2C2F',
     backgroundColor:props.mode==='dark'?'#1E2C2F':'white'
   }

    
  return (
    <div >
      <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  style={myStyle} aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyse Your Text</strong> 
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils Gives You A  Way To Analyse Your Text Quickly And Efficiently.Be It Word Count, Character Count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
              <strong>Free To Use</strong> 
              </button>
            </h2>
            <div  id="collapseTwo"  className="accordion-collapse collapse"  aria-labelledby="headingTwo"  data-bs-parent="#accordionExample" >
              <div className="accordion-body" style={myStyle}>
                TextUtils Is A Free Character Counter Tool The Provides Instant Character Count & Word Count Statistics For A Given 
                Text. TextUtils Reports The Number Of Words And Chracter.Thus It Is Suitable For Writing Text With Word / Character Limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
              <strong>Browser Compatible</strong> 
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This Word Counter Software Works In Any Web Browser Such As Chrome, Firefox, Internet Explorer, Safari, Opera. It 
                Suits To Count Characters In Facebook, Blog , Books ,Excel Documents, Pdf Documents ,Essays , etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}