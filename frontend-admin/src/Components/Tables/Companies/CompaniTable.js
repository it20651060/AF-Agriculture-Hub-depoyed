import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { useParams } from 'react-router-dom';
import { Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const CompaniTable = () => {

    const [companyData, setCompanyData] = useState([]);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await axios.get('https://finaldeploye.onrender.com/company/'); // Replace with your actual backend API endpoint to fetch admin data
            console.log('wwwwwwwwwwwwwwwwwww', response.data);
            setCompanyData(response.data);
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    };

    const [cid, setCompanyId] = useState("");
    const [cName, setComName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [regDate, setregDate] = useState("");
    const [expDate, setexpDate] = useState("");

    //##Edit data modal
    const [showModal2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
    };

    //edit form in Modal
    const editData = (
        id,
        cName,
        address,
        contactNumber,
        email,
        regDate,
        expDate
    ) => {

        handleShow2();
        setCompanyId(id);
        setComName(cName);
        setAddress(address);
        setContact(contactNumber);
        setEmail(email);
        setregDate(regDate);
        setexpDate(expDate);
    };

    //update data form button click
    const updateData = (e) => {
        e.preventDefault();
        const newRule = {
            cName,
            address,
            contactNumber,
            email,
            regDate,
            expDate
        }

        axios.put(`https://finaldeploye.onrender.com/company/update/${cid}`, newRule)
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

    const deleteCom = (id) => {
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
                    .delete(`https://finaldeploye.onrender.com/company/delete/${id}`
                    )
                    .then((response) => {
                        fetchAdminData();
                    });
            }
        });
    };

    const columns = [
        {
            name: "Company Name",
            selector: 'cName',
            sortable: true
        },
        {
            name: "Company Address",
            selector: 'address',
        },
        {
            name: "Contact No",
            selector: 'contactNumber',
        },
        {
            name: "Email",
            selector: 'email',
        },
        {
            name: "Reg Date",
            selector: 'regDate',
        },
        {
            name: "Exp Date",
            selector: 'expDate',
        },
        // {
        //     name: "Print",
        //     selector: (row) => <button className='btn btn-outline-primary btn-sm' onClick={() => alert(row.id)}>
        //         Print
        //     </button>
        // },
        {
            name: "Edit",
            selector: (row) => <button class="btn btn-outline-success btn-sm"
                onClick={() => {
                    editData(
                        row._id,
                        row.cName,
                        row.address,
                        row.contactNumber,
                        row.email,
                        row.regDate,
                        row.expDate
                    );
                }}
            >
                Edit
            </button>
        },
        {
            name: "Delete",
            selector: (row) => <button class="btn btn-outline-danger btn-sm"
                onClick={() => {
                    deleteCom(row._id);
                }}
            >
                Delete
            </button>

        },
    ]

    const comData = companyData.map((company) => ({
        _id: company._id,
        cName: company.cName,
        address: company.address,
        contactNumber: company.contactNumber,
        email: company.email,
        regDate: company.regDate,
        expDate: company.expDate,

    }));

    return (

        <div>
            <div className='card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={comData}
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
                    <h5>Edit Company</h5>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => updateData(e)}
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
                                        defaultValue={cName}
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
                                        defaultValue={address}
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
                                        defaultValue={contactNumber}
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
                                        defaultValue={email}
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
                                        defaultValue={regDate}
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
                                        defaultValue={expDate}
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
                                        setShow2(false);
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
            {/* End edit form modal */}
        </div>

    )
}

export default CompaniTable