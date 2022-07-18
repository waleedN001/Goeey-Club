import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Homes";
import Terms from "./pages/Terms";
import MyCollection from "./pages/MyCollection";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Web3 from "web3";
// import PastelContract from "./abis/UndeadPastelClub.json";
// import TokensContractABI from "./abis/Pastels.json";
// import SerumContractABI from "./abis/UndeadElixirs.json";
// import MutantContractABI from "./abis/MutantPastelClub.json";
// import UndeadStoreABI from "./abis/UndeadStore.json";
import Lookup from "./pages/Lookup";
import Mutate from "./pages/Mutate";
import Product from "./pages/Product";
import Merch from "./pages/Merch";

const App = () => {
  const [account, setAccount] = useState(null);
  const [metamask, setMetamask] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  // const [isWhitelisted, setIsWhitelisted] = useState(null);
  const [startDate, setStartDate] = useState(new Date(1647802800 * 1000));
  const [contract, setContract] = useState(null);
  const [tokensContract, setTokensContract] = useState(null);
  const [serumsContract, setSerumsContract] = useState(null);
  const [mutantsContract, setMutantsContract] = useState(null);
  const [storeContract, setStoreContract] = useState(null);
  const [isPaused, setIsPaused] = useState(null);
  const [isSoldOut, setIsSoldOut] = useState(null);
  const [exceedLimit, setExceedLimit] = useState(null);
  // const [isPresale, setIsPresale] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [nftLimit, setnftLimit] = useState(null);
  // const [numberOfToken, setNumberOfToken] = useState(null);
  const [currentMaxSupply, setCurrentMaxSupply] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  // const [preSaleDate, setPreSaleDate] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    loadWeb3();
  }, []);

  useEffect(() => {
    if (
      mutantsContract != null &&
      mutantsContract.methods != null &&
      account != null
    ) {
      getInfos();
    }
  }, [mutantsContract]);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      //ALL GOOD
      window.web3 = new Web3(window.ethereum);
      setMetamask(true);

      // window.web3.eth.getAccounts().then(async (addr) => {
      //   // Set User account into state
      //   if (addr.length > 0) {
      //     setIsWalletConnected(true);
      //   } else {
      //     setIsWalletConnected(false);
      //   }
      // });
      loadBlockchainData();
    } else if (window.web3) {
      //display CONNECT WALLET
      window.web3 = new Web3(window.web3.currentProvider);

      setMetamask(true);
      // setIsWalletConnected(false);
      loadBlockchainData();
    } else {
      //METAMASK NOT INSTALLED
      setMetamask(false);
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    // Load account
    // const accounts = await web3.eth.getAccounts();
    // setAccount(accounts[0]);

    // const networkId = await web3.eth.net.getId();
    // const networkData = PastelContract.networks[networkId];
    // const networkDataTokens = TokensContractABI.networks[networkId];
    // const networkDataSerums = SerumContractABI.networks[networkId];
    // const networkDataMutants = MutantContractABI.networks[networkId];
    // const networkUndeadStore = UndeadStoreABI.networks[networkId];

  //   if (networkData) {
  //     const abi = PastelContract.abi;
  //     const address = networkData.address;
  //     const contract = new web3.eth.Contract(abi, address);
  //     // const contract = new web3.eth.Contract(abi, address, {
  //     //   gas: count * 125000 + 150000,
  //     // });
  //     setContract(contract);

  //     const accounts = await window.web3.eth.getAccounts();
  //     if (accounts[0] && accounts[0].length > 0) {
  //       setAccount(accounts[0]);
  //       setIsWalletConnected(true);
  //     } else {
  //       setIsWalletConnected(false);
  //     }
  //   } else {
  //     // window.alert("Smart contract not deployed to detected network.");
  //   }

  //   if (networkDataTokens) {
  //     const abiTokens = TokensContractABI.abi;
  //     const addressTokens = networkDataTokens.address;
  //     const tokensContract = new web3.eth.Contract(abiTokens, addressTokens);
  //     setTokensContract(tokensContract);
  //   }

  //   if (networkDataSerums) {
  //     const abiSerums = SerumContractABI.abi;
  //     const addressSerums = networkDataSerums.address;
  //     const serumsContract = new web3.eth.Contract(abiSerums, addressSerums);
  //     setSerumsContract(serumsContract);
  //   }

  //   if (networkDataMutants) {
  //     const abiMutants = MutantContractABI.abi;
  //     const addressMutants = networkDataMutants.address;
  //     const mutantsContract = new web3.eth.Contract(abiMutants, addressMutants);
  //     setMutantsContract(mutantsContract);
  //   }

  //   if (networkUndeadStore) {
  //     const abiStore = UndeadStoreABI.abi;
  //     const addressStore = networkUndeadStore.address;
  //     const storeContract = new web3.eth.Contract(abiStore, addressStore);

  //     setStoreContract(storeContract);
  //   }
  // };

  if (window.web3) {
    window.ethereum.on("accountsChanged", function () {
      window.web3.eth.getAccounts().then((accounts) => {
        window.location.reload();
      });
    });

    window.ethereum.on("networkChanged", function (networkId) {
      window.location.reload();
    });
  }

  const getInfos = () => {
    // mutantsContract.methods
    //   .preSaleDate()
    //   .call()
    //   .then((presaleDate) => {
    //     setPreSaleDate(new Date(presaleDate * 1000));

    mutantsContract.methods
      .publicSaleDate()
      .call()
      .then((publicSaleDate) => {
        const now = Date.now();
        // if (
        //   now > new Date(presaleDate * 1000) &&
        //   now < new Date(publicSaleDate * 1000)
        // ) {
        //   setIsPresale(true);
        //   mutantsContract.methods
        //     .nftPerAddressLimitPresale()
        //     .call()
        //     .then((limit) => {
        //       setnftLimit(parseInt(limit));
        //       mutantsContract.methods
        //         .walletOfOwner(account)
        //         .call()
        //         .then((tokens) => {
        //           setNumberOfToken(tokens.length);

        //           if (tokens.length >= limit) {
        //             setExceedLimit(true);
        //           }
        //         });
        //     });

        //   mutantsContract.methods
        //     .preSaleMaxSupply()
        //     .call()
        //     .then((maxSupply) => {
        //       setCurrentMaxSupply(parseInt(maxSupply));
        //     });
        // } else
        if (now > publicSaleDate * 1000) {
          setIsPublic(true);
          // setIsPresale(false);

          // mutantsContract.methods
          //   .nftPerAddressLimit()
          //   .call()
          //   .then((limit) => {
          //     setnftLimit(parseInt(limit));
          //     mutantsContract.methods
          //       .walletOfOwner(account)
          //       .call()
          //       .then((tokens) => {
          //         setNumberOfToken(tokens.length);

          //         if (tokens.length >= limit) {
          //           setExceedLimit(true);
          //         } else {
          //           setExceedLimit(false);
          //         }
          //       });
          //   });

          mutantsContract.methods
            .mintMaxSupply()
            .call()
            .then((maxSupply) => {
              setCurrentMaxSupply(parseInt(maxSupply));
            });
        } else {
          setnftLimit(0);
        }
      });
    // });

    mutantsContract.methods
      .paused()
      .call()
      .then((response) => {
        setIsPaused(response);
      });

    // mutantsContract.methods
    //   .isWhitelisted(account)
    //   .call()
    //   .then((response) => {
    //     setIsWhitelisted(response);
    //   });

    mutantsContract.methods
      .mintMaxSupply()
      .call()
      .then((maxSupply) => {
        // setTotalSold(totalSold);
        mutantsContract.methods
          .mintSupply()
          .call()
          .then((response) => {
            setTotalSupply(parseInt(response));
            if (parseInt(response) >= parseInt(maxSupply)) {
              // setIsSoldOut(true);
            }
          });
      });
  };

  const getCost = async () => {
    const cost_per_mint = await mutantsContract.methods.cost().call();
    return cost_per_mint;
  };

  const mintToken = async () => {
    await loadWeb3();

    mutantsContract.options.gas = count * 150000 + 130000;

    if (isPaused) {
      setAlertState({
        open: true,
        message: "The minting is on pause",
        severity: "error",
      });
    }
    // else if (isPresale == false && isPublic == false) {
    //   setAlertState({
    //     open: true,
    //     message: "Presale has not started yet",
    //     severity: "error",
    //   });
    // }
    else if (isPublic == false) {
      setAlertState({
        open: true,
        message: "Sale has not started yet",
        severity: "error",
      });
    } else if (isPublic && count > 10) {
      setAlertState({
        open: true,
        message: "Can't mint more than 10 apes per transaction",
        severity: "error",
      });
    }
    // else if (isPresale && count > 3) {
    //   setAlertState({
    //     open: true,
    //     message: "Can't mint more than 1 in presale",
    //     severity: "error",
    //   });
    // }
    // else if (isPresale && !isWhitelisted && !isPublic) {
    //   setAlertState({
    //     open: true,
    //     message: "You're not whitelisted, come back for the public sale",
    //     severity: "error",
    //   });
    // }
    else if (exceedLimit) {
      setAlertState({
        open: true,
        message: "You've reached the limit of NFT per wallet",
        severity: "error",
      });
    }
    //  else if (numberOfToken != null && numberOfToken + count > nftLimit) {
    //   setAlertState({
    //     open: true,
    //     message: "You've reached the limit of apes per wallet",
    //     severity: "error",
    //   });
    // }
    else if (isSoldOut) {
      setAlertState({
        open: true,
        message: "The collection is sold out",
        severity: "error",
      });
    } else if (totalSupply + count > currentMaxSupply) {
      let msg = "";
      if (isPublic) {
        msg = "Not enough mutants left";
      }
      // else {
      //   msg = "Presale supply sold out ";
      // }
      setAlertState({
        open: true,
        message: msg,
        severity: "error",
      });
    } else {
      setIsMinting(true);

      const cost_per_mint = await getCost();
      const cost = count * cost_per_mint;

      mutantsContract.methods
        .mint(count)
        .send({ from: account, value: cost.toString() })
        .once("receipt", (receipt) => {
          setAlertState({
            open: true,
            message: "Congrat's! Welcome in the world of Pastel",
            severity: "success",
          });
          // fireConfetti();
          getInfos();
          setIsMinting(false);
        })
        .catch((e) => {
          setIsMinting(false);
        });
    }
  };

  if (window.web3) {
    window.ethereum.on("accountsChanged", function () {
      window.web3.eth.getAccounts().then((accounts) => {
        window.location.reload();
      });
    });

    window.ethereum.on("networkChanged", function (networkId) {
      window.location.reload();
    });
  }

  return (
    <>
      <Loader />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              alertState={alertState}
              setAlertState={setAlertState}
              startDate={startDate}
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              mint={mintToken}
              isActive={isActive}
              setIsActive={setIsActive}
              setCount={setCount}
              count={count}
              isPaused={isPaused}
              isSoldOut={isSoldOut}
              // isWhitelisted={isWhitelisted}
              exceedLimit={exceedLimit}
              // isPresale={isPresale}
              isPublic={isPublic}
              isMinting={isMinting}
            />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/mycollection">
            <MyCollection
              contract={contract}
              tokensContract={tokensContract}
              serumsContract={serumsContract}
              mutantsContract={mutantsContract}
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              alertState={alertState}
              setAlertState={setAlertState}
              account={account}
              loadBlockchainData={loadBlockchainData}
            />
          </Route>
          <Route exact path="/lookup">
            <Lookup
              contract={contract}
              tokensContract={tokensContract}
              serumsContract={serumsContract}
              mutantsContract={mutantsContract}
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              alertState={alertState}
              setAlertState={setAlertState}
              account={account}
              loadBlockchainData={loadBlockchainData}
            />
          </Route>
          <Route exact path="/mutate/:tokenID">
            <Mutate
              contract={contract}
              tokensContract={tokensContract}
              serumsContract={serumsContract}
              mutantsContract={mutantsContract}
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              alertState={alertState}
              setAlertState={setAlertState}
              account={account}
              loadBlockchainData={loadBlockchainData}
            />
          </Route>
          <Route exact path="/merch/:tab">
            <Merch
              contract={contract}
              tokensContract={tokensContract}
              serumsContract={serumsContract}
              mutantsContract={mutantsContract}
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              alertState={alertState}
              setAlertState={setAlertState}
              account={account}
              loadBlockchainData={loadBlockchainData}
            />
          </Route>
          <Route exact path="/merch">
            <Merch
              contract={contract}
              tokensContract={tokensContract}
              serumsContract={serumsContract}
              mutantsContract={mutantsContract}
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              alertState={alertState}
              setAlertState={setAlertState}
              account={account}
              loadBlockchainData={loadBlockchainData}
            />
          </Route>
          <Route exact path="/products/:id">
            <Product
              storeContract={storeContract}
              tokensContract={tokensContract}
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              account={account}
            />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};}

export default App;
