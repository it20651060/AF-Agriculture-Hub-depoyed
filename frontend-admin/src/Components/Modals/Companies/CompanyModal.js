import React, { useEffect, useRef, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const CompanyModal = ({ setOpenModal }) => {

  //use State Returns a stateful value, and a function to update it.
  const [cName, setComName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [regDate, setregDate] = useState("");
  const [expDate, setexpDate] = useState("");
  const [toastMsg, setToastMsg] = useState(true);

  //Form submition
  const handleSubmit = (e) => {
    //The preventDefault() method cancels the event if it is cancelable, 
    //meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    const newRule = {
      cName,
      address,
      contactNumber,
      email,
      regDate,
      expDate
    }

    axios.post("https://finaldeploye.onrender.com/company/add", newRule).then((res) => {
      console.log(res);
      toastShow();
      modalClose();
      setTimeout(() => {
        window.location.reload();
      }, 2010);
    }).catch((err) => {
      console.log(err);
      setToastMsg(!toastMsg);
    })

  }

  //Modal close function
  const modalClose = () => {
    setOpenModal(false);
  };

  //toast for dataInsert
  const toastShow = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: toastMsg ? "success" : "warning",
      title: toastMsg ? "Added Successfully." : "Can't added.",
    });
  };

  return (
    <div>
      <Modal show={setOpenModal}>
        <Modal.Header>
          <h5>Add Company</h5>
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
              handleSubmit(e);
            }}
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder='enter company Name'
                    name=""
                    // value={data.pName}
                    onChange={(e) => { setComName(e.target.value); }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Company Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formrow-inputZip"
                    name="pBarCode"
                    placeholder='enter company address'
                    // value={data.pBarCode}
                    onChange={(e) => { setAddress(e.target.value); }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Company Contact No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="formrow-inputZip"
                    name=""
                    placeholder='enter contact no'
                    // value={pQtyState}
                    onChange={(e) => { setContact(e.target.value); }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formrow-inputZip"
                    placeholder='enter email'
                    name=""
                    // value={data.pBuyingPrice}
                    onChange={(e) => { setEmail(e.target.value); }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Register Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="formrow-inputZip"
                    name=""
                    // value={data.pSellingPrice}
                    onChange={(e) => { setregDate(e.target.value); }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                <label htmlFor="formrow-email-input" className="form-label">
                    Expierd Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="formrow-inputZip"
                    name=""
                    // value={data.pSellingPrice}
                    onChange={(e) => { setexpDate(e.target.value); }}
                    required
                  />
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

export default CompanyModal