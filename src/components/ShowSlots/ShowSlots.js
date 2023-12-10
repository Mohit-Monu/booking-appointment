import React, { useEffect, useState } from "react";
import styles from "./ShowSlots.module.css";
import ShowDay from "../ShowDay/ShowDay";
const ShowSlots = (props) => {
  const [slotno, setSlotno] = useState([0, 2]);
  const [date, setDay] = useState(props.slots);
  const [selectedSlot,setSelectedSlot]=useState(0)
  useEffect(() => {
    if (slotno[0] === 0) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 2);
      const day = currentDate.toLocaleString("en", { weekday: "short" });
      const date = currentDate.getDate();
      setDay([
        ...props.slots,
        {
          date: `${day}, ${date} Dec`,
          slots: [true, true, true, true, true, true, true, true],
          availableslots: 8,
        },
      ]);
    } else {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + slotno[0]);
      const day = currentDate.toLocaleString("en", { weekday: "short" });
      const date = currentDate.getDate();
      const currentDate2 = new Date();
      currentDate2.setDate(currentDate2.getDate() + (slotno[0] + 1));
      const day2 = currentDate2.toLocaleString("en", { weekday: "short" });
      const date2 = currentDate2.getDate();
      const currentDate3 = new Date();
      currentDate3.setDate(currentDate3.getDate() + (slotno[0] + 2));
      const day3 = currentDate3.toLocaleString("en", { weekday: "short" });
      const date3 = currentDate3.getDate();
      setDay([
        {
          date: `${day}, ${date} Dec`,
          slots: [true, true, true, true, true, true, true, true],
          availableslots: 8,
        },
        {
          date: `${day2}, ${date2} Dec`,
          slots: [true, true, true, true, true, true, true, true],
          availableslots: 8,
        },
        {
          date: `${day3}, ${date3} Dec`,
          slots: [true, true, true, true, true, true, true, true],
          availableslots: 8,
        },
      ]);
    }
  }, [slotno, props.slots]);
  return (
      <div className={styles.container}>
        <svg
          style={{ cursor: "pointer" }}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={slotno[0] !== 0 ? "currentColor" : "gray"}
          className="bi bi-chevron-compact-left"
          viewBox="0 0 16 16"
          onClick={() => {
            if (slotno[0] === 0) {
            } else {
              setSlotno([slotno[0] - 3, slotno[1] - 3]);
            }
          }}
        >
          <path
            fillRule="evenodd"
            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
          />
        </svg>
          {date.map((day,index) => (
            <div className={styles.day}>
              <ShowDay index={index} day={day} selectedSlot={selectedSlot} setSelectedSlot={(num)=>setSelectedSlot(num)}/>
            </div>
          ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          style={{ cursor: "pointer" }}
          height="30"
          fill="currentColor"
          className="bi bi-chevron-compact-right"
          viewBox="0 0 16 16"
          onClick={() => setSlotno([slotno[0] + 3, slotno[1] + 3])}
        >
          <path
            fillRule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </div>
  );
};

export default ShowSlots;
