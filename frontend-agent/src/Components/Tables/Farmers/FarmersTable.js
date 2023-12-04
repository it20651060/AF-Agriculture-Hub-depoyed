import React from "react";
import DataTable from "react-data-table-component";

const FarmersTable = () => {
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "NIC",
      selector: "nic",
    },
    {
      name: "Date of Birth",
      selector: "dob",
    },
    {
      name: "Email",
      selector: "email",
    },
    {
      name: "Contact No",
      selector: "contactno",
    },
    {
      name: "Village Domain",
      selector: "village",
    },
    {
      name: "Address",
      selector: "address",
    },
    {
      name: "Farmer Type",
      selector: "type",
    },
    {
      name: "Edit",
      selector: (row) => (
        <button class="btn btn-outline-success btn-sm">Edit</button>
      ),
    },
    {
      name: "Delete",
      selector: (row) => (
        <button class="btn btn-outline-danger btn-sm">Delete</button>
      ),
    },
  ];

  const myData = [
    {
      name: "W.P Kumara",
      nic: "980521656V",
      dob: "1965/06/32",
      email: "kumara@gmail.com",
      contactno: "0702298135",
      village: "Muththettugoda",
      address: "243/3 matara",
      type: "Paddy",
      id: 1,
    },
    {
      name: "S.A Piyadasa",
      nic: "682541369V",
      dob: "1967/04/01",
      email: "piya@gmail.com",
      contactno: "0757741368",
      village: "Battaramulla",
      address: "869, battaramulla",
      type: "Vegetable",
      id: 2,
    },
    {
      name: "K.L Lokuge",
      nic: "578923658V",
      dob: "1969/01/23",
      email: "loku@gmail.com",
      contactno: "0775896324",
      village: "Malabe",
      address: "745, malabe",
      type: "Fruit",
      id: 3,
    },
    {
      name: "M. Kalum",
      nic: "569874123V",
      dob: "1967/05/10",
      email: "kalum@gmail.com",
      contactno: "0774589632",
      village: "Pitakotte",
      address: "126, pitakotte",
      type: "Rubber",
      id: 4,
    },
    {
      name: "K.P Malkanthi",
      nic: "654789214V",
      dob: "1965/03/12",
      email: "malkanthi@gmail.com",
      contactno: "0774123896",
      village: "Kaduwela",
      address: "741, kaduwela",
      type: "Tea",
      id: 5,
    },
    {
      name: "H.P Yasoma",
      nic: "456325897V",
      dob: "1968/04/30",
      email: "yasoma@gmail.com",
      contactno: "0774525896",
      village: "Nugegoda",
      address: "746, nugegoda",
      type: "Fruit",
      id: 6,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={myData}
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
  );
};

export default FarmersTable;
