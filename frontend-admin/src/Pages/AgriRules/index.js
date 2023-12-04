import React, { useState } from "react";
import AgrirulesTable from "../../Components/Tables/AgriRules/AgrirulesTable";
import RulesModal from "../../Components/Modals/Agrirules/RulesModal";

const AgriRules = () => {

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
                                    Add  Rules
                                </button>
                            </div>
                        </div>
                        {/*end  button row*/}
                        <br />
                        {/* Table */}
                        <AgrirulesTable />
                        {/* Table */}
                        {/* brand modal */}
                        {isModalOpen && < RulesModal setOpenModal={setIsModalOpen} />}
                        {/* brand modal */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgriRules