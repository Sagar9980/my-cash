// import { useEffect, useState } from "react";
import { Typography, Button, Form, Input, Row, Col, Checkbox } from "antd";
import { ReactComponent as GoogleIcon } from "Assets/Icons/Google.svg";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/lib/form/Form";
// import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
// import { loginUser } from "../../Redux/Actions/AuthActions";
// import { LoginParams } from "../../Redux/ActionTypes/AuthTypes";

function LoginForm() {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = useForm();
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<any>();
  const handleOAuth = async () => {
    // window.open("http://localhost:4000/api/google", "_blank")?.focus();
  };
  // const values = useAppSelector((store) => store.LoginUserRecucer);
  // useEffect(() => {
  //   setLoading(values?.loading);
  //   setError(values?.error);
  // }, [values]);
  const handleSubmit = async () => {
    // await dispatch(loginUser(values));
    // navigate("/");
  };
  return (
    <Row align="middle" justify="center" className="login__form__container">
      <Col lg={10}>
        <Typography.Text className="form__title">Login</Typography.Text>
        <Typography.Paragraph type="secondary">
          Enter your credentials to acces your account
        </Typography.Paragraph>
        <Button
          icon={<GoogleIcon />}
          className="google__auth__btn"
          onClick={handleOAuth}
        >
          <Typography.Text type="secondary">
            Login in with Google
          </Typography.Text>
        </Button>
        <Typography.Paragraph type="secondary" style={{ textAlign: "center" }}>
          Or
        </Typography.Paragraph>
        {true && (
          <Typography.Paragraph type="warning">good</Typography.Paragraph>
        )}
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
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
          <div className="form__options">
            <Checkbox>Remember me</Checkbox>
            <Typography.Link style={{ fontWeight: "bold" }}>
              Forgot Password?
            </Typography.Link>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={false}>
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="form__redirect">
          <Typography.Paragraph>
            Don't have account?{" "}
            <Typography.Link
              style={{ fontWeight: "bold" }}
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Register
            </Typography.Link>
          </Typography.Paragraph>
        </div>
      </Col>
    </Row>
  );
}

export default LoginForm;
