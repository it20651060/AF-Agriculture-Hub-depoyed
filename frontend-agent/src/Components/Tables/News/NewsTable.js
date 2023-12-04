import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const NewsTable = () => {
  const [newsData, setNewsData] = useState([]);

  //use State Returns a stateful value, and a function to update it.
  const [id, setNewsId] = useState("");
  const [postDate, setPostDate] = useState("");
  const [title, setTitle] = useState("");
  const [news, setNews] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get("https://finaldeploye.onrender.com/news/"); // Replace with your actual backend API endpoint to fetch admin data
        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  //##Edit data modal
  const [showModal2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };

  //edit form in Modal
  const editData = (id, postDate, title, news, comments) => {
    handleShow2();
    setNewsId(id);
    setPostDate(postDate);
    setTitle(title);
    setNews(news);
    setComments(comments);
  };

  //update data form button click
  const updateData = (e) => {
    e.preventDefault();

    const newNews = {
      postDate,
      title,
      news,
      comments,
    };

    axios
      .put(`https://finaldeploye.onrender.com/news/update/${id}`, newNews)
      .then(() => {
        setShow2();
        updateToast();
        setTimeout(() => {
          window.location.reload();
        }, 2010);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    setShow2();
    updateToast();
  };

  //toast for dataUpdate
  const updateToast = async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: " update Changed successfully",
    });
  };

  const deleteNews = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your news has been deleted.", "success");
        axios
          .delete(`https://finaldeploye.onrender.com/news/delete/${id}`)
          .then((response) => {
            setTimeout(() => {
              window.location.reload();
            }, 2010);
          });
      }
    });
  };

  const columns = [
    {
      name: "News Posted Date",
      selector: "postDate",
      sortable: true,
    },
    {
      name: "News Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "News Body",
      selector: "news",
    },
    {
      name: "Comments",
      selector: "comments",
    },
    {
      name: "Edit",
      selector: (row) => (
        <button
          class="btn btn-outline-success btn-sm"
          onClick={() => {
            editData(row._id, row.postDate, row.title, row.news, row.comments);
          }}
        >
          Edit
        </button>
      ),
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          class="btn btn-outline-danger btn-sm"
          onClick={() => {
            deleteNews(row._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const fmyData = newsData.map((news) => ({
    _id: news._id,
    postDate: news.postDate,
    title: news.title,
    news: news.news,
    comments: news.comments,
  }));

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <DataTable
            columns={columns}
            data={fmyData}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="451px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className="form-control"
                // value={search}
                // onChange={(e)=> setSearch(e.target.value)}
              />
            }
            subHeaderAlign="left"
          />
        </div>
      </div>

      {/* Edit form modal */}
      <Modal show={showModal2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <h5>Edit News Post</h5>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => updateData(e)} encType="multipart/form-data">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="formrow-email-input" className="form-label">
                    News Posted Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="enter your news posted date"
                    name="postDate"
                    defaultValue={postDate}
                    onChange={(e) => {
                      setPostDate(e.target.value);
                    }}
                    required
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
                    defaultValue={title}
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
                    defaultValue={news}
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
                    defaultValue={comments}
                    onChange={(e) => {
                      setComments(e.target.value);
                    }}
                    required
                  />
                </div>
              </div> */}

              {/* Model Footer */}
              <div className="modal-footer">
                <button
                  className="btn btn-secondary "
                  data-dismiss="modal"
                  type="button"
                  onClick={() => {
                    setShow2(false);
                  }}
                >
                  {" "}
                  Close
                </button>
                <button type="submit" className="btn btn-primary ">
                  update
                </button>
              </div>
              {/* Model Footer */}
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/* End edit form modal */}
    </div>
  );
};

export default NewsTable;
