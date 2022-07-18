import React, { useEffect, useState } from "react";
import { Snackbar, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Grid from "@mui/material/Grid";
import M1Image from "../../assets/m1.png";
import M2Image from "../../assets/m2.png";
import MegaImage from "../../assets/mega.png";
import Button from "../Button";
// import holders from "../../assets/holders.json";

const Serums = (props) => {
  // const [whitelist, setWhitelist] = useState([]);
  const [tokens, setTokens] = useState([]);
  // const [unclaimed, setUnclaimed] = useState(0);
  // const [M1, setM1] = useState(0);
  // const [M2, setM2] = useState(0);
  // const [Mega, setMega] = useState(0);
  const [M1Price, setM1Price] = useState(0);
  const [M2Price, setM2Price] = useState(0);
  const [MegaPrice, setMegaPrice] = useState(0);
  const [M1Count, setM1Count] = useState(0);
  const [M2Count, setM2Count] = useState(0);
  const [MegaCount, setMegaCount] = useState(0);

  const [isClaiming, setIsClaiming] = useState(false);
  // const [serums, setSerums] = useState([]);
  // const [modal, setModal] = useState({
  //   open: false,
  //   token: {},
  // });
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  // useEffect(() => {
  //   setWhitelist(holders.map(({ wallet }) => wallet.toLowerCase()));
  // }, []);

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
    async function serums() {
      if (props.account && props.serumsContract) {
        // [1, 2, 69].forEach((token, i) => {
        //   props.serumsContract.methods
        //     .balanceOf(props.account, token)
        //     .call()
        //     .then((response) => {
        //       if (token == 1) {
        //         setM1(response);
        //       } else if (token == 2) {
        //         setM2(response);
        //       } else if (token == 69) {
        //         setMega(response);
        //       }
        //     });
        // });

        [1, 2, 69].forEach((token, i) => {
          props.serumsContract.methods
            .price(token)
            .call()
            .then((response) => {
              if (token == 1) {
                setM1Price(response / 1000000000000000000);
              } else if (token == 2) {
                setM2Price(response / 1000000000000000000);
              } else if (token == 69) {
                setMegaPrice(Math.ceil(response / 1000000000000000000));
              }
            });
        });
      }
    }

    serums();
  }, [tokens, props.serumsContract]);

  const claim = () => {
    // if (whitelist.includes(props.account.toLowerCase())) {
    if (M1Count > 0 || M2Count > 0 || MegaCount > 0) {
      setIsClaiming(true);

      props.tokensContract.methods
        .balanceOf(props.account)
        .call()
        .then((balance) => {
          if (
            M1Count * M1Price + M2Count * M2Price + MegaCount * MegaPrice >
            balance / 1000000000000000000
          ) {
            setAlertState({
              open: true,
              message: "Not Enough $Pastels",
              severity: "error",
            });
            setIsClaiming(false);
          } else {
            props.serumsContract.methods
              .mint([1, 2, 69], [M1Count, M2Count, MegaCount])
              .send({ from: props.account })
              .once("receipt", (receipt) => {
                setAlertState({
                  open: true,
                  message: "Successfully bought Elixir(s)",
                  severity: "success",
                });
                setIsClaiming(false);
              })
              .catch((e) => {
                setIsClaiming(false);
              });
          }
        });
    } else {
      setAlertState({
        open: true,
        message: "Need to buy at least 1 elixir",
        severity: "error",
      });
    }
    // } else {
    //   setAlertState({
    //     open: true,
    //     message: "You're not whitelisted",
    //     severity: "error",
    //   });
    // }
  };

  const Content = () => {
    return (
      <>
        <div className="collection-container">
          <div className="tokens-container">
            {/* <div className="buy-serums">
              <button onClick={() => props.setTab(1)}>My Elixirs</button>
            </div> */}
            <h2 className="collection-title">Buy Elixirs</h2>

            <Grid container>
              <Grid item xs={12} md={4} lg={4} className="token-item-container">
                <img className="token-img" src={M1Image} alt="Token" />

                <div className="token-desc">
                  <div className="buy-serum-container">
                    <span
                      onClick={() =>
                        M1Count > 0 ? setM1Count(M1Count - 1) : null
                      }
                    >
                      -
                    </span>
                    <h3>{M1Count} E1 Elixir</h3>
                    <span
                      onClick={() =>
                        M1Count < 10 ? setM1Count(M1Count + 1) : null
                      }
                    >
                      +
                    </span>
                  </div>
                  <p>${M1Price} Pastels</p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} lg={4} className="token-item-container">
                <img className="token-img" src={M2Image} alt="Token" />

                <div className="token-desc">
                  <div className="buy-serum-container">
                    <span
                      onClick={() =>
                        M2Count > 0 ? setM2Count(M2Count - 1) : null
                      }
                    >
                      -
                    </span>
                    <h3>{M2Count} E2 Elixir</h3>
                    <span
                      onClick={() =>
                        M2Count < 10 ? setM2Count(M2Count + 1) : null
                      }
                    >
                      +
                    </span>
                  </div>
                  <p>${M2Price} Pastels</p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} lg={4} className="token-item-container">
                <img className="token-img" src={MegaImage} alt="Token" />

                <div className="token-desc">
                  <div className="buy-serum-container">
                    <span
                      onClick={() =>
                        MegaCount > 0 ? setMegaCount(MegaCount - 1) : null
                      }
                    >
                      -
                    </span>
                    <h3>{MegaCount} Mega Elixir</h3>
                    <span
                      onClick={() =>
                        MegaCount < 10 ? setMegaCount(MegaCount + 1) : null
                      }
                    >
                      +
                    </span>
                  </div>
                  <p>${MegaPrice} Pastels</p>
                </div>
              </Grid>
            </Grid>
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
                <Button
                  text={`Buy • ${
                    M1Count * M1Price +
                    M2Count * M2Price +
                    MegaCount * MegaPrice
                  } $PASTELS`}
                  action={claim}
                />
              )}
            </div>
          </div>
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

export default Serums;
