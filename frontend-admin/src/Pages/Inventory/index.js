import React, { useState } from "react";
import CountriesTable from "../../Components/Tables/Countries/CountriesTable";
import RulesModal from "../../Components/Modals/Agrirules/RulesModal";
import { Space, Typography } from "antd";



function Inventory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Sample DataTable</Typography.Title>
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
                    className="btn btn-primary waves-effect waves-light"
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    <i className="bx bx-box font-size-16 align-middle me-2"></i>{" "}
                    Add Brand
                  </button>
                </div>
              </div>
              {/*end  button row*/}
              <br />

              <CountriesTable />

              {/* brand modal */}
              {isModalOpen && <RulesModal setOpenModal={setIsModalOpen} />}
              {/* brand modal */}

            </div>
          </div>
        </div>
      </div>
    </Space>

  );
}
export default Inventory;
