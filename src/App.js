import './App.css';
import Header from './components/Header/Header';
import ShowDoctors from './components/ShowDoctors/ShowDoctors';
import BookAppontment from './components/BookAppontment/BookAppontment';
import { useState } from 'react';
import ShowClinicName from "./components/ShowClinicName/ShowClinicName"
function App() {
  const[doctor,setDoctor]=useState(0)
  const[method,setMethod]=useState("clinic")

  const doctorDetails = [
    {
      name: "Dr. Manik Dalvi",
      specilist: "Obstetrics & Gynecology",
      image: "https://cdn-icons-png.flaticon.com/512/206/206875.png",
    },
    {
      name: "Dr. Malik Deshmuk",
      specilist: "Cardiologist",
      image: "https://cdn-icons-png.flaticon.com/512/2713/2713228.png",
    },
    
  ];

  function setDoctorHandler(number){
    setDoctor(number)
  }
  function setMethodHandler(method){
    setMethod(method)
  }
  return (
      <div className='bigcontainer'>
      <Header></Header>
      <div className='container'>
        <ShowDoctors doctor={doctor} setDoctorHandler={setDoctorHandler} doctorDetails={doctorDetails}/>
        <BookAppontment method={method} setMethodHandler={setMethodHandler}/>
        <ShowClinicName/>
      </div>
      {/* footer */}
      </div>
  );
}

export default App;
