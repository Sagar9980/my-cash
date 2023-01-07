import { Dropdown, Menu, Modal } from "antd";
import {
  EditFilled,
  DeleteOutlined,
  MoreOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

function TableActions({ onDelete, onEdit }: any) {
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
      <Menu.Item onClick={onEdit} icon={<EditFilled />}>
        Edit
      </Menu.Item>
      <Menu.Item onClick={() => confirm()} icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={OverlayContent} placement="bottom" trigger={["click"]}>
      <MoreOutlined style={{ fontSize: 20 }} />
    </Dropdown>
  );
}

export default TableActions;
