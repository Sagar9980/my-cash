import { useEffect, useState } from "react";
import {
  CreateTansaction,
  GetAllTransactions,
} from "Redux/Actions/TransactionActions";
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
import TransactionsTable from "Components/TransactionsTable/TransactionsTable";
import { incomeCategory, expenseCategory } from "utils/category";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { useForm } from "antd/lib/form/Form";

const { Search } = Input;
const { RangePicker } = DatePicker;
function TransactionList() {
  const dispatch = useAppDispatch();
  const [form] = useForm();

  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>();
  const [transactionData, setTansactionData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { data } = useAppSelector((store) => store.TransactionReducer);
  const onSearch = () => {};

  const handleAddTransaction = async () => {
    const formData = form.getFieldsValue();
    setLoading(true);
    await dispatch(
      CreateTansaction(formData, { id: localStorage.getItem("user") })
    );
    setLoading(false);
    setOpen(false);
  };
  const handleTypeChange = (value: any) => {
    setType(value);
    form.setFieldValue("category", null);
  };

  useEffect(() => {
    if (data) {
      setTansactionData(data);
    }
  }, [data]);

  useEffect(() => {
    const id = localStorage.getItem("user");
    const fetchTransactions = async (id: any) => {
      console.log(id);
      await dispatch(GetAllTransactions({ id: id }));
    };
    fetchTransactions(id);
  }, []);

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
              <TransactionsTable data={transactionData} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Add  Transactions"
        open={open}
        onOk={handleAddTransaction}
        onCancel={() => setOpen(false)}
        confirmLoading={loading}
        okText={"Add"}
      >
        <Form layout="vertical" form={form}>
          <Form.Item label="Choose transaction type: " name="type">
            <Segmented
              defaultValue={"Income"}
              options={["Income", "Expense"]}
              onChange={handleTypeChange}
            />
          </Form.Item>
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
          <Row gutter={[20, 20]}>
            <Col lg={12}>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Please select type!",
                  },
                ]}
              >
                <Select
                  options={type == "Expense" ? expenseCategory : incomeCategory}
                />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                shouldUpdate
                label="Amount"
                name="amount"
                rules={[
                  {
                    required: true,
                    message: "Please enter amount!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default TransactionList;
