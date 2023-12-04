import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { useParams } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const AgriagentTable = () => {

    const [adminData, setAdminData] = useState([]);

    //use State Returns a stateful value, and a function to update it.
    const [id, setAdminId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [nic, setNic] = useState(true);
    const [gender, setGender] = useState(true);

    useEffect(() => {
        fetchAdminData();
    }, []);
    
    const fetchAdminData = async () => {
        try {
            const response = await axios.get('https://finaldeploye.onrender.com/admin/'); // Replace with your actual backend API endpoint to fetch admin data
            console.log('wwwwwwwwwwwwwwwwwww', response.data);
            setAdminData(response.data);
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    };

    

    //##Edit data modal
    const [showModal2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
    };

    //edit form in Modal
    const editData = (
        id,
        firstName,
        lastName,
        contactNumber,
        address,
        email,
        dateOfBirth,
        nic,
        gender) => {

        handleShow2();
        setAdminId(id);
        setFirstName(firstName);
        setLastName(lastName);
        setContactNumber(contactNumber);
        setAddress(address);
        setEmail(email);
        setDateOfBirth(dateOfBirth);
        setNic(nic);
        setGender(gender);
    };


    //update data form button click
    const updateData = (e) => {
        e.preventDefault();

        const newAdmin = {

            firstName,
            lastName,
            contactNumber,
            address,
            email,
            dateOfBirth,
            nic,
            gender
        }

        axios.put(`https://finaldeploye.onrender.com/admin/update/${id}`, newAdmin)
            .then(() => {

                setShow2();
                updateToast();
                fetchAdminData();

            }).catch((err) => {
                alert(err)
                console.log(err);
            })
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

    const deleteAdmin = (id) => {
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
                .delete(`https://finaldeploye.onrender.com/admin/delete/${id}`
                )
                .then((response) => {
                    fetchAdminData();
                });
            }
      });
    };

    const columns = [
        {
            name: "First Name",
            selector: 'firstName',
            sortable: true
        },
        {
            name: "Last Name",
            selector: 'lastName',
            sortable: true
        },
        {
            name: "Contact Number",
            selector: 'contactNumber',
        },
        {
            name: "Address",
            selector: 'address',
        },
        {
            name: "Email",
            selector: 'email',
        },
        {
            name: "Date of Birth",
            selector: 'dateOfBirth',
        },
        {
            name: "NIC",
            selector: 'nic',
        },
        {
            name: "Gender",
            selector: 'gender',
        },
        // {
        //     name: "Print",
        //     selector: (row) => <button className='btn btn-outline-primary btn-sm' onClick={() => alert(row.id)}>
        //         Print
        //     </button>
        // },
        {
            name: "Edit",
            selector: (row) => (
                <button class="btn btn-outline-success btn-sm"

                    onClick={() => {
                        editData(
                            row._id,
                            row.firstName,
                            row.lastName,
                            row.contactNumber,
                            row.address,
                            row.email,
                            row.dateOfBirth,
                            row.nic,
                            row.gender
                        );
                    }}
                >
                    Edit
                </button>
            )

        },
        {
            name: "Delete",
            selector: (row) => <button class="btn btn-outline-danger btn-sm"
                onClick={() => {
                    deleteAdmin(row._id);
                }}>
                Delete
            </button>

        },


    ]

    const fmyData = adminData.map((admin) => ({
        _id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        contactNumber: admin.contactNumber,
        address: admin.address,
        email: admin.email,
        dateOfBirth: admin.dateOfBirth,
        nic: admin.nic,
        gender: admin.gender
    }));




    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={fmyData}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight='451px'
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                            <input
                                type='text'
                                placeholder='Search Here'
                                className='form-control'
                            // value={search}
                            // onChange={(e)=> setSearch(e.target.value)}
                            />
                        }
                        subHeaderAlign='left'
                    />
                </div>
            </div>

            {/* Edit form modal */}
            <Modal show={showModal2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <h5>Edit Admin</h5>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => updateData(e)}
                        encType="multipart/form-data"
                    >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-email-input" className="form-label">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='enter your full name'
                                        defaultValue={firstName}
                                        name="firstName"
                                        pattern="[A-Za-z\s]{2,30}"
                                        title="The  name must contain letters only"
                                        onChange={(e) => { setFirstName(e.target.value); }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-email-input" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='enter your last name'
                                        name="lastName"
                                        defaultValue={lastName}
                                        pattern="[A-Za-z\s]{2,30}"
                                        title="The  name must contain letters only"
                                        onChange={(e) => { setLastName(e.target.value); }}
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
                                        placeholder='enter your contact no'
                                        name="contactNumber"
                                        defaultValue={contactNumber}
                                        pattern="[0-9]{11}" title="Enter valid contact number (ex - 94757713501)"
                                        onChange={(e) => { setContactNumber(e.target.value); }}
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
                                        placeholder='enter your address'
                                        name="address"
                                        defaultValue={address}
                                        onChange={(e) => { setAddress(e.target.value); }}
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
                                        placeholder='enter your email'
                                        name="email"
                                        defaultValue={email}
                                        title="characters@characters.domain eg:- bloodbank@gmail.com"
                                        onChange={(e) => { setEmail(e.target.value); }}
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
                                        placeholder='enter your email'
                                        name="dateOfBirth"
                                        defaultValue={dateOfBirth}
                                        onChange={(e) => { setDateOfBirth(e.target.value); }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-email-input" className="form-label">
                                        Nic
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='enter your email'
                                        name="nic"
                                        defaultValue={nic}
                                        pattern="^\d{9}[V|v|X|x]$"
                                        title="Enter valid NIC number (ex - 982742978V) , (ex - 98521656X)"
                                        onChange={(e) => { setNic(e.target.value); }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-inputState" className="form-label">
                                        Select Gender
                                    </label>
                                    <select
                                        type="text"
                                        className="form-select"
                                        name="gender"
                                        required
                                        defaultValue={gender}
                                        onChange={(e) => { setGender(e.target.value); }}
                                    >
                                        <option value="" selected disabled="disabled">
                                            Choose...
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            {/* Model Footer */}
                            <div className="modal-footer">
                                <button className="btn btn-secondary " data-dismiss="modal"
                                    type="button"
                                    onClick={() => {
                                        setShow2(false);
                                    }}> Close
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
    )
}

export default AgriagentTable