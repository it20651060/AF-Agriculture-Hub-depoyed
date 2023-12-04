import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const SSFarmerTable = () => {
  const [SSFarmerData, setSSFarmerData] = useState([]);

  //use State Returns a stateful value, and a function to update it.
  const [id, setSSFarmerId] = useState("");
  const [initialName, setInitialName] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [villageDomain, setVillageDomain] = useState("");
  const [address, setAddress] = useState("");
  const [farmerType, setFarmerType] = useState("");

  useEffect(() => {
    const fetchSSFarmerData = async () => {
      try {
        const response = await axios.get("https://finaldeploye.onrender.com/farmers/"); // Replace with your actual backend API endpoint to fetch admin data
        console.log("wwwwwwwwwwwwwwwwwww", response.data);
        setSSFarmerData(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchSSFarmerData();
  }, []);

  //##Edit data modal
  const [showModal2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };

  //edit form in Modal
  const editData = (
    id,
    initialName,
    nic,
    dob,
    email,
    contactNo,
    villageDomain,
    address,
    farmerType
  ) => {
    handleShow2();
    setSSFarmerId(id);
    setInitialName(initialName);
    setNic(nic);
    setDob(dob);
    setEmail(email);
    setContactNo(contactNo);
    setVillageDomain(villageDomain);
    setAddress(address);
    setFarmerType(farmerType);
  };

  //update data form button click
  const updateData = (e) => {
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
      .put(`https://finaldeploye.onrender.com/farmers/update/${id}`, newSSFarmer)
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

  const deleteSSFarmer = (id) => {
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`https://finaldeploye.onrender.com/farmers/delete/${id}`)
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
      name: "Initial Name",
      selector: "initialName",
      sortable: true,
    },
    {
      name: "NIC Number",
      selector: "nic",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
    },
    {
      name: "Contact Number",
      selector: "contactNo",
    },
    {
      name: "Village Domain",
      selector: "villageDomain",
    },
    {
      name: "Address",
      selector: "address",
    },
    {
      name: "Farmer Type",
      selector: "farmerType",
    },

    {
      name: "Edit",
      selector: (row) => (
        <button
          class="btn btn-outline-success btn-sm"
          onClick={() => {
            editData(
              row._id,
              row.initialName,
              row.nic,
              row.dob,
              row.email,
              row.contactNo,
              row.villageDomain,
              row.address,
              row.farmerType
            );
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
            deleteSSFarmer(row._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const fmyData = SSFarmerData.map((SSFarmer) => ({
    _id: SSFarmer._id,
    initialName: SSFarmer.initialName,
    nic: SSFarmer.nic,
    dob: SSFarmer.dob,
    email: SSFarmer.email,
    contactNo: SSFarmer.contactNo,
    villageDomain: SSFarmer.villageDomain,
    address: SSFarmer.address,
    farmerType: SSFarmer.farmerType,
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
          <h5>Edit Small Scale farmers</h5>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => updateData(e)} encType="multipart/form-data">
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
                    defaultValue={initialName}
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
                    defaultValue={nic}
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
                    defaultValue={dob}
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
                    defaultValue={email}
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
                    defaultValue={contactNo}
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
                    defaultValue={villageDomain}
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
                    defaultValue={address}
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
                    defaultValue={farmerType}
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

export default SSFarmerTable;
