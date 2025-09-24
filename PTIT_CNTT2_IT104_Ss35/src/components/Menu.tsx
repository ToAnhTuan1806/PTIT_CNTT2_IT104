import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"
import type { RootState } from "../stores"
import { toggleMenu } from "../slice/menuSlice"

const menuItems = [
  { key: "dashboard", icon: <DashboardOutlined />, label: "Bảng điều khiển" },
  { key: "user", icon: <UserOutlined />, label: "Tài khoản" },
  { key: "asset", icon: <HomeOutlined />, label: "Tài sản" },
  { key: "chart", icon: <BarChartOutlined />, label: "Thống kê" },
  { key: "docs", icon: <FileTextOutlined />, label: "Tài liệu" },
]

export default function Menu() {
  const collapsed = useSelector((state: RootState) => state.menu.collapsed)
  const dispatch = useDispatch()

  return (
    <div
      style={{
        width: collapsed ? "35px" : "155px",
        background: "#001529",
        color: "#fff",
        padding: "10px",
      }}
    >
      {menuItems.map((item) => (
        <div
          key={item.key}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",

          }}
        >
          {item.icon}
          {!collapsed && <span style={{ marginLeft: "10px" }}>{item.label}</span>}
        </div>
      ))}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => dispatch(toggleMenu())}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
        {!collapsed && <span style={{ marginLeft: "10px" }}>Thu gọn</span>}
      </div>
    </div>
  )
}