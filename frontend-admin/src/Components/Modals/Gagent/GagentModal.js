import React from 'react'
import { Modal } from "react-bootstrap";

const GagentModal = ({ setOpenModal }) => {
  return (
    <div>
      <Modal show={setOpenModal}>
        <Modal.Header>
          <h5>Add Goverment Agent</h5>
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

          <form
            onSubmit={(e) => {

            }}
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder='enter your full name'
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
                  <label htmlFor="formrow-email-input" className="form-label">
                    Goverment Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formrow-inputZip"
                    name="gid"
                    placeholder='enter goverment id'
                    // value={data.pBarCode}
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
                  Date Of Birth
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder='enter your date of birth'
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
                    Nic
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder='enter your nic'
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
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder='enter your email'
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
                   Contact No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder='enter your contact no'
                    name="contactno"
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
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder='enter your address'
                    name="address"
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
                  <label htmlFor="formrow-email-input" className="form-label">
                    User Roll
                  </label>
                  <select
                    type="text"
                    className="form-select"
                    name="pVariation"
                  // value={data.pVariation}
                  // onChange={(e) => {
                  //   handleChange(e);
                  // }}
                  >
                    <option value="" selected disabled="disabled">
                      Choose...
                    </option>
                    {/* {variation?.map((data) => {
                      return (
                        <option key={data.varName} value={data.varId}>
                          {data.varName}
                        </option>
                      );
                    })} */}
                  </select>
                </div>
              </div>
              {/* Model Footer */}
              <div className="modal-footer">
                <button className="btn btn-secondary " data-dismiss="modal"
                  type="button"
                  onClick={() => {
                    setOpenModal(false);
                  }}> Close
                </button>
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
                {/* Model Footer */}
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default GagentModal