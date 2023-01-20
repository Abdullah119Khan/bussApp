import React from "react";
import { AiFillLike, AiFillCar, AiFillClockCircle } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import styles from "./OurAdvan.module.css";

const OurAdvanctage = () => {
  return (
    <div className={styles.services}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceItem}>
          <h1>OUR ADVANTAGES</h1>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.item}>
            <AiFillLike
              size={60}
              style={{
                textAlign: "center",
                color: "rgb(96, 194, 227)",
                marginBottom: "15px",
              }}
            />
            <h3 className="fw-bolder">Quality and Comfort</h3>
            <p>
              We provide high level services to our clients. Customers' comfort
              and safety are the most important for us!
            </p>
          </div>
          <div className={styles.item}>
            <AiFillCar
              size={60}
              style={{
                textAlign: "center",
                color: "rgb(96, 194, 227)",
                marginBottom: "15px",
              }}
            />
            <h3 className="fw-bolder">Professionalism</h3>
            <p>
              Our priority is to provide friendly and professional drivers
              together with vehicles. Just sit, relax and enjoy your ride!
            </p>
          </div>
          <div className={styles.item}>
            <div>
              <FaDollarSign
                size={60}
                style={{
                  textAlign: "center",
                  color: "rgb(96, 194, 227)",
                  marginBottom: "15px",
                }}
              />
            </div>
            <h3 className="fw-bolder">Affordable prices</h3>
            <p>
              Our bus rental provides you all of the services on 20% cheaper in
              comparison with other rentals across Dubai.
            </p>
          </div>
          <div className={styles.item}>
            <AiFillClockCircle
              size={60}
              style={{
                textAlign: "center",
                color: "rgb(96, 194, 227)",
                marginBottom: "15px",
              }}
            />
            <h3 className="fw-bolder">Flexibility</h3>
            <p>
              We provide all our services 24/7 for our regular customers. You
              can contact us anytime, if you have a question.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAdvanctage;
