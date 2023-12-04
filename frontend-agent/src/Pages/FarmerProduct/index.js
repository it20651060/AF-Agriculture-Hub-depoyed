import React, { useState } from "react";
import FarmerproductTable from "../../Components/Tables/FarmerProduct/FarmerproductTable";
import FarmerproductModal from "../../Components/Modals/FarmerProduct/FarmerproductModal";

const FarmerProduct = () => {
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
                  Add Company Products
                </button>
              </div>
            </div>
            {/*end  button row*/}
            <br />
            {/* Table */}
            <FarmerproductTable />
            {/* Table */}
            {/* brand modal */}
            {isModalOpen && (
              <FarmerproductModal setOpenModal={setIsModalOpen} />
            )}
            {/* brand modal */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProduct;
