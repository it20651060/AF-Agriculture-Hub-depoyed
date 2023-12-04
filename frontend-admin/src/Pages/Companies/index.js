import React, { useState } from "react";
import CompaniTable from "../../Components/Tables/Companies/CompaniTable";
import CompanyModal from "../../Components/Modals/Companies/CompanyModal";

const Companies = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

   return (
        <div>
            <div classNameName='row'>
                <div classNameName='card'>
                    <div classNameName='card-body'>
                        <br />
                        {/* add  button row */}
                        <div className="row">
                            <div className="col-xl-4">
                                <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={() => {
                                        setIsModalOpen(true);
                                    }}
                                >
                                    Add  Companies
                                </button>
                            </div>
                        </div>
                        {/*end  button row*/}
                        <br />
                        {/* Table */}
                        <CompaniTable/>
                        {/* Table */}
                        {/* brand modal */}
                        {isModalOpen && < CompanyModal setOpenModal={setIsModalOpen} />}
                        {/* brand modal */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies