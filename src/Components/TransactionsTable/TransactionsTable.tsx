import { Table, Typography } from "antd";
import dayjs from "dayjs";
import dateFormat from "dateformat";

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
    render: (row: any) => (
      <Typography.Text>{dateFormat(row, "yyyy/mm/dd")}</Typography.Text>
    ),
  },
];

function TransactionsTable({ data }: any) {
  return <Table dataSource={data} columns={columns} />;
}

export default TransactionsTable;
