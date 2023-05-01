import { useState, useEffect } from "react";
import { Typography, Button, Form, Input, Row, Col, Checkbox } from "antd";
import { ReactComponent as GoogleIcon } from "Assets/Icons/Google.svg";
import "./RegisterForm.scss";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { registerUser } from "../../Redux/Actions/AuthActions";

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = useForm();
  const values = useAppSelector((store) => store.RegisterUserReducer);
  useEffect(() => {
    setLoading(values?.loading);
    setError(values?.error);
  }, [values]);

  useEffect(() => {
    if (values?.response) {
      navigate("/auth/login");
    }
  }, [values?.response]);
  const handleSubmit = (values: any) => {
    dispatch(registerUser(values));
  };
  return (
    <Row align="middle" justify="center" className="register__form__container">
      <Col lg={10}>
        <Typography.Text className="form__title">Register</Typography.Text>
        <Typography.Paragraph type="secondary">
          Enter your credentials to acces your account
        </Typography.Paragraph>
        <Button icon={<GoogleIcon />} className="google__auth__btn">
          <Typography.Text type="secondary">
            Login in with Google
          </Typography.Text>
        </Button>
        <Typography.Paragraph type="secondary" style={{ textAlign: "center" }}>
          Or
        </Typography.Paragraph>
        {error && (
          <Typography.Paragraph type="warning">{error}</Typography.Paragraph>
        )}
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className="form__redirect">
          <Typography.Paragraph>
            Already Registered?{" "}
            <Typography.Link
              className="text medium-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </Typography.Link>
          </Typography.Paragraph>
        </div>
      </Col>
    </Row>
  );
}

export default RegisterForm;
