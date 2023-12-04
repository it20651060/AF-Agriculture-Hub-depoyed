import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const SSFarmersModal = ({ setOpenModal }) => {
  //use State Returns a stateful value, and a function to update it.
  const [initialName, setInitialName] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [villageDomain, setVillageDomain] = useState("");
  const [address, setAddress] = useState("");
  const [farmerType, setFarmerType] = useState("");

  const [toastMsg, setToastMsg] = useState(true);

  //Form submition
  const handleSubmit = (e) => {
    //The preventDefault() method cancels the event if it is cancelable,
    //meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    const newSSFarmer = {
      initialName,
      nic,
      dob,
      email,
      contactNo,
      villageDomain,
      address,
      farmerType,
    };

    axios
      .post("https://finaldeploye.onrender.com/farmers/add", newSSFarmer)
      .then((res) => {
        console.log(res);
        toastShow();
        modalClose();

        setTimeout(() => {
          window.location.reload();
        }, 2010);
      })
      .catch((err) => {
        console.log(err);
        setToastMsg(!toastMsg);
      });
  };

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
          <h5>Add Small Scale Farmers</h5>
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
                    Initial Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your full name"
                    // value={data.pName}
                    name="initialName"
                    pattern="[A-Za-z\s]{2,30}"
                    title="The  name must contain letters only"
                    onChange={(e) => {
                      setInitialName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    NIC Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your nic number"
                    name="nic"
                    // value={data.pBarCode}
                    pattern="^\d{9}[V|v|X|x]$"
                    title="Enter valid NIC number (ex - 982742978V) , (ex - 98521656X)"
                    onChange={(e) => {
                      setNic(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="enter your date of birth"
                    name="dob"
                    // value={data.pBarCode}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
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
                    placeholder="enter your email"
                    name="email"
                    // value={data.pBarCode}
                    title="characters@characters.domain eg:- bloodbank@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="enter your contact no"
                    name="contactNo"
                    // value={data.pBarCode}
                    pattern="[0-9]{11}"
                    title="Enter valid contact number (ex - 94757713501)"
                    onChange={(e) => {
                      setContactNo(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Village Domain
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your village domain"
                    // value={data.pName}
                    name="villageDomain"
                    pattern="[A-Za-z\s]{2,30}"
                    title="The name must contain letters only"
                    onChange={(e) => {
                      setVillageDomain(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your address"
                    name="address"
                    // value={data.pBarCode}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-inputState" className="form-label">
                    Select Farmer Type
                  </label>
                  <select
                    type="text"
                    className="form-select"
                    name="farmerType"
                    required
                    // value={data.pBrand}
                    onChange={(e) => {
                      setFarmerType(e.target.value);
                    }}
                  >
                    <option value="" selected disabled="disabled">
                      Choose...
                    </option>
                    <option value="paddy">Paddy</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                  </select>
                </div>
              </div>
              {/* Model Footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
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
                {/* Model Footer */}
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SSFarmersModal;
