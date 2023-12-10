import React from "react";
import ShowDoctor from "../ShowDoctor/ShowDoctor";
import styles from "./ShowDoctors.module.css"
const ShowDoctors = (props) => {
  function setDoctorHandler(index){
    props.setDoctorHandler(index)
  }
  return (
    <div className={styles.doctorcontainer}>
        {props.doctorDetails.map(((doctor,index)=>(
            <ShowDoctor key={doctor.name} doctor={doctor} selecteddoctor={props.doctor} index={index} setDoctorHandler={setDoctorHandler}></ShowDoctor>
        )))}
    </div>
  );
};

export default ShowDoctors;
