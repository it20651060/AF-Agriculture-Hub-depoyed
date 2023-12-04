import React, { useState } from "react";
import SSFarmerModal from "../../Components/Modals/SSFarmers/SSFarmersModal";
import SSFarmerTable from "../../Components/Tables/SSFarmers/SSFarmersTable";

const SSFarmers = () => {
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
                  className="btn btn-primary "
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Add Small Scale Farmers
                </button>
              </div>
            </div>
            {/*end  button row*/}
            <br />
            {/* Table */}
            <SSFarmerTable />
            {/* Table */}

            {/* brand modal */}
            {isModalOpen && <SSFarmerModal setOpenModal={setIsModalOpen} />}
            {/* brand modal */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSFarmers;
