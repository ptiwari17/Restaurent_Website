import React,{useState} from 'react';
import '../Project/bootstrap.min.js';
import '../Project/bootstrap.min.css';

const Lecture1 = () => {
    const[name,setname]= useState("Lekhana");
    // console.log(useState("Lekhana"));
    let [array1,setArray1]= useState(['vinod',26])
    console.log(array1);
  return (
    <>
    <div className="container bg-danger border border-dark">
    <div className="row bg-warning justify-content-center mt-5 p-5 mb-5">
        <div className="col-6 bg-success ">
            <h1>{name}</h1>
            <button className='btn btn-primary btn-outline-danger rounded-pill' onClick={()=>setname(name=="Lekhana"?'chirri':"Lekhana")}>change name</button>
        </div>
        <div className="col-6 bg-secondary ">
            <h1>name:{array1[0]} age:{array1[1]}</h1>
            <button className='btn btn-primary btn-outline-dark rounded-pill' onClick={()=>setArray1(array1=['vinod',26]?['Thapa',27]:['vinod',26])}>change Array1</button>
            {/* <button className='btn btn-primary btn-outline-dark rounded-pill' onClick={()=>setArray1(array1.map((curElem)=>{
                return  <h1>name:{curElem='Thapa'} age:{curElem=27} </h1>}))}>change Array1</button> */}
                <button className='btn btn-dark btn-outline-success rounded-pill' onClick={()=>setArray1(array1=[])}>clear Array1</button>
        </div>
    </div>
      
    </div>
  </>
  )
}

export default Lecture1;
