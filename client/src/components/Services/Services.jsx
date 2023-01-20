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
              size={60}
              style={{
                textAlign: "center",
                color: "rgb(96, 194, 227)",
                marginBottom: "15px",
              }}
            />
            <h3>STAFF/LABOR TRANSPORTATION</h3>
            <p>
              Corporate transportation of teaching, hospital, bank, security,
              office staff and labor workers
            </p>
            <button>Read More...</button>
          </div>
          <div className={styles.item}>
            <FaCity
              size={60}
              style={{
                textAlign: "center",
                color: "rgb(96, 194, 227)",
                marginBottom: "15px",
              }}
            />
            <h3>DUBAI, ABU DHABI CITY TOUR</h3>
            <p>
              City tour trips become easy with our rental service! We will show
              best places and give you useful tips
            </p>
            <button>Read More...</button>
          </div>
          <div className={styles.item}>
            <div>
              <FaPlane
                size={60}
                style={{
                  textAlign: "center",
                  color: "rgb(96, 194, 227)",
                  marginBottom: "15px",
                }}
              />
            </div>
            <h3>AIRPORT TRANSFER</h3>
            <p>
              Airport transfer service from all the main airports: Dubai, Abu
              Dhabi and Sharjah
            </p>
            <button>Read More...</button>
          </div>
          <div className={styles.item}>
            <FcGraduationCap
              size={60}
              style={{
                textAlign: "center",
                color: "rgb(96, 194, 227)",
                marginBottom: "15px",
              }}
            />
            <h3>SCHOOL BUS RENTAL</h3>
            <p>
              We have a big fleet of busses available for students transfer in
              different cities!
            </p>
            <button>Read More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
