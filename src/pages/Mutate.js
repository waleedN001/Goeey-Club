import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Snackbar, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Grid from "@mui/material/Grid";
import M1Image from "../assets/m1.png";
import M2Image from "../assets/m2.png";
import MegaImage from "../assets/mega.png";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import bg from "../assets/bg-4.png";
import Modal from "../components/mutateModal";

const Mutate = (props) => {
  const { tokenID } = useParams();
  const [tokens, setTokens] = useState([]);
  const [M1, setM1] = useState(0);
  const [M2, setM2] = useState(0);
  const [Mega, setMega] = useState(0);
  const [loadingM1, setLoadingM1] = useState(false);
  const [loadingM2, setLoadingM2] = useState(false);
  const [loadingMega, setLoadingMega] = useState(false);
  const [tokenURIs, setTokenURIs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ownerOf, setOwnerOf] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    token: {},
    elixir: {},
  });
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  //   useEffect(() => {
  //     async function fetch() {
  //       if (props.account && props.contract) {
  //         props.contract.methods
  //           .walletOfOwner(props.account)
  //           .call()
  //           .then((tokens) => {
  //             setTokens(tokens);
  //           });
  //       }
  //     }

  //     fetch();
  //   }, [props.contract]);

  // useEffect(() => {
  //   let totalBalance = 0;

  //   function rewards() {
  //     if (props.account && props.tokensContract && tokens.length > 0) {
  //       tokens.forEach((token, i) => {
  //         props.tokensContract.methods
  //           .rewardBalance(token)
  //           .call()
  //           .then((balance) => {
  //             totalBalance = totalBalance + parseInt(balance);
  //             setUnclaimed(totalBalance);
  //           });
  //       });

  //       props.tokensContract.methods
  //         .balanceOf(props.account)
  //         .call()
  //         .then((balance) => {
  //           setBalance(balance);
  //         });
  //     }
  //   }

  //   rewards();
  // }, [tokens, props.tokensContract]);

  useEffect(() => {
    async function serums() {
      if (props.account && props.serumsContract) {
        [1, 2, 69].forEach((token, i) => {
          props.serumsContract.methods
            .balanceOf(props.account, token)
            .call()
            .then((response) => {
              if (token == 1) {
                setM1(response);
              } else if (token == 2) {
                setM2(response);
              } else if (token == 69) {
                setMega(response);
              }
            });
        });
      }
    }

    serums();
  }, [tokens, props.serumsContract]);

  const mutate = (type) => {
    let setLoading;
    if (type == 1) {
      setLoading = setLoadingM1;
    } else if (type == 2) {
      setLoading = setLoadingM2;
    } else if (type == 69) {
      setLoading = setLoadingMega;
    }

    if (
      (type == 1 && M1 == 0) ||
      (type == 2 && M2 == 0) ||
      (type == 69 && Mega == 0)
    ) {
      setAlertState({
        open: true,
        message: "Must own at least 1 Elixir of this type",
        severity: "error",
      });
    } else {
      setLoading(true);
      props.mutantsContract.methods
        .mutationActive()
        .call()
        .then((isMutationActive) => {
          if (isMutationActive) {
            props.mutantsContract.methods
              .mutateApeWithElixir(type)
              .send({ from: props.account, value: "" })
              .then((response) => {
                setLoading(false);

                setAlertState({
                  open: true,
                  message: "Mutation complete!",
                  severity: "success",
                });
                props.loadBlockchainData();
              })
              .catch((e) => {
                setLoading(false);
                setAlertState({
                  open: true,
                  message: "Couldn't complete mutation",
                  severity: "error",
                });
              });
          } else {
            setLoading(false);
            setAlertState({
              open: true,
              message: "Mutation is not active yet.",
              severity: "error",
            });
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          setAlertState({
            open: true,
            message: "Couldn't complete mutation",
            severity: "error",
          });
        });
    }
  };

  useEffect(() => {
    if (props.account && props.contract) {
      props.contract.methods
        .ownerOf(tokenID)
        .call()
        .then((response) => {
          if (response == props.account) {
            setOwnerOf(true);
            props.contract.methods
              .tokenURI(tokenID)
              .call()
              .then((tokenURI) => {
                if (tokenURIs.indexOf(tokenURI) === -1) {
                  tokenURI = tokenURI.replace(
                    "https://gateway.pinata.cloud/ipfs",
                    "https://ipfs.io/ipfs"
                  );

                  setTokenURIs((tokenURIs) =>
                    [...tokenURIs, tokenURI].sort(
                      (a, b) =>
                        a.split("/").pop().replace(".json", "") -
                        b.split("/").pop().replace(".json", "")
                    )
                  );
                }
              });
          }
        });
    }
  }, [props.account, props.contract]);

  useEffect(() => {
    getMetadata();
  }, [tokenURIs]);

  const getMetadata = async () => {
    const fetchAll = async (urls) => {
      const res = await Promise.all(urls.map((u) => fetch(u)));
      const jsons = await Promise.all(res.map((r) => r.json())).catch(function (
        err
      ) {
        console.log(err.message); // some coding error in handling happened
      });
      setTokens(jsons);
      setLoading(false);
    };

    fetchAll(tokenURIs);
  };

  const Content = () => {
    return (
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <Container className="section" style={{ paddingTop: "125px" }}>
          <div className="collection-container">
            <div className="tokens-container">
              <h2 className="collection-title">Mutate #{tokenID}</h2>
              <Modal
                modal={modal}
                setModal={setModal}
                tokensContract={props.tokensContract}
                mutantsContract={props.mutantsContract}
                account={props.account}
                setAlertState={setAlertState}
                mutate={mutate}
                loadBlockchainData={props.loadBlockchainData}
              />
              {ownerOf == true ? (
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={4}
                    className="token-item-container"
                  >
                    <img className="token-img" src={M1Image} alt="Token" />

                    <div className="token-desc">
                      <h3>{M1} x E1 Elixir</h3>
                      <button
                        onClick={() => {
                          M1 == 0
                            ? setAlertState({
                                open: true,
                                message:
                                  "Must own at least 1 Elixir of this type",
                                severity: "error",
                              })
                            : setModal({
                                open: true,
                                token: tokens[0],
                                elixir: { id: 1, image: M1Image },
                              });
                        }}
                        className="button2"
                      >
                        {loadingM1 ? (
                          <CircularProgress style={{ color: "#3d3d3d" }} />
                        ) : (
                          "use E1 elixir"
                        )}
                      </button>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={4}
                    className="token-item-container"
                  >
                    <img className="token-img" src={M2Image} alt="Token" />

                    <div className="token-desc">
                      <h3>{M2} x E2 Elixir</h3>
                      <button
                        className="button2"
                        onClick={() => {
                          M2 == 0
                            ? setAlertState({
                                open: true,
                                message:
                                  "Must own at least 1 Elixir of this type",
                                severity: "error",
                              })
                            : setModal({
                                open: true,
                                token: tokens[0],
                                elixir: { id: 2, image: M2Image },
                              });
                        }}
                      >
                        {loadingM2 ? (
                          <CircularProgress style={{ color: "#3d3d3d" }} />
                        ) : (
                          "use E2 elixir"
                        )}
                      </button>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={4}
                    className="token-item-container"
                  >
                    <img className="token-img" src={MegaImage} alt="Token" />

                    <div className="token-desc">
                      <h3>{Mega} x Mega Elixir</h3>
                      <button
                        onClick={() => {
                          Mega == 0
                            ? setAlertState({
                                open: true,
                                message:
                                  "Must own at least 1 Elixir of this type",
                                severity: "error",
                              })
                            : setModal({
                                open: true,
                                token: tokens[0],
                                elixir: { id: 69, image: MegaImage },
                              });
                        }}
                        className="button2"
                      >
                        {loadingMega ? (
                          <CircularProgress style={{ color: "#3d3d3d" }} />
                        ) : (
                          "use Mega elixir"
                        )}
                      </button>
                    </div>
                  </Grid>
                </Grid>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "60vh",
                    alignItems: "center",
                  }}
                >
                  <p>You're not the owner of this UPC</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
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

export default Mutate;
