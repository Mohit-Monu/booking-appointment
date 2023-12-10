import React from "react";
import ShowDoctor from "../ShowDoctor/ShowDoctor";
import styles from "./ShowDoctors.module.css"
const ShowDoctors = () => {
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
  return (
    <div className={styles.doctorcontainer}>
        {doctorDetails.map((doctor=>(
            <ShowDoctor key={doctor.name} doctor={doctor} ></ShowDoctor>
        )))}
    </div>
  );
};

export default ShowDoctors;
