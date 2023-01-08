import { Table, Typography } from "antd";
import dateFormat from "dateformat";
import TableActions from "Components/TableActions/TableActions";
import { DeleteTransaction } from "Redux/Actions/TransactionActions";
import { useAppDispatch } from "../../Redux/hooks";
import { useState, useEffect } from "react";

function TransactionsTable({ data, onEdit, noAction = false }: any) {
  const dispatch = useAppDispatch();
  const [action, setAction] = useState<boolean>(noAction);
  const onDeleteHandler = async (id: any) => {
    await dispatch(DeleteTransaction({ id: id }));
  };

  const columns = [
    {
      title: "ID",
      render: (row: any, text: any, index: number) => (
        <Typography.Text>{index + 1}</Typography.Text>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "150px",
      render: (row: any) => (
        <Typography.Text>{dateFormat(row, "yyyy/mm/dd")}</Typography.Text>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      width: "10px",
      render: (text: string) => (
        <TableActions
          onEdit={() => onEdit(text)}
          onDelete={() => onDeleteHandler(text)}
        />
      ),
    },
  ];
  return <Table dataSource={data} columns={columns} />;
}

export default TransactionsTable;
