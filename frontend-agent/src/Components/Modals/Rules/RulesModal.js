import React from 'react'
import { Modal } from "react-bootstrap";

const RulesModal = ({ setOpenModal }) => {
  return (
    <div>
        <Modal show={setOpenModal}>
        <Modal.Header>
          <h5>Add</h5>
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
              </div>
                {/* Model Footer */}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default RulesModal