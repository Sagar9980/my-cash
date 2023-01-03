import { Table } from "antd";
import { columns } from "utils/tabledata";
function TransactionsTable({ data }: any) {
  return <Table dataSource={data} columns={columns} />;
}

export default TransactionsTable;
