import React,{useState} from 'react';
import '../Project/bootstrap.min.js';
import '../Project/bootstrap.min.css';

const Lecture5 = () => {
    let obj1 = {
        name: "Jeetu",
        surName:"Tiwari",
        isGood:true
    }
    let obj2 = {
      name: "Lekhana",
      surName:"Chirri",
      isGood:false
  }
    let [object1,setObject]=useState(obj1);
    console.log("outside onClick",object1)
    let changeObjectComplete=()=>{
        setObject(obj2);
        console.log("inside onClick function changeObjectComplete=",object1)
    }
    let changeObjectName=()=>{
      object1,
      setObject({...object1,name:"Lekhana Tiwari"});
      console.log("inside onClick function changeObjectName=",object1)
  }
  return (
    <div className=' container bg-gradient'>
     <div className="row">
        <div className="col-6 bg-warning">
            <h1>{object1.name}</h1>
            <h1>{object1.surName}</h1>
            <h1>{object1.isGood.toString()}</h1>
            <button className='btn btn-dark btn-outline-success' onClick={changeObjectComplete}>change Complete</button>
            <button className='btn btn-danger btn-outline-dark' onClick={changeObjectName}>change Name</button>
        </div>
     </div>
      
    </div>
  )
}

export default Lecture5
