import { useEffect, useState } from "react";
import {
  CreateTansaction,
  GetSingleTransaction,
  UpdateTransaction,
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
  const [filterType, setFilterType] = useState<string | number>("All");
  const [filterText, setFilterText] = useState<string>("");
  const [filterDate, setFilterDate] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(true);
  const [transactionID, setTransactionID] = useState();
  const { response } = useAppSelector((store) => store.TransactionReducer);

  const handleDateChange = (date: any) => {
    setFilterDate(date);
  };

  const handleAddTransaction = async () => {
    const formData = form.getFieldsValue();
    if (!formData.type) formData.type = "income";
    setLoading(true);
    if (update) {
      await dispatch(UpdateTransaction(formData, { id: transactionID }));
    } else {
      await dispatch(
        CreateTansaction(formData, { id: localStorage.getItem("user") })
      );
    }
    setLoading(false);
    setOpen(false);
  };

  const handleTypeChange = (value: any) => {
    setType(value);
    form.setFieldValue("category", null);
  };
  const onEditHandler = async (id: any) => {
    setOpen(true);
    setTransactionID(id);
    await dispatch(GetSingleTransaction({ id: id }));
  };
  useEffect(() => {
    if (response) {
      setUpdate(true);
      form.setFieldsValue({
        title: response?.title,
        description: response?.description,
        category: response?.category,
        amount: response?.amount,
      });
    }
  }, [response]);

  return (
    <>
      <Row className="box shadow rounded dim-white">
        <Col lg={24}>
          <Space>
            <Typography.Title className="text large">
              Transaction History
            </Typography.Title>
            <AddIcon
              onClick={() => {
                setUpdate(false);
                setOpen(true);
              }}
              style={{ cursor: "pointer" }}
            />
          </Space>
          <Row justify="space-between" style={{ marginTop: 10 }}>
            <Col>
              <Segmented
                defaultValue={"All"}
                onChange={(value) => setFilterType(value)}
                options={["All", "Income", "Expense"]}
              />
            </Col>
            <Col>
              <Space>
                <Search
                  placeholder="search transactions..."
                  onChange={(event) => setFilterText(event.target.value)}
                />
                <RangePicker onChange={handleDateChange} />
              </Space>
            </Col>
          </Row>
          <Row style={{ margin: "20px 0px" }}>
            <Col lg={24}>
              <TransactionsTable
                filterDate={filterDate}
                filterText={filterText}
                filterType={filterType}
                onEdit={onEditHandler}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title={`${update ? "Update" : "Add"} Transaction`}
        open={open}
        onOk={handleAddTransaction}
        onCancel={() => setOpen(false)}
        confirmLoading={loading}
        okText={update ? "Update" : "Add"}
      >
        <Form layout="vertical" form={form}>
          <Form.Item label="Choose transaction type: " name="type">
            <Segmented
              defaultValue="income"
              options={["income", "expense"]}
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
                  options={type == "expense" ? expenseCategory : incomeCategory}
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
