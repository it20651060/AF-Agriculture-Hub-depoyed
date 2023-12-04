import React, { useState } from "react";
import AgriagentModal from "../../Components/Modals/Agriagent/AgriagentModal";
import AgriagentTable from "../../Components/Tables/Agriagent/AgriagentTable";

const Agriagent = () => {

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
                                    Add Agri Agent
                                </button>
                            </div>
                        </div>
                        {/*end  button row*/}
                        <br />
                        {/* Table */}
                        <AgriagentTable />
                        {/* Table */}

                        {/* brand modal */}
                        {isModalOpen && <AgriagentModal setOpenModal={setIsModalOpen} />}
                        {/* brand modal */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agriagent