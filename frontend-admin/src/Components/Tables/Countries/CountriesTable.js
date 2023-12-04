import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component'

const CountriesTable = () => {

    const [search, setSearch] = useState([]);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const getCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all');
            setCountries(response.data);
            setFilteredCountries(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            name: "Country Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Country Native Name",
            selector: (row) => row.nativeName,
        },
        {
            name: "Country Capital",
            selector: (row) => row.capital,
        },
        {
            name: "Country Flage",
            selector: (row) => <img width={50} height={50} src={row.flag} />,
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

    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        const result = countries.filter((country) => {
            return country.name.toLowerCase().match(search.toLowerCase());
        });
        setFilteredCountries(result);
    }, [search]);

    return (
        <DataTable
            columns={columns}
            data={filteredCountries}
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
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
            }
            subHeaderAlign='left'
        />

    )
}

export default CountriesTable