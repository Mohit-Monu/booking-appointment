import React from "react";
import styles from "./BookAppontment.module.css";
const BookAppontment = (props) => {
  const selectedSVG=props.method
  function changeSelected(svg){
    props.setMethodHandler(svg)
  }
  return (
    <div className={styles.bigcontainer}>
      <div className={styles.container}>
        <span className={styles.header}>Book Appointment</span>
        <span className={styles.header2}>Select Your Consultation Type</span>
        <span className={styles.green}>Fees approx ₹ 500</span>
        <span className={styles.blue}>(pay at clinic)</span>
      </div>
      <div className={styles.container2}>
        <div className={selectedSVG==="clinic"?styles.svgselected:styles.svgs} onClick={()=>{changeSelected("clinic")}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-hospital"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
            <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
          </svg>

          <p className={selectedSVG==="clinic"?styles.TextSelected:styles.Text}>Clinic</p>
        </div>
        <div className={selectedSVG==="Audio"?styles.svgselected:styles.svgs} onClick={()=>{changeSelected("Audio")}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          <p className={selectedSVG==="Audio"?styles.TextSelected:styles.Text}>Audio</p>
        </div>
        <div className={selectedSVG==="Video"?styles.svgselected:styles.svgs} onClick={()=>{changeSelected("Video")}}>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-camera-video-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"
            />
          </svg>
          <p className={selectedSVG==="Video"?styles.TextSelected:styles.Text}>Video</p>
        </div>
      </div>
    </div>
  );
};

export default BookAppontment;
