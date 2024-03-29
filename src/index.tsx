import React from "react";
import ReactDOM from "react-dom/client";
import App from "Container/App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "Redux/store";
import {QueryClient, QueryClientProvider} from 'react-query';
import "Themes/App.scss";


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3C91E6",
          fontFamily: "Poppins",
          fontSize: 16,
          colorTextHeading: "#3C91E6",
        },
      }}
    >
      <QueryClientProvider client = {queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
