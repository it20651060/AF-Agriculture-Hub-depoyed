import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const NewsModal = ({ setOpenModal }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  //use State Returns a stateful value, and a function to update it.
  const [postDate, setPostDate] = useState("");
  const [title, setTitle] = useState("");
  const [news, setNews] = useState("");
  const [comments, setComments] = useState("");

  const [toastMsg, setToastMsg] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //Form submition
  const handleSubmit = (e) => {
    //The preventDefault() method cancels the event if it is cancelable,
    //meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    const newNews = {
      postDate,
      title,
      news,
      comments,
    };

    axios
      .post("https://finaldeploye.onrender.com/news/add", newNews)
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
          <h5>Post Your New News</h5>
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
                    News Posted Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="postDate"
                    defaultValue={currentDate.toDateString()}
                    onChange={(e) => {
                      setPostDate(currentDate.toDateString());
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    News Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your news title"
                    name="title"
                    //defaultValue={title}
                    title="The title must contain letters only"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    News Body
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    className="form-control"
                    placeholder="enter your news here"
                    name="news"
                    //defaultValue={news}
                    onChange={(e) => {
                      setNews(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              {/* <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    Farmers Comments
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your news here"
                    name="comments"
                    //defaultValue={comments}
                    onChange={(e) => {
                      setComments(e.target.value);
                    }}
                    required
                  />
                </div>
              </div> */}

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

export default NewsModal;
