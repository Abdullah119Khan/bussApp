import React from "react";
import styles from "./Service.module.css";
import { IoBusSharp } from "react-icons/io5";
import { FaCity, FaPlane } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceItem}>
          <h1>OUR SERVICE</h1>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.item}>
            <IoBusSharp
              size={40}
              style={{ textAlign: "center", color: "rgb(96, 194, 227)" }}
            />
            <h2>STAFF/LABOR TRANSPORTATION</h2>
            <p>
              Corporate transportation of teaching, hospital, bank, security,
              office staff and labor workers
            </p>
          </div>
          <div className={styles.item}>
            <FaCity
              size={40}
              style={{ textAlign: "center", color: "rgb(96, 194, 227)" }}
            />
            <h2>DUBAI, ABU DHABI CITY TOUR</h2>
            <p>
              City tour trips become easy with our rental service! We will show
              best places and give you useful tips
            </p>
          </div>
          <div className={styles.item}>
            <div>
              <FaPlane
                size={40}
                style={{ textAlign: "center", color: "rgb(96, 194, 227)" }}
              />
            </div>
            <h2>AIRPORT TRANSFER</h2>
            <p>
              Airport transfer service from all the main airports: Dubai, Abu
              Dhabi and Sharjah
            </p>
          </div>
          <div className={styles.item}>
            <FcGraduationCap
              size={40}
              style={{ textAlign: "center", color: "rgb(96, 194, 227)" }}
            />
            <h2>SCHOOL BUS RENTAL</h2>
            <p>
              We have a big fleet of busses available for students transfer in
              different cities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
