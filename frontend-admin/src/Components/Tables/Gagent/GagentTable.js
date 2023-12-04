import React from 'react'
import DataTable from 'react-data-table-component'

const GagentTable = () => {
   
    

    const columns = [
        {
            name: "Name",
            selector: 'name',
            sortable: true
        },
        {
            name: "Gov Id",
            selector: 'gid',
        },
        {
            name: "Date of Birth",
            selector: 'dob',
        },
        {
            name: "NIC",
            selector: 'nic',
        },
        {
            name: "Email",
            selector: 'email',
        },
        {
            name: "Contact No",
            selector: 'contactno',
        },
        {
            name: "Address",
            selector: 'address',
        },
        {
            name: "User Roll",
            selector: 'userroll',
        },
        {
            name: "Print",
            selector: (row) => <button className='btn btn-outline-primary btn-sm' onClick={() => alert(row.id)}>
                Print
            </button>
        },
        {
            name: "Edit",
            selector: (row) => <button class="btn btn-outline-success btn-sm">
                Edit
            </button>

        },
        {
            name: "Delete",
            selector: (row) => <button class="btn btn-outline-danger btn-sm">
                Delete
            </button>

        },


    ]



    const myData = [
        {
          name: "Navod",
          gid: "G0001",
          dob: "2022/06/32",
          nic: "980521656V",
          email: "nawarathna@gmail.com",
          contactno: "0702298135",
          address: "248/3 matara",
          userroll: "admin",
          id: 1
        },
        {
            name: "Chameera",
            gid: "G0002",
            dob: "2022/06/32",
            nic: "930521656V",
            email: "cawarathna@gmail.com",
            contactno: "0752298135",
            address: "42/3 matara",
            userroll: "admin",
            id: 1
          },
          {
            name: "jayani",
            gid: "G0003",
            dob: "2022/06/32",
            nic: "970521656V",
            email: "jawarathna@gmail.com",
            contactno: "0762298135",
            address: "matara",
            userroll: "admin",
            id: 1
          },
          
      ];
      

    return (
        <DataTable
            columns={columns}
            data={myData}
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

    )
}

export default GagentTable