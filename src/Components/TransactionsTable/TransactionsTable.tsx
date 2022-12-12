import { Table } from "antd";
import { columns } from "utils/tabledata";
function TransactionsTable() {
  return <Table dataSource={[]} columns={columns} />;
}

export default TransactionsTable;
