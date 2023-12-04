import React, { useEffect, useRef, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const FarmerproductModal = ({ setOpenModal }) => {
  const [images, setImage] = useState("");
  console.log("qqqqqqqqqqqqqqqqqqqqqq", images);
  const [pName, setPName] = useState("");
  const [pPrice, setPrice] = useState("");
  const [qantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [toastMsg, setToastMsg] = useState(true);

  function convertToBase64(e) {
    console.log(e);

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error:", error);
    };
  }

  //Form submition
  const handleSubmit = (e) => {
    //The preventDefault() method cancels the event if it is cancelable,
    //meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    const newProduct = {
      pName,
      pPrice,
      qantity,
      details,
      images,
    };

    axios
      .post("https://finaldeploye.onrender.com/farmerproduct/add", newProduct)
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
          <h5>Add Product</h5>
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
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your full name"
                    name="pName"
                    // value={data.pName}
                    onChange={(e) => {
                      setPName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="formrow-inputZip"
                    name="pSellingPrice"
                    // value={data.pSellingPrice}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Product Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="formrow-inputZip"
                    name="pSellingPrice"
                    // value={data.pSellingPrice}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Product Details
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter product details"
                    name="pName"
                    // value={data.pName}
                    onChange={(e) => {
                      setDetails(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Choose Product Image
                  </label>
                  <input
                    className="form-control"
                    // ref={}
                    type="file"
                    id="formFile"
                    name="pImage"
                    accept="image/*"
                    onChange={convertToBase64}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  {images == "" || images == null ? (
                    ""
                  ) : (
                    <image width={100} height={100} src={images} />
                  )}
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
  );
};

export default FarmerproductModal;
