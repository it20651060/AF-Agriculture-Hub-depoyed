import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  MessageOutlined,
  FileProtectOutlined,
  SettingOutlined,
  LogoutOutlined,
  CalendarOutlined,
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
            label: "Small-Scale Farmers",
            key: "/ssfarmers",
            icon: <UserAddOutlined />,
          },
          {
            label: "News",
            key: "/news",
            icon: <FileProtectOutlined />,
          },
          {
            label: "Message",
            key: "/message",
            icon: <MessageOutlined />,
          },
          {
            label: "Product",
            key: "/farmerproduct",
            icon: <CalendarOutlined />,
          },
          {
            label: "My Profile",
            key: "/profile",
            icon: <UserOutlined />,
          },
          {
            label: "Setting",
            key: "/setting",
            icon: <SettingOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
