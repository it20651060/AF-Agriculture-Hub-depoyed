import {
  UserOutlined,
  FileProtectOutlined,
  CommentOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import { getRevenue } from "../../API";
import NewsModal from "../../Components/Modals/News/NewsModal";
import NewsTable from "../../Components/Tables/News/NewsTable";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function DashboardCard({ title, value, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }

  function DashboardChart() {
    const [reveneuData, setReveneuData] = useState({
      labels: [],
      datasets: [],
    });

    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => {
          return `User-${cart.userId}`;
        });
        const data = res.carts.map((cart) => {
          return cart.discountedTotal;
        });

        const dataSource = {
          labels,
          datasets: [
            {
              label: "Revenue",
              data: data,
              backgroundColor: "rgba(255, 0, 0, 1)",
            },
          ],
        };

        setReveneuData(dataSource);
      });
    }, []);

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Order Revenue",
        },
      },
    };
  }

  // const [orders, setOrders] = useState(0);
  // const [inventory, setInventory] = useState(0);
  // const [customers, setCustomers] = useState(0);
  // const [revenue, setRevenue] = useState(0);

  // useEffect(() => {
  //   getOrders().then((res) => {
  //     setOrders(res.total);
  //     setRevenue(res.discountedTotal);
  //   });
  //   getInventory().then((res) => {
  //     setInventory(res.total);
  //   });
  //   getCustomers().then((res) => {
  //     setCustomers(res.total);
  //   });
  // }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>News and Informations</Typography.Title>

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
            + Add News
          </button>
        </div>
      </div>
      {/*end  button row*/}

      <Space direction="horizontal">
        <DashboardCard
          icon={
            <FileProtectOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total News"}
          value={146}
        />
        <DashboardCard
          icon={
            <CommentOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Comments"}
          value={23}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Farmers"}
          value={1249}
        />
        <DashboardCard
          icon={
            <RiseOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Engagement"}
          value={809}
        />
      </Space>

      <NewsTable />

      {/* brand modal */}
      {isModalOpen && <NewsModal setOpenModal={setIsModalOpen} />}
      {/* brand modal */}
    </Space>
  );
};

export default News;
