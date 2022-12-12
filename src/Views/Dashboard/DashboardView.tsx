import { Row, Col, Typography } from "antd";
import dateFormat from "dateformat";
import OverviewCard from "Components/OverviewCards/OverviewCard";
import { ReactComponent as MoneyBagIcon } from "Assets/Icons/money-bag.svg";
import { ReactComponent as ChartIncreasing } from "Assets/Icons/chart-increasing.svg";
import { ReactComponent as ChartDecreasing } from "Assets/Icons/chart-decreasing.svg";
import LineChart from "Components/LineChart/LineChart";
import ProfileView from "Components/ProfileView/ProfileView";
import RecentTransactions from "Components/RecentTransactions/RecentTransactions";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchUserDetail } from "../../Redux/Actions/UserDetailAction";

const now = new Date();
function DashboardView() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserDetail = async () => {
      await dispatch(fetchUserDetail({ id: localStorage.getItem("user") }));
    };
    getUserDetail();
  }, []);

  const { data } = useAppSelector((store) => store.UserDetailReducer);
  const currentBalance = data?.userdetail?.currentBalance;
  const totalIncome = data?.userdetail?.totalIncome;
  const totalExpenses = data?.userdetail?.totalExpenses;
  const userName = data?.name;

  const cards = [
    {
      id: 1,
      title: "Current Balance",
      image: <MoneyBagIcon />,
      amount: currentBalance,
      color: "#3C91E6",
    },
    {
      id: 2,
      title: "Total Income",
      image: <ChartIncreasing />,
      amount: totalIncome,
      color: "#9FD356",
    },
    {
      id: 3,
      title: "Total Expense",
      image: <ChartDecreasing />,
      amount: totalExpenses,
      color: "#FA824C",
    },
  ];
  return (
    <Row gutter={[20, 20]}>
      <Col lg={17}>
        <Row align="middle" justify="space-between">
          <Col>
            <Typography.Title level={4}>
              Good Morning, {userName?.split(" ")[0]} !
            </Typography.Title>
          </Col>
          <Col>
            <Typography.Text style={{ color: "#9FD356" }}>
              {/* Friday, 16th sept 2022 */}
              {dateFormat(now, "dddd, dS mmmm yyyy")}
            </Typography.Text>
          </Col>
        </Row>
        <Row gutter={[10, 10]} justify="space-between">
          {cards.map((card: any) => {
            return (
              <Col>
                <OverviewCard {...card} />
              </Col>
            );
          })}
        </Row>
        {/* line chart */}
        <Row>
          <Col lg={24}>
            <LineChart />
            <RecentTransactions />
          </Col>
        </Row>
      </Col>
      <Col lg={7}>
        <ProfileView />
      </Col>
    </Row>
  );
}

export default DashboardView;
