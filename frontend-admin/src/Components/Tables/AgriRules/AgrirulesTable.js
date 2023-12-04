import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { useParams } from 'react-router-dom';
import { Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const AgrirulesTable = () => {

    const [rulesData, setRulesData] = useState([]);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await axios.get('https://finaldeploye.onrender.com/agrirule/'); // Replace with your actual backend API endpoint to fetch admin data
            console.log('wwwwwwwwwwwwwwwwwww', response.data);
            setRulesData(response.data);
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    };

    const [rid, setRuleId] = useState("");
    const [rName, setRuleName] = useState("");
    const [rCategry, setRuleCat] = useState("");
    const [date, setDate] = useState("");
    const [rDetails, setRuleDetails] = useState("");

    //##Edit data modal
    const [showModal2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
    };

    //edit form in Modal
    const editData = (
        id,
        rName,
        rCategry,
        date,
        rDetails
    ) => {

        handleShow2();
        setRuleId(id);
        setRuleName(rName);
        setRuleCat(rCategry);
        setDate(date);
        setRuleDetails(rDetails);
        ;
    };

    //update data form button click
    const updateData = (e) => {
        e.preventDefault();
        const newRule = {
            rName,
            rCategry,
            date,
            rDetails
        }

        axios.put(`https://finaldeploye.onrender.com/agrirule/update/${rid}`, newRule)
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

    const deleteRule = (id) => {
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
                    .delete(`https://finaldeploye.onrender.com/agrirule/delete/${id}`
                    )
                    .then((response) => {
                        fetchAdminData();
                    });
            }
        });
    };

    const columns = [
        {
            name: "Rule Id",
            selector: 'rid',
        },
        {
            name: "Rule Name",
            selector: 'rName',
        },
        {
            name: "Rules Category",
            selector: 'rCategry',
        },
        {
            name: "Date",
            selector: 'date',
        },
        {
            name: "Rule Details",
            selector: 'rDetails',
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
                        row.rName,
                        row.rCategry,
                        row.date,
                        row.rDetails
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
                    deleteRule(row._id);
                }}
            >
                Delete
            </button>

        },
    ]
    const myData = [
        {
            rid: "R001",
            rname: "Gov Agri 001",
            rcat: "Seeds",
            rdetail: "Seeds and Planting Materials Act No. 22 of 2003 "
        }, {
            rid: "R002",
            rname: "Gov Agri 001",
            rcat: "Organic Agriculture",
            rdetail: "Organic Agriculture Policy "
        }, {
            rid: "R003",
            rname: "Gov Agri 001",
            rcat: "Fertilizer",
            rdetail: "Fertilizer Control Act No. 36 of 1980 "
        },
    ];

    const agriruleData = rulesData.map((agri, index) => ({
        _id: agri._id,
        rid: "R" + String(index + 1).padStart(3, "0"),
        rName: agri.rName,
        rCategry: agri.rCategry,
        date: agri.date,
        rDetails: agri.rDetails
    }));

    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={agriruleData}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight='1000px'
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
                    <form onSubmit={(e) => updateData(e)} >
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
                                    defaultValue={rName}
                                    // pattern="^[a-zA-Z0-9_.-]*$"
                                    // title="the rule name must contain letters and numbers only"
                                    onChange={(e) => { setRuleName(e.target.value); }}
                                />
                                <br />
                                <label className="form-label">Rule Category</label>
                                <select
                                    type="text"
                                    className="form-select"
                                    defaultValue={rCategry}
                                    onChange={(e) => { setRuleCat(e.target.value); }}
                                >
                                    <option value="" selected disabled="disabled">
                                        Choose...
                                    </option>
                                    <option value="seeds">Seeds</option>
                                    <option value="fertilizer">Fertilizer</option>
                                </select>
                                <br />
                                <Form.Group controlId="dob">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="expensesDate"
                                        placeholder="Expenses Date"
                                        defaultValue={date}
                                        onChange={(e) => { setDate(e.target.value); }}
                                        required
                                    />
                                </Form.Group>
                                <br />
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
                                        defaultValue={rDetails}
                                        onChange={(e) => { setRuleDetails(e.target.value); }}
                                    />
                                </Form.Group>
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

export default AgrirulesTable