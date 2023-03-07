import React,{useState} from 'react';
import Card_Practice from './Card_Practice.js';
import menu from './MenuApi.js';

const Restaurant = () => {
  const[Menudata,setMenudata] = useState(menu);
  return (
  <>
    <div className=' navbar justify-content-center'>
       <div className='btn btn-group'>
            <button className='btn btn-danger btn-outline-dark rounded-pill'>home</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill' onClick={()=>}>Breakfast</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill'>Lunch</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill'>Snacks</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill'>MilkShake</button>
       </div>

    </div>
    <div>
      < Card_Practice Menudata={Menudata} />
    </div>
  </>
  )
}

export default Restaurant
