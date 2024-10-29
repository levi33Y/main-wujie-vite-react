import {
  AppstoreOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

export const Home = () => {
  const [keepLightKey, setKeepLightKey] = useState<string>("");

  const navigate = useNavigate();

  const jump = (url: string) => {
    setKeepLightKey(url);

    navigate(url);
  };

  const items: MenuItem[] = [
    {
      key: "application",
      icon: <PieChartOutlined />,
      label: (
        <div
          onClick={() => {
            jump("application");
          }}
        >
          应用市场
        </div>
      ),
    },
    {
      key: "internal",
      icon: <DesktopOutlined />,
      label: (
        <div
          onClick={() => {
            jump("internal");
          }}
        >
          内部系统
        </div>
      ),
    },
    {
      key: "4",
      label: "服务集群",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "service/system",
          label: (
            <div
              onClick={() => {
                jump("service/system");
              }}
            >
              系统权限
            </div>
          ),
        },
        {
          key: "service/system",
          label: (
            <div
              onClick={() => {
                jump("service/system");
              }}
            >
              个性化配置
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="h-screen w-screen flex">
      <Menu
        selectedKeys={[keepLightKey]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
        className="w-40"
      />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
