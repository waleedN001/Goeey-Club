import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
// import bg from "../assets/bg-3.png";
import bg from "../../public/img/bg-3.a44db6ca.png";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

const Product = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isAvailable, setIsAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(null);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(null);
  const [pricePastel, setPricePastel] = useState(null);
  const [isBuying, setIsBuying] = useState(false);
  const [isBuyingPastel, setIsBuyingPastel] = useState(false);
  const [optionNumber, setOptionNumber] = useState(null);
  const [colorOptionNumber, setColorOptionNumber] = useState(null);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  console.log(product.images);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      let response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/products/${id}`,
      });

      setLoading(false);
      setProduct(response.data.product);
      response.data.product.options.forEach((o) => {
        if (o.name == "Size") {
          setOptionNumber("option" + String(o.position));
        } else if (o.name == "Color") {
          setColorOptionNumber("option" + String(o.position));
          setColor(o.values[0]);
        }
      });
    }

    // async function fetchBlockchain() {
    //   props.storeContract.methods
    //     .products(apiVariant.blockchainId)
    //     .call()
    //     .then((product) => {
    //       setPrice(product.price);
    //     })
    //     .catch((e) => {
    //       setAlertState({
    //         open: true,
    //         message: `Something went wrong`,
    //         severity: "error",
    //       });
    //     });
    // }
    fetch();
  }, []);

  useEffect(() => {
    if (
      props.account &&
      optionNumber &&
      colorOptionNumber &&
      props.storeContract
    ) {
      fetchBlockchainProduct();
    }
  }, [
    props.account,
    optionNumber,
    props.storeContract,
    size,
    colorOptionNumber,
    color,
  ]);

  // useEffect(() => {
  //   if (props.account && optionNumber && props.storeContract) {
  //     fetchBlockchainProduct();
  //   }
  // }, [size])

  const fetchProfile = async () => {
    if (props.account) {
      try {
        let response = await axios.get(
          `${process.env.REACT_APP_API_URL}/customers/${props.account}`,
          {
            headers: {
              token: process.env.REACT_APP_TOKEN_API,
            },
          }
        );
        if (response.data.customer != "not found") {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        setAlertState({
          open: true,
          message: `Couldn't fetch profile`,
          severity: "error",
        });
      }
    } else {
      return false;
    }
  };

  const fetchVariant = async (variant_id) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/variants/${variant_id}`
      );
      if (response.data.status != "not found") {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      setAlertState({
        open: true,
        message: `Something went wrong`,
        severity: "error",
      });
    }
    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/products/variants/${variant_id}`)
    //   .then(function (response) {
    //     console.log(response);
    //     // handle success
    //     if (response.data.status != "not found") {
    //       return response.data;
    //     } else {
    //       return false;
    //     }
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     setAlertState({
    //       open: true,
    //       message: `Something went wrong`,
    //       severity: "error",
    //     });
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  };
  const fetchBlockchainProduct = async () => {
    if (props.storeContract) {
      if (optionNumber && colorOptionNumber) {
        const variant = product.variants.filter((o) => {
          return o[optionNumber] === size && o[colorOptionNumber] === color;
        });

        if (variant && variant.length > 0) {
          let apiVariant = await fetchVariant(variant[0].id);

          if (apiVariant) {
            props.storeContract.methods
              .products(apiVariant.blockchainId)
              .call()
              .then((product) => {
                if (product.priceETH > 0 && product.pricePastels > 0) {
                  setPrice(product.priceETH);
                  setPricePastel(product.pricePastels);
                  setIsAvailable(true);
                } else {
                  setIsAvailable(false);
                }
              })
              .catch((e) => {
                setAlertState({
                  open: true,
                  message: `Something went wrong`,
                  severity: "error",
                });
              });
          } else {
            setIsAvailable(false);
            if (apiVariant == false) {
              setAlertState({
                open: true,
                message: `Option not available`,
                severity: "error",
              });
            } else {
              setAlertState({
                open: true,
                message: `Something went wrong`,
                severity: "error",
              });
            }
          }
        } else {
          setAlertState({
            open: true,
            message: `Option not found`,
            severity: "error",
          });
        }
      } else {
        setAlertState({
          open: true,
          message: `Option not found`,
          severity: "error",
        });
      }
    } else {
      setAlertState({
        open: true,
        message: (
          <div>
            Complete{" "}
            <span
              onClick={() => window.location.replace("/merch/myinfos")}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              profile
            </span>{" "}
            before ordering
          </div>
        ),
        severity: "error",
      });
    }
  };

  const buy = async () => {
    if (isAvailable) {
      setIsBuying(true);
      let profile = await fetchProfile();
      if (profile) {
        if (optionNumber) {
          const variant = product.variants.filter((o) => {
            return o[optionNumber] === size;
          });

          let apiVariant = await fetchVariant(variant[0].id);

          if (apiVariant) {
            props.storeContract.methods
              .products(apiVariant.blockchainId)
              .call()
              .then((product) => {
                if (
                  parseInt(product.maxSupply) >=
                  parseInt(product.supply) + count
                ) {
                  props.storeContract.methods
                    .buy(count, apiVariant.blockchainId, "")
                    .send({
                      from: props.account,
                      value: window.web3.utils.toWei(
                        String(
                          (product.priceETH * count) / 1000000000000000000
                        ),
                        "ether"
                      ),
                    })
                    .once("receipt", (receipt) => {
                      // setAlertState({
                      //   open: true,
                      //   message: "Success",
                      //   severity: "success",
                      // });
                      setIsBuying(false);
                    })
                    .catch((e) => {
                      setIsBuying(false);
                    });
                } else {
                  setIsBuying(false);
                  setAlertState({
                    open: true,
                    message: `Out of stock`,
                    severity: "error",
                  });
                }
              })
              .catch((e) => {
                console.log(e);
                setIsBuying(false);
                setAlertState({
                  open: true,
                  message: `Something went wrong`,
                  severity: "error",
                });
              });
          } else {
            setIsBuying(false);
            setAlertState({
              open: true,
              message: `Something went wrong`,
              severity: "error",
            });
          }
        } else {
          setIsBuying(false);
          setAlertState({
            open: true,
            message: `Option not found`,
            severity: "error",
          });
        }
      } else {
        setIsBuying(false);
        setAlertState({
          open: true,
          message: (
            <div>
              Complete{" "}
              <span
                onClick={() => window.location.replace("/merch/myinfos")}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                profile
              </span>{" "}
              before ordering
            </div>
          ),
          severity: "error",
        });
      }
    } else {
      setIsBuying(false);
      setAlertState({
        open: true,
        message: `Option not available`,
        severity: "error",
      });
    }
  };

  const buyPastel = async () => {
    if (isAvailable) {
      setIsBuyingPastel(true);
      let profile = await fetchProfile();
      if (profile) {
        if (optionNumber) {
          const variant = product.variants.filter((o) => {
            return o[optionNumber] === size;
          });

          let apiVariant = await fetchVariant(variant[0].id);

          if (apiVariant) {
            props.storeContract.methods
              .products(apiVariant.blockchainId)
              .call()
              .then((product) => {
                if (
                  parseInt(product.maxSupply) >=
                  parseInt(product.supply) + count
                ) {
                  props.tokensContract.methods
                    .balanceOf(props.account)
                    .call()
                    .then((balance) => {
                      if (product.pricePastels * count <= balance) {
                        props.storeContract.methods
                          .buyWithPastels(
                            count,
                            apiVariant.blockchainId,
                            window.web3.utils.toWei(
                              String(
                                (product.pricePastels * count) /
                                  1000000000000000000
                              ),
                              "ether"
                            ),
                            ""
                          )
                          .send({ from: props.account })
                          .once("receipt", (receipt) => {
                            // setAlertState({
                            //   open: true,
                            //   message: "Success",
                            //   severity: "success",
                            // });
                            setIsBuyingPastel(false);
                          })
                          .catch((e) => {
                            setIsBuyingPastel(false);
                          });
                      } else {
                        setIsBuyingPastel(false);
                        setAlertState({
                          open: true,
                          message: `Not enough $PSTL`,
                          severity: "error",
                        });
                      }
                    });
                } else {
                  setIsBuyingPastel(false);
                  setAlertState({
                    open: true,
                    message: `Out of stock`,
                    severity: "error",
                  });
                }
              })
              .catch((e) => {
                setIsBuyingPastel(false);
                setAlertState({
                  open: true,
                  message: `Something went wrong`,
                  severity: "error",
                });
              });
          } else {
            setIsBuyingPastel(false);
            setAlertState({
              open: true,
              message: `Something went wrong`,
              severity: "error",
            });
          }
        } else {
          setIsBuyingPastel(false);
          setAlertState({
            open: true,
            message: `Option not found`,
            severity: "error",
          });
        }
      } else {
        setIsBuyingPastel(false);
        setAlertState({
          open: true,
          message: (
            <div>
              Complete{" "}
              <span
                onClick={() => window.location.replace("/merch/myinfos")}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                profile
              </span>{" "}
              before ordering
            </div>
          ),
          severity: "error",
        });
      }
    } else {
      setIsBuyingPastel(false);
      setAlertState({
        open: true,
        message: `Option not available`,
        severity: "error",
      });
    }
  };

  const buyButtons = () => {
    return (
      <div>
        <div
          className="product-btn-container"
          style={{
            color: "black",
            marginTop: "40px",
          }}
        >
          <a className="product-button" onClick={() => buy()}>
            {isBuying ? (
              <CircularProgress style={{ color: "#3d3d3d" }} />
            ) : isAvailable ? (
              `Buy • ${(count * price) / 1000000000000000000} ETH`
            ) : (
              "Option not available"
            )}
          </a>
        </div>

        <div
          className="product-btn-container"
          style={{
            color: "black",
            marginTop: "15px",
          }}
        >
          <a
            className="product-button"
            style={{
              marginTop: "0px",
            }}
            onClick={() => buyPastel()}
          >
            {isBuyingPastel ? (
              <CircularProgress style={{ color: "#3d3d3d" }} />
            ) : isAvailable ? (
              `Buy • ${(count * pricePastel) / 1000000000000000000} $PSTL`
            ) : (
              "Option not available"
            )}
          </a>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        padding: "100px 0px",
      }}
    >
      <Container className="container" style={{ marginTop: "40px" }}>
        {product.id ? (
          <div>
            <div className="breadcrumb-container">
              <span
                className="product-breadcrumb"
                onClick={() => window.location.replace("/merch")}
              >
                Products
              </span>
              <span className="product-breadcrumb">›</span>
              <span className="product-breadcrumb">{product.title}</span>
            </div>
            <div className="product-details-container">
              <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                allowTouchMove={false}
                simulateTouch={false}
                speed={1500}
                navigation={true}
                modules={[Navigation]}
                className="product-details-swiper"
              >
                {product.images.map((img, i) => (
                  <SwiperSlide>
                    <img
                      key={i}
                      src={img.src}
                      className="product-details-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <img className="product-details-img" src={product.image.src} /> */}
              <div className="product-details-infos-container">
                <h3>{product.title}</h3>
                {product.options.map((o) => {
                  if (o.name == "Size") {
                    return (
                      <div style={{ marginTop: "20px" }}>
                        <p className="product-option">{o.name}</p>
                        <div>
                          {o.values.map((v) => {
                            return (
                              <a
                                className={
                                  size == v
                                    ? "product-option-value product-option-value-active"
                                    : "product-option-value"
                                }
                                onClick={() => setSize(v)}
                              >
                                {v}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  } else if (o.name == "Color") {
                    return (
                      <div style={{ marginTop: "20px" }}>
                        <p className="product-option">{o.name}</p>
                        <div>
                          {o.values.map((v) => {
                            return (
                              <a
                                className={
                                  color == v
                                    ? "product-option-value product-option-value-active"
                                    : "product-option-value"
                                }
                                onClick={() => setColor(v)}
                              >
                                {v}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}
                <div className="incr-decr-product-detail">
                  <Button
                    onClick={() => (count - 1 > 0 ? setCount(count - 1) : null)}
                    style={{ justifyContent: "center" }}
                  >
                    <RemoveIcon />
                  </Button>
                  <h3>{count}</h3>
                  <Button
                    onClick={() =>
                      count + 1 <= 10 ? setCount(count + 1) : null
                    }
                    style={{ justifyContent: "center" }}
                  >
                    <AddIcon />
                  </Button>
                </div>
                {props.metamask && props.isWalletConnected ? (
                  buyButtons()
                ) : !props.metamask ? (
                  <div
                    className="product-button product-btn-container"
                    style={{ marginTop: "40px" }}
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
                    className="product-button product-btn-container"
                    style={{ marginTop: "40px" }}
                    onClick={() => window.ethereum.enable()}
                  >
                    Connect Wallet
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <CircularProgress style={{ color: "#3d3d3d" }} />
        )}
      </Container>
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
    </div>
  );
};

export default Product;
