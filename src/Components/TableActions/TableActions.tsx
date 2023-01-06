import { Dropdown, Menu, Modal } from "antd";
import {
  EditFilled,
  DeleteOutlined,
  MoreOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

function TableActions({ onDelete }: any) {
  const confirm = () => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure want to delete",
      okText: "Confirm Delete",
      okButtonProps: { type: "primary", danger: true },
      cancelText: "Cancel",
      onOk: onDelete,
    });
  };
  const OverlayContent = () => (
    <Menu>
      <Menu.Item onClick={() => {}} icon={<EditFilled />}>
        Edit
      </Menu.Item>
      <Menu.Item onClick={() => confirm()} icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={OverlayContent} placement="bottom" trigger={["click"]}>
      <MoreOutlined style={{ fontSize: 24 }} />
    </Dropdown>
  );
}

export default TableActions;
