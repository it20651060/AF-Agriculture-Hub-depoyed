import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { useParams } from 'react-router-dom';
import { Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";



const ComproductTable = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await axios.get('https://finaldeploye.onrender.com/product/'); // Replace with your actual backend API endpoint to fetch admin data
            console.log('wwwwwwwwwwwwwwwwwww', response.data);
            setProductData(response.data);
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    };

    const [pid, setProId] = useState("");


    const deletePro = (id) => {
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
                    .delete(`https://finaldeploye.onrender.com/product/delete/${id}`
                    )
                    .then((response) => {
                        fetchAdminData();
                    });
            }
        });
    };

    const columns = [
        {
            name: "Product Name",
            selector: 'pName',
            sortable: true
        },
        {
            name: "Product price",
            selector: 'pPrice',
        },
        {
            name: "Product Quantity",
            selector: 'qantity',
        },
        {
            name: "Product Details",
            selector: 'details',
        },
        {
            name: "View",
            selector: (row) => <button className='btn btn-outline-primary btn-sm'
                onClick={() => handleShow(
                    row._id,
                    row.images,
                    row.pName
                )}>
                View
            </button>
        },
        {
            name: "Edit",
            selector: (row) => <button class="btn btn-outline-success btn-sm"

            >
                Edit
            </button>

        },
        {
            name: "Delete",
            selector: (row) => <button class="btn btn-outline-danger btn-sm"
                onClick={() => {
                    deletePro(row._id);
                }}
            >
                Delete
            </button>

        },


    ]


    const myData = [
        {
            name: "Farm Forward",
            brcode: "11112288",
            variation: "test ",
            brand: "SSC",
            category: "Fertilizer",
            unit: "10Kg",
            suplier: "Navod",
            quantity: "80",
            bprice: "LKR 2000",
            sprice: "LKR 3200",
            id: 1
        },
        {
            name: "Farm Forward",
            brcode: "1111333",
            variation: "test ",
            brand: "ccC",
            category: "Fertilizer",
            unit: "12Kg",
            suplier: "Navod",
            quantity: "80",
            bprice: "LKR 2000",
            sprice: "LKR 3200",
            id: 2
        },
    ];

    const producData = productData.map((product) => ({
        _id: product._id,
        pName: product.pName,
        pPrice: product.pPrice,
        qantity: product.qantity,
        details: product.details,
        images: product.images
    }));

    const [showModal, setShow] = useState(false);
    const [ppid, setProdId] = useState(false);
    const [ppimg, setPImage] = useState(false);
    const [productname, setPName] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (
        id,
        images,
        pName) => {

        setProdId(id);
        setPImage(images);
        setPName(pName);
        setShow(true);

    };

    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <DataTable
                        columns={columns}
                        data={producData}
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

                    {/* Start Data Show Modal */}
                    <Modal
                        show={showModal}
                        onHide={handleClose}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <h5>{productname}</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black", padding: "20px" }}>
                                <div style={{ width: "280px", height: "420px", overflow: "hidden" }}>
                                    <img
                                         src={ppimg}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* End Data show Modal */}

                </div>
            </div>
        </div>

    )
}

export default ComproductTable