import React, { useEffect, useRef, useState,useContext } from "react";
import { Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { RulesContext } from "../Agrirules/RulesContext";

const RulesModal = ({ setOpenModal }) => {

  //use State Returns a stateful value, and a function to update it.
  const [rName, setRuleName] = useState("");
  const [rCategry, setRuleCat] = useState("");
  const [date, setDate] = useState("");
  const [rDetails, setRuleDetails] = useState("");
  const [toastMsg, setToastMsg] = useState(true);

  const { openModal, setOpenModal } = useContext(RulesContext);

  //Form submition
  const handleSubmit = (e) => {
    //The preventDefault() method cancels the event if it is cancelable, 
    //meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    const newRule = {
      rName,
      rCategry,
      date,
      rDetails
    }

    axios.post("https://finaldeploye.onrender.com/agrirule/add", newRule).then((res) => {
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
          <h5>Add Rule</h5>
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
          >
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Rule Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="expensesAmount"
                  placeholder='enter rule name'
                  required
                  min="1"
                  // pattern="^[a-zA-Z0-9_.-]*$"
                  // title="the rule name must contain letters and numbers only"
                  onChange={(e) => { setRuleName(e.target.value); }}
                />
                <br/>
                <label className="form-label">Rule Category</label>
                <select
                  type="text"
                  className="form-select"
                  name="pVariation"
                  onChange={(e) => { setRuleCat(e.target.value); }}
                >
                  <option value="" selected disabled="disabled">
                    Choose...
                  </option>
                  <option value="seeds">Seeds</option>
                  <option value="fertilizer">Fertilizer</option>
                </select>
                <br/>
                <Form.Group controlId="dob">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="expensesDate"
                    placeholder="Expenses Date"
                    
                    onChange={(e) => { setDate(e.target.value); }}
                    required
                  />
                </Form.Group>
                <br/>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Rule Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    pattern="^[a-zA-Z0-9_.-]*$"
                    title="the rule name must contain letters and numbers only"
                   
                    onChange={(e) => { setRuleDetails(e.target.value); }}
                  />
                </Form.Group>

                <br/>
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

export default RulesModal