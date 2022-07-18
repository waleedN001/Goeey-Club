import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Button from "./Button";
import bg from "../assets/bg-4.png";

const Modal = (props) => {
  const [unclaimed, setUnclaimed] = useState();
  const [isClaiming, setIsClaiming] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (props.modal.token?.edition && props.account) {
      props.tokensContract.methods
        .rewardBalance(props.modal.token.edition)
        .call()
        .then((balance) => {
          setUnclaimed(balance);
        });
    }
  }, [props.modal.token]);

  const claim = () => {
    setIsClaiming(true);

    props.tokensContract.methods
      .claim(props.modal.token.edition)
      .send({ from: props.account })
      .once("receipt", (receipt) => {
        props.setAlertState({
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

  const mutate = () => {
    setLoading(true);

    props.mutantsContract.methods
      .mutationActive()
      .call()
      .then((isMutationActive) => {
        if (isMutationActive) {
          props.mutantsContract.methods
            .hasMutate(props.modal.token.edition)
            .call()
            .then((hasMutate) => {
              if (hasMutate === false) {
                props.mutantsContract.methods
                  .mutateApeWithElixir(
                    props.modal.elixir.id,
                    props.modal.token.edition
                  )
                  .send({ from: props.account, value: "" })
                  .then((response) => {
                    setLoading(false);

                    props.setAlertState({
                      open: true,
                      message: "Mutation complete!",
                      severity: "success",
                    });
                    props.loadBlockchainData();
                  })
                  .catch((e) => {
                    console.log(e);
                    setLoading(false);
                    props.setAlertState({
                      open: true,
                      message: "Couldn't complete mutation",
                      severity: "error",
                    });
                  });
              } else {
                setLoading(false);
                props.setAlertState({
                  open: true,
                  message: "Has already mutate",
                  severity: "error",
                });
              }
            });
        } else {
          setLoading(false);
          props.setAlertState({
            open: true,
            message: "Mutation is not active yet.",
            severity: "error",
          });
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        props.setAlertState({
          open: true,
          message: "Couldn't complete mutation",
          severity: "error",
        });
      });
    // props.mutantsContract.methods
    // .mutateApeWithElixir(props.modal.token.edition)
    // .send({ from: props.account })
    // .once("receipt", (receipt) => {
    //   props.setAlertState({
    //     open: true,
    //     message: "Successfully claimed Pastels",
    //     severity: "success",
    //   });
    //   setIsClaiming(false);
    // })
    // .catch((e) => {
    //   setIsClaiming(false);
    // });
  };

  return (
    <div>
      {props.modal.open ? (
        <div className="modal-background">
          <div
            style={{
              backgroundImage: `url(${bg})`,
              //   backgroundImage: `url(${props.modal.token.image.replace(
              //     "ipfs://",
              //     "https://ipfs.io/ipfs/"
              //   )})`,
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="close-modal" onClick={() => props.setModal(false)}>
              <span>x</span>
            </div>
            <div className="mutate-img-container" style={{ display: "flex" }}>
              <img
                className="modal-img"
                src={props.modal.token.image.replace(
                  "ipfs://",
                  "https://ipfs.io/ipfs/"
                )}
              />
              <img className="modal-img" src={props.modal.elixir.image} />
            </div>
            <h3 id="transition-modal-title" variant="h6" component="h2">
              {props.modal.token?.name}
            </h3>
            <div>
              {/* <p>
                {(unclaimed / 1000000000000000000).toFixed(2)} Unclaimed Pastels
              </p>
              {isClaiming ? (
                <div className="claiming-loading-container">
                  <CircularProgress style={{ color: "#3d3d3d" }} />
                </div>
              ) : (
                <Button text="claim" action={claim} />
              )} */}
              <div style={{ marginTop: "20px" }}>
                {isLoading ? (
                  <CircularProgress style={{ color: "#3d3d3d" }} />
                ) : (
                  <Button text="mutate" newWindow={0} action={mutate} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
