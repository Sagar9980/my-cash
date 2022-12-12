import { useState } from "react";
import {
  Row,
  Col,
  Space,
  Typography,
  Segmented,
  Input,
  DatePicker,
  Modal,
  Divider,
  Form,
  Select,
  InputNumber,
} from "antd";
import { ReactComponent as AddIcon } from "Assets/Icons/add.svg";
import RecentTransactions from "Components/RecentTransactions/RecentTransactions";
import TransactionsTable from "Components/TransactionsTable/TransactionsTable";
const { Search } = Input;
const { RangePicker } = DatePicker;
function TransactionList() {
  const [open, setOpen] = useState<boolean>(false);
  const onSearch = () => {};
  const handleAddTransaction = () => {};
  return (
    <>
      <Row className="box shadow rounded dim-white">
        <Col lg={24}>
          <Space>
            <Typography.Title className="text large">
              Transaction History
            </Typography.Title>
            <AddIcon
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            />
          </Space>
          <Row justify="space-between" style={{ marginTop: 10 }}>
            <Col>
              <Segmented options={["All", "Income", "Expenses"]} />
            </Col>
            <Col>
              <Space>
                <Search
                  placeholder="search transactions..."
                  onSearch={onSearch}
                  enterButton
                />
                <RangePicker />
              </Space>
            </Col>
          </Row>
          <Row style={{ margin: "20px 0px" }}>
            <Col lg={24}>
              <TransactionsTable />
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Add  Transactions"
        open={open}
        onOk={handleAddTransaction}
        onCancel={() => setOpen(false)}
        okText={"Add"}
      >
        <Form layout="vertical">
          <Typography.Text>Choose transaction type:</Typography.Text>
          <Segmented options={["Income", "Expense"]} />
          <Divider />
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter title!",
              },
            ]}
          >
            <Input placeholder="Monthly Salary" size="small" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description!" }]}
          >
            <Input placeholder="Salary paid for month December" size="small" />
          </Form.Item>
          <Space>
            <Form.Item
              label="Type"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please select type!",
                },
              ]}
            >
              <Select
                defaultValue=""
                options={[
                  {
                    value: "salary",
                    label: "Salary",
                  },
                  {
                    value: "bonus",
                    label: "Bonus",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please enter amount!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </Space>
        </Form>
      </Modal>
    </>
  );
}

export default TransactionList;
