import React,{useState} from 'react';
import Card_Practice from './Card_Practice.js';
import menu from './MenuApi.js';

const Restaurant = () => {
  const[Menudata,setMenudata] = useState(menu);
  const filterItem = (category)=>{
    const updatedList = menu.filter((curElem)=>{
          return curElem.category===category;
    });
    setMenudata(updatedList);
  }
  const filterAll = ()=>{
    console.log(menu)
    setMenudata(menu)
  }
  return (
  <>
    <div className=' navbar justify-content-center'>
       <div className='btn btn-group'>
            <button className='btn btn-danger btn-outline-dark rounded-pill' onClick={()=>filterAll()}>home</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill' onClick={()=>filterItem('Breakfast')}>Breakfast</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill' onClick={()=>filterItem('Lunch')}>Lunch</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill' onClick={()=>filterItem('Snacks')}>Snacks</button>
            <button className='btn btn-danger btn-outline-dark rounded-pill' onClick={()=>filterItem('Milk-Shake')}>MilkShake</button>
       </div>

    </div>
    <div>
      < Card_Practice Menudata={Menudata} />
    </div>
  </>
  )
}

export default Restaurant
