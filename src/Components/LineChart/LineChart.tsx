import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Row, Col, Typography } from "antd";
import { useQuery } from "react-query";
import "./LineChart.scss";
import { LineDataTypes } from "utils/linechart_data";
import { getLineChartData } from "API/transactionApi";
import { AxiosResponse } from "axios";
function LineChart() {
  const params = {
    id: localStorage.getItem("user"),
  };
  const {
    isLoading,
    error,
    data: lineChartData,
  } = useQuery(["data", params], () => getLineChartData(params));
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (lineChartData) {
      setData(lineChartData.data.data);
    }
  }, [lineChartData]);
  const config = {
    data,
    xField: "month",
    yField: "amount",
    seriesField: "statement",
    smooth: true,
    yAxis: {
      label: {
        formatter: (v: any) => `${(v / 1000).toFixed(1)}K`,
      },
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    color: ({ statement }: any) => {
      if (statement === "income") {
        return "#9FD356";
      }
      return "#FA824C";
    },
  };
  return (
    <Row className="line__chart__container box shadow rounded dim-white">
      <Col lg={24}>
        <Typography.Text className="text light-blue bold medium">
          Statements
        </Typography.Text>
        <Line {...config} height={200} />
      </Col>
    </Row>
  );
}

export default LineChart;
