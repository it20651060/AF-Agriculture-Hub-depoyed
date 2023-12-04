import React, { useState } from "react";
import GagentTable from "../../Components/Tables/Gagent/GagentTable";
import GagentModal from "../../Components/Modals/Gagent/GagentModal";

const Gagent = () => {

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

                  Add Gov Agent
                </button>
              </div>
            </div>
            {/*end  button row*/}
            <br />
            {/* Table */}
            <GagentTable />
            {/* Table */}
            {/* brand modal */}
            {isModalOpen && <GagentModal setOpenModal={setIsModalOpen} />}
            {/* brand modal */}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Gagent