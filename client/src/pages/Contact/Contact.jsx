import React, { useRef } from "react";
import Anoucement from "../../components/Anoucement/Anoucement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_00vqbc2",
        "template_z7gaqvj",
        form.current,
        "dAa35vf7ry8ZNzoX1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Anoucement />
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h3 className="fw-bold text-black">CONTACT US</h3>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-4">
        <div className="row">
          <div className="col-md-5 m-auto">
            <span>
              Our bus rental dubai-abu dhabi-Sharjah Passenger transportation
              company works all over UAE. That is why you can find our offices
              and rent points in Dubai, Sharjah and Abu Dhabi. We offer such
              types of transport for rent: Toyota Hiace, Coaster, minivan,
              school buses, limousine and personal cars. Additionally, we
              provide rent transport services 24 hours per day/7 days per week.
              Just contact us, if you have any questions!
            </span>
          </div>
          <div className="col-md-5 m-auto text-center">
            <h4>Jibran Khan</h4>
            <span>
              <strong>Transport Manager</strong>
            </span>
            <p>
              Contact: <strong>+971 52 122 0414</strong>
            </p>
            <p>
              Mail: <strong>risingsuntravels329@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-4">
        <div className="row m-auto">
          <div className="col-md-6 m-auto">
            <div className="card">
              <div className="card-body">
                <h3 className="bg-success text-white p-3 rounded-2">
                  Contact Form
                </h3>
                <form
                  ref={form}
                  action=""
                  className="form"
                  onSubmit={sendEmail}
                >
                  <div className="mb-3 mt-3 fw-bold">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="user_name"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="user_email"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Confirm Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="user_confirmemail"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="user_phone"
                    />
                  </div>
                  <div>
                    <label>Your Question to Us or comment</label>
                    <textarea
                      name="message"
                      id=""
                      cols="47"
                      rows="6"
                      className="form-control"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-3 btn btn-lg btn-outline-success"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
