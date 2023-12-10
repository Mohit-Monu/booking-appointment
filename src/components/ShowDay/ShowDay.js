import React from "react";
import styles from "./ShowDay.module.css";
const ShowDay = (props) => {
  return (
    <div className={styles.container} onClick={()=>props.setSelectedSlot(props.index)}>
      <h4>{props.day.date}</h4>
      {props.day.availableslots === 0 && (
        <span
          style={{
            borderBottom:
              props.index === props.selectedSlot ? "2px solid green" : "",
          }}
        >
          No slots available
        </span>
      )}
      {props.day.availableslots !== 0 && (
        <span
          style={{
            color: "green",
            borderBottom:
              props.index === props.selectedSlot ? "2px solid green" : "",
          }}
        >
          {props.day.availableslots} slots available
        </span>
      )}
    </div>
  );
};

export default ShowDay;
