import {
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
  BookOutlined,
  HomeOutlined,
} from "@ant-design/icons";


import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function SideMenu({ onLogout }) {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <div className="logout">
        <button class="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
      </div>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            key: "/",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Agri Agent",
            key: "/agriagent",
            icon: <UserOutlined />,
          },
          {
            label: "Gov Agent",
            key: "/gagent",
            icon: <UserOutlined />,
          },
          {
            label: "Agri Rules",
            key: "/agrirules",
            icon: <BookOutlined />,
          },
          {
            label: "Companies",
            key: "/companies",
            icon: <HomeOutlined />,
          },
          
          {
            label: "Company Product",
            key: "/comproduct",
            icon: <HomeOutlined />,
          },
          {
            label: "Example DataTable",
            key: "/inventory",
            icon: <ShopOutlined />,
          },

        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;

