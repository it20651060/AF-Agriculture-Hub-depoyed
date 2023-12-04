import React, { useState } from "react";
import FarmersTable from "../../Components/Tables/Farmers/FarmersTable";
import GagentModal from "../../Components/Modals/Gagent/GagentModal";
import AddFarmerModal from "../../Components/Modals/Farmers/AddFarmerModel";

const Farmers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div classNameName="row">
        <div classNameName="card">
          <div classNameName="card-body">
            <br />
            {/* add  button row */}
            <div className="row">
              <div className="col-xl-4">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  + Add Small-Scale Farmer
                </button>
              </div>
            </div>
            {/*end  button row*/}
            <br />
            {/* Table */}
            <FarmersTable />
            {/* Table */}
            {/* brand modal */}
            {isModalOpen && <AddFarmerModal setOpenModal={setIsModalOpen} />}
            {/* brand modal */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farmers;
