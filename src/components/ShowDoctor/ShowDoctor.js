import React from "react";
import styles from "./ShowDoctor.module.css";
const ShowDoctor = (props) => {
  function setDoctorHandler(){
    props.setDoctorHandler(props.index)
  }
  return (
    <div
    className={props.index===props.selecteddoctor ?styles.doctorcontainerselected: styles.doctorcontainer}
    onClick={setDoctorHandler}
    >
      <img src={props.doctor.image} alt="doctor img"/>
      <div className={styles.doctordetails}>
        <h3>{props.doctor.name}</h3>
        <p>{props.doctor.specilist}</p>
      </div>
    </div>
  );
};

export default ShowDoctor;
