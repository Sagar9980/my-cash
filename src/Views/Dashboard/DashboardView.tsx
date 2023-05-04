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
import Loader from "Components/Loader/Loader";
import { useQuery } from "react-query";
import { getDashboardData } from "API/transactionApi";

const now = new Date();
function DashboardView() {
  const params = {
    id: localStorage.getItem("user"),
  };
  const { data: dashboardData } = useQuery(["dashboardData", params], () =>
    getDashboardData(params)
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserDetail = async () => {
      await dispatch(fetchUserDetail());
    };
    getUserDetail();
  }, [dispatch]);

  const { data, loading } = useAppSelector((store) => store.UserDetailReducer);
  const userName = data?.name;
  const cards = [
    {
      id: 1,
      title: "Current Balance",
      image: <MoneyBagIcon />,
      amount: dashboardData?.data?.data?.currentBalance,
      color: "#3C91E6",
    },
    {
      id: 2,
      title: "Total Income",
      image: <ChartIncreasing />,
      amount: dashboardData?.data?.data?.totalIncome,
      color: "#9FD356",
    },
    {
      id: 3,
      title: "Total Expense",
      image: <ChartDecreasing />,
      amount: dashboardData?.data?.data?.totalExpense,
      color: "#FA824C",
    },
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

export default DashboardView;
