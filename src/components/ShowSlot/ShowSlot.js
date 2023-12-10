import React, { useState } from "react";
import styles from "./ShowSlot.module.css";
const ShowSlot = (props) => {
  const time = [
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
  ];
  const [selectedSlot, setSelectedSlot] = useState(null);
  return (
    <div>
      <div className={styles.container}>
        {props.slots.map((slot, index) =>
          slot ? (
            selectedSlot === index ? (
              <div className={styles.container4}>{time[index]}</div>
            ) : (
              <div
                onClick={() => setSelectedSlot(index)}
                className={styles.container2}
              >
                {time[index]}
              </div>
            )
          ) : (
            <div className={styles.container3}>{time[index]}</div>
          )
        )}
      </div>
      {selectedSlot?<button className={styles.submit}>Continue</button>:<button className={styles.submit2}>Continue</button>}
    </div>
  );
};

export default ShowSlot;
