import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Button from "../components/Button";
import bg from "../assets/bg-4.png";

const Modal = (props) => {
  const [unclaimed, setUnclaimed] = useState();
  const [isClaiming, setIsClaiming] = useState(false);

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
            <img
              className="modal-img"
              src={props.modal.token.image.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
              )}
            />
            <h3 id="transition-modal-title" variant="h6" component="h2">
              {props.modal.token?.name}
            </h3>
            <div>
              <p>
                {(unclaimed / 1000000000000000000).toFixed(2)} Unclaimed Pastels
              </p>
              {isClaiming ? (
                <div className="claiming-loading-container">
                  <CircularProgress style={{ color: "#3d3d3d" }} />
                </div>
              ) : (
                <Button text="claim" action={claim} />
              )}
              <div style={{ marginTop: "40px" }}>
                <Button
                  text="mutate"
                  newWindow={0}
                  location={`/mutate/${props.modal.token.edition}`}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
