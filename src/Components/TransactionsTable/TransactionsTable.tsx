import { Table, Typography } from "antd";
import dateFormat from "dateformat";
import TableActions from "Components/TableActions/TableActions";
import {
  DeleteTransaction,
  GetAllTransactions,
} from "Redux/Actions/TransactionActions";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { useState, useEffect } from "react";

function TransactionsTable({ onEdit, noAction = false }: any) {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.TransactionReducer);

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
      render: (text: any) => (
        <Typography.Text style={{ fontWeight: "bold", color: "#3C91E6" }}>
          {text}
        </Typography.Text>
      ),
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
      render: (text: any, row: any) => (
        <Typography.Text
          style={{
            color: row.type == "Income" ? "#9FD356" : "#FA824C",
            fontWeight: "bold",
          }}
        >
          {text}
        </Typography.Text>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "150px",
      render: (text: any) => (
        <Typography.Text>{dateFormat(text, "yyyy/mm/dd")}</Typography.Text>
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
  useEffect(() => {
    const id = localStorage.getItem("user");
    const fetchTransactions = async (id: any) => {
      await dispatch(GetAllTransactions({ id: id }));
    };
    fetchTransactions(id);
  }, []);
  return <Table dataSource={data} columns={columns} />;
}

export default TransactionsTable;
