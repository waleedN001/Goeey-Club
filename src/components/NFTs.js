import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Snackbar, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Grid from "@mui/material/Grid";
// import placeholder from "../../assets/black.png";
// import Token from "../../assets/token.png";
// import Unclaimed from "../../assets/unclaimed.png";
import Modal from "./Modal";
import Mutants from "./Mutants";

const NFTs = (props) => {
  const [tokens, setTokens] = useState([]);
  const [tokenURIs, setTokenURIs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unclaimed, setUnclaimed] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isClaiming, setIsClaiming] = useState(false);
  let [slice, setSlice] = useState(3);
  const [modal, setModal] = useState({
    open: false,
    token: {},
  });
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
            tokens.forEach((token) => {
              props.contract.methods
                .tokenURI(token)
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
            });
          });
      }
    }

    fetch();
  }, [props.contract]);

  useEffect(() => {
    let totalBalance = 0;

    function rewards() {
      if (
        props.account &&
        props.tokensContract &&
        tokens &&
        tokens.length > 0
      ) {
        tokens.forEach((token, i) => {
          props.tokensContract.methods
            .rewardBalance(token.edition)
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

    // const slice = page * 3 - 3;
    // const slice_end = slice + 3;

    fetchAll(tokenURIs.slice(0, slice));
  };

  const claim = () => {
    setIsClaiming(true);
    const tokens_ids = tokens.map(({ edition }) => edition);

    props.tokensContract.methods
      .batchClaim(tokens_ids)
      .send({ from: props.account })
      .once("receipt", (receipt) => {
        setAlertState({
          open: true,
          message: "Successfully claimed Pastels",
          severity: "success",
        });
        setIsClaiming(false);
      })
      .catch((e) => {
        setIsClaiming(false);
      });
  };

  useEffect(() => {
    getMetadata();
  }, [tokenURIs, slice]);

  const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
      setLoadedSrc(null);
      if (props.src) {
        const handleLoad = () => {
          setLoadedSrc(props.src);
        };
        const image = new Image();
        image.addEventListener("load", handleLoad);
        image.src = props.src;
        return () => {
          image.removeEventListener("load", handleLoad);
        };
      }
    }, [props.src]);
    if (loadedSrc === props.src) {
      return <img {...props} />;
    }

    return (
      <div>
        <div className="circular-progress-token-img-container">
          <div className="circular-progress-token-img">
            <CircularProgress style={{ color: "#3d3d3d" }} />
          </div>
          {/* <img src={placeholder} className="token-img" /> */}
        </div>
      </div>
    );

    // return <CircularProgress style={{ color: "white" }} />;
  };
  const Content = () => {
    return (
      <>
        <Modal
          modal={modal}
          setModal={setModal}
          tokensContract={props.tokensContract}
          mutantsContract={props.mutantsContract}
          account={props.account}
          setAlertState={setAlertState}
        />
        <div className="collection-container">
          <div className="tokens-container">
            <Grid container>
              {tokens?.length > 0 ? (
                tokens.map((token, i) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    className="token-item-container"
                    key={i}
                    onClick={() => setModal({ open: true, token: token })}
                  >
                    <AsyncImage
                      className="token-img"
                      src={token.image?.replace(
                        "ipfs:",
                        "https://ipfs.io/ipfs"
                      )}
                      alt="token"
                    />

                    <div className="token-desc">
                      <h3>{token.name}</h3>
                    </div>
                  </Grid>
                ))
              ) : loading ? (
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
                  <CircularProgress style={{ color: "black" }} />
                  {/* <h3 className="loading">Loading...</h3> */}
                </div>
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
                  <p>Didn't find any Undead Pastel Club</p>
                </div>
              )}
            </Grid>
            {slice >= tokenURIs.length ? null : (
              // <div onClick={() => setSlice(slice + 3)}>
              //   <h3 className="loadmore">Load more</h3>
              // </div>
              <div
                className="discord-btn-container"
                style={{
                  textAlign: "center",
                  color: "black",
                  marginTop: "20px",
                }}
              >
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => setSlice(slice + 3)}
                >
                  View More
                </a>
              </div>
            )}
          </div>
          <Mutants
            loadBlockchainData={props.loadBlockchainData}
            // serumsContract={props.serumsContract}
            mutantsContract={props.mutantsContract}
            tokensContract={props.tokensContract}
            account={props.account}
            // contract={props.contract}
            // isWalletConnected={props.isWalletConnected}
            // alertState={props.alertState}
            // setAlertState={props.setAlertState}
          />
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
      {/* <Container
        className="container container-margin-top"
        style={{ minHeight: "100vh" }}
      >
        <h2 style={{ textAlign: "center" }}>Profile</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            {!props.metamask ? (
              <div
                className="connect-button border-btn"
                onClick={() =>
                  window.open(
                    "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                    "_blank"
                  )
                }
              >
                Install Metamask
              </div>
            ) : !props.isWalletConnected ? (
              <div
                className="connect-button border-btn"
                onClick={() => window.ethereum.enable()}
              >
                Connect Wallet
              </div>
            ) : (
              <Content />
            )}
          </div>
        </div>
        <Snackbar
          open={props.alertState.open}
          autoHideDuration={6000}
          onClose={() =>
            props.setAlertState({ ...props.alertState, open: false })
          }
          className="alert"
        >
          <Alert
            onClose={() =>
              props.setAlertState({ ...props.alertState, open: false })
            }
            severity={props.alertState.severity}
            className="alert"
          >
            <h3 style={{ fontSize: "15px" }}>{props.alertState.message}</h3>
          </Alert>
        </Snackbar>
      </Container> */}
    </>
  );
};

export default NFTs;
