import React, { useEffect, useState } from "react";
import { Snackbar, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import Table from "./ordersTable";

const Orders = (props) => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  useEffect(() => {
    async function fetch() {
      if (props.account) {
        setLoading(true);
        try {
          //   let response = await axios({
          //     method: "GET",
          //     url: `${process.env.REACT_APP_API_URL}/orders/wallet/${props.account}`,
          //   });

          let response = await axios.get(
            `${process.env.REACT_APP_API_URL}/orders/wallet/${props.account}`,
            {
              headers: {
                token: process.env.REACT_APP_TOKEN_API,
              },
            }
          );

          setLoading(false);
          setOrders(response.data);
        } catch (e) {
          setLoading(false);
          setAlertState({
            open: true,
            message: `Something went wrong`,
            severity: "error",
          });
        }
      }
    }

    fetch();
  }, []);

  return (
    <>
      <div className="collection-container">
        <div className="tokens-container">
          <h3 className="collection-title">My Orders</h3>
        </div>

        <div className="orders">
          {loading ? (
            <CircularProgress style={{ color: "#3d3d3d" }} />
          ) : orders?.length > 0 ? (
            <Table orders={orders} />
          ) : (
            <p>Didn't find any orders</p>
          )}
        </div>
      </div>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
        className="alert"
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
          className="alert"
        >
          <h3 style={{ fontSize: "15px" }}>{alertState.message}</h3>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Orders;
