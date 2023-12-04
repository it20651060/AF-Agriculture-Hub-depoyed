import React from 'react'
import DataTable from 'react-data-table-component'

const AgriagentTable = () => {
   
    
    const columns = [
        {
            name: "Name",
            selector: 'name',
            sortable: true
        },
        {
            name: "NIC",
            selector: 'nativeName',
        },
        {
            name: "Address",
            selector: 'capital',
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
          name: "Country 1",
          nativeName: "Native Name 1",
          capital: "Capital 1",
          id: 1
        },
        {
          name: "Country 2",
          nativeName: "Native Name 2",
          capital: "Capital 2",
          id: 2
        },
        {
          name: "Country 3",
          nativeName: "Native Name 3",
          capital: "Capital 3",
          id: 3
        }
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

export default AgriagentTable