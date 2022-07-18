import React, { useEffect, useState } from "react";
import { Snackbar, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Token from "../assets/token.png";
import Button from "./Button";
import Lookup from "./Lookup";

const Staking = (props) => {
  const [tokens, setTokens] = useState([]);
  const [unclaimed, setUnclaimed] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isClaiming, setIsClaiming] = useState(false);

  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  useEffect(() => {
    async function fetch() {
      if (props.account && props.contract) {
        props.contract.methods
          .walletOfOwner(props.account)
          .call()
          .then((tokens) => {
            setTokens(tokens);
          });
      }
    }

    fetch();
  }, [props.contract]);

  useEffect(() => {
    let totalBalance = 0;

    function rewards() {
      if (props.account && props.tokensContract && tokens.length > 0) {
        tokens.forEach((token, i) => {
          props.tokensContract.methods
            .rewardBalance(token)
            .call()
            .then((balance) => {
              totalBalance = totalBalance + parseInt(balance);
              setUnclaimed(totalBalance);
            });
        });

        props.tokensContract.methods
          .balanceOf(props.account)
          .call()
          .then((balance) => {
            setBalance(balance);
          });
      }
    }

    rewards();
  }, [tokens, props.tokensContract]);

  const claim = () => {
    setIsClaiming(true);

    if (unclaimed > 0) {
      props.tokensContract.methods
        .batchClaim(tokens)
        .send({ from: props.account })
        .once("receipt", (receipt) => {
          setAlertState({
            open: true,
            message: "Successfully claimed Pastels",
            severity: "success",
          });
          props.loadBlockchainData();
          setIsClaiming(false);
        })
        .catch((e) => {
          setIsClaiming(false);
        });
    } else {
      setIsClaiming(false);
      setAlertState({
        open: true,
        message: "No tokens to claim",
        severity: "error",
      });
    }
  };

  const Content = () => {
    return (
      <>
        <div className="collection-container">
          <div className="tokens-container">
            <h3 className="collection-title">Pastels</h3>

            <div className="staking-item-container">
              <img className="staking-img" src={Token} alt="Token" />

              <div className="token-desc">
                <h3>{(balance / 1000000000000000000).toFixed(2)} PSTL</h3>
                <h3>Pending: {(unclaimed / 1000000000000000000).toFixed(2)}</h3>
                <div
                  className="discord-btn-container"
                  style={{
                    textAlign: "center",
                    color: "black",
                    marginTop: "20px",
                  }}
                >
                  {isClaiming ? (
                    <div className="claiming-loading-container">
                      <CircularProgress style={{ color: "#3d3d3d" }} />
                    </div>
                  ) : (
                    <Button text="claim" action={claim} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <Lookup tokensContract={props.tokensContract} /> */}
        </div>
      </>
    );
  };

  return (
    <>
      <Content />
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => props.setAlertState({ ...alertState, open: false })}
        className="alert"
      >
        <Alert
          onClose={() => props.setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
          className="alert"
        >
          <h3 style={{ fontSize: "15px" }}>{alertState.message}</h3>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Staking;
