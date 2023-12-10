import React from 'react'
import styles from "./ShowDoctor.module.css"
const ShowDoctor = (props) => {
  return (
    <div className={styles.doctorcontainer}>
      <img src={props.doctor.image} />
      <div className={styles.doctordetails}>
        <h3>{props.doctor.name}</h3>
        <p>{props.doctor.specilist}</p>
      </div>
    </div>
  )
}

export default ShowDoctor