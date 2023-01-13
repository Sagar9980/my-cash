import { Row, Col, Typography, Table } from "antd";
import { Link } from "react-router-dom";
import "./RecentTransactions.scss";
import { ReactComponent as ExternalLinkIcon } from "../../Assets/Icons/external-link-icon.svg";
import TransactionsTable from "../../Components/TransactionsTable/TransactionsTable";
import { useAppSelector } from "Redux/hooks";

function RecentTransactions() {
  const { data } = useAppSelector((store) => store.TransactionReducer);
  return (
    <Row className="recent__transactions__container box shadow rounded dim-white">
      <Col lg={24}>
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Text className="text light-blue bold medium">
              Recent Transactions
            </Typography.Text>
          </Col>
          <Col>
            <Row gutter={[10, 10]} align="middle">
              <Col>
                <Link to="/" className="text small light-green">
                  View All
                </Link>
              </Col>
              <Col style={{ paddingTop: 6 }}>
                {" "}
                <ExternalLinkIcon />
              </Col>
            </Row>
          </Col>
        </Row>
        <TransactionsTable data={data} noAction />
      </Col>
    </Row>
  );
}

export default RecentTransactions;
