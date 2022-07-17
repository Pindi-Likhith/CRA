import React from 'react';
import './Section1.css';

function Section1()
{

   return(
   <React.Fragment>
    <div className='section-main'>
      <div className='section-1'>

     <form className="form">

     <p className="p">Enter color code</p>
     <input type="text"  id="text" className="text"></input><br></br><br></br>

     <button className="button" >ADD</button>

     </form>
      </div>

      <div className='section-2'>

  
      <div className="col-1"></div>
      <div className="col-2"></div>
      <div className="col-3"></div>
      <div className="col-4"></div>

      </div>
      </div>
   </React.Fragment>
   )
}
export default Section1;