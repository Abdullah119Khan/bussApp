import React from "react";
import Anoucement from "../../components/Anoucement/Anoucement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
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
          <div className="col-md-10 m-auto">
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
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-6 m-auto">
            <div className="card">
              <div className="card-body">
                <h3 className="bg-success text-white p-3 rounded-2">
                  Contact Form
                </h3>
                <form action="" className="form">
                  <div className="mb-3 mt-3 fw-bold">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label>Confirm Email</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label>Phone</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div>
                    <label>Your Question to Us or comment</label>
                    <textarea
                      name=""
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
