import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const AddFarmerModal = ({ setOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Modal show={setOpenModal}>
        <Modal.Header>
          <h5>+ Add Small-Scale Farmer (Environment Details)</h5>
          <div className="modal__close">
            <h5
              className="view overlay zoom"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <i
                className="hoverable bx bx-x "
                style={{ fontSize: "26px" }}
              ></i>
            </h5>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => {}} encType="multipart/form-data">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Temperature
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="enter environment temperature"
                    name="name"
                    // value={data.pName}
                    // onChange={(e) => {
                    //   handleChange(e);
                    // }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-inputState" className="form-label">
                    Humidity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="enter environment humidity"
                    name="nic"
                    // value={data.pName}
                    // onChange={(e) => {
                    //   handleChange(e);
                    // }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-inputState" className="form-label">
                    Rainfall
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="enter annual rainfall"
                    name="dob"
                    // value={data.pName}
                    // onChange={(e) => {
                    //   handleChange(e);
                    // }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-inputState" className="form-label">
                    Wind Speed
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="enter avarage wind speed"
                    name="email"
                    // value={data.pName}
                    // onChange={(e) => {
                    //   handleChange(e);
                    // }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-inputState" className="form-label">
                    Pest and Disease Infestation
                  </label>
                  <textarea
                    rows="3"
                    cols="30"
                    placeholder="are there any pest and disease infestation have"
                    id="address"
                  >
                    {" "}
                  </textarea>
                </div>
              </div>

              {/* Model Footer */}
              <div className="modal-footer">
                <button
                  className="btn btn-secondary "
                  data-dismiss="modal"
                  type="button"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  {" "}
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Submit
                </button>
                {/* Model Footer */}
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddFarmerModal;
