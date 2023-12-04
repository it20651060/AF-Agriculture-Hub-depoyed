import React, { useState } from "react";
import ComproductTable from "../../Components/Tables/ComProduct/ComproductTable";
import ComproductModal from "../../Components/Modals/ComProduct/ComproductModal";

const CompanyProduct = () => {
 
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
                                    Add Company Products 
                                </button>
                            </div>
                        </div>
                        {/*end  button row*/}
                        <br />
                        {/* Table */}
                         <ComproductTable/>
                        {/* Table */}
                        {/* brand modal */}
                        {isModalOpen && < ComproductModal setOpenModal={setIsModalOpen} />}
                        {/* brand modal */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProduct