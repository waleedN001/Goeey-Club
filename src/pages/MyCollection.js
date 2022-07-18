import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import NFTs from "../components/NFTs";
import Staking from "../components/Staking";
import Serums from "../components/Serums";
import BuySerums from "../components/buy/Serums";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
// import bg from "../assets/bg-4.png";
import bg from "../../public/img/bg-4.9d3f90cf.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyCollection = (props) => {
  const [value, setValue] = React.useState(0);
  const { tab } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (tab == "mycollection") {
      setValue(0);
    } else if (tab == "staking") {
      setValue(1);
    } else if (tab == "elixirs") {
      setValue(2);
    }
  }, []);

  const Content = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          minHeight: "60vh",
        }}
      >
        <Container className="section" style={{ paddingTop: "125px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label="tabs">
                <Tab label="My Collection" {...a11yProps(0)} />
                <Tab label="Staking" {...a11yProps(1)} />
                <Tab label="Elixirs" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <NFTs
                tokensContract={props.tokensContract}
                metamask={props.metamask}
                isWalletConnected={props.isWalletConnected}
                alertState={props.alertState}
                setAlertState={props.setAlertState}
                account={props.account}
                contract={props.contract}
                mutantsContract={props.mutantsContract}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Staking
                loadBlockchainData={props.loadBlockchainData}
                tokensContract={props.tokensContract}
                metamask={props.metamask}
                isWalletConnected={props.isWalletConnected}
                alertState={props.alertState}
                setAlertState={props.setAlertState}
                account={props.account}
                contract={props.contract}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <BuySerums
                loadBlockchainData={props.loadBlockchainData}
                serumsContract={props.serumsContract}
                mutantsContract={props.mutantsContract}
                tokensContract={props.tokensContract}
                account={props.account}
                contract={props.contract}
                isWalletConnected={props.isWalletConnected}
                alertState={props.alertState}
                setAlertState={props.setAlertState}
              />
            </TabPanel>
          </Box>
        </Container>

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
      </div>
    );
  };

  return (
    <>
      {props.metamask && props.isWalletConnected ? (
        <Content />
      ) : (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
          <Container
            className="container container-margin-top section"
            style={{ paddingTop: "125px" }}
          >
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label="tabs">
                <Tab label="My Collection" {...a11yProps(0)} />
                <Tab label="Staking" {...a11yProps(1)} />
                <Tab label="Serums" {...a11yProps(2)} />
              </Tabs>
            </Box> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                minHeight: "60vh",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                {!props.metamask ? (
                  // <div
                  //   className="discord-btn"
                  //   onClick={() =>
                  //     window.open(
                  //       "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                  //       "_blank"
                  //     )
                  //   }
                  // >
                  //   Install Metamask
                  // </div>
                  <Button
                    text="Install Metamask"
                    newWindow={1}
                    location="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  />
                ) : !props.isWalletConnected ? (
                  <Button
                    text="Connect Wallet"
                    newWindow={0}
                    action={() => window.ethereum.enable()}
                  />
                ) : (
                  // <div
                  //   className="discord-btn"
                  //   onClick={() => window.ethereum.enable()}
                  // >
                  //   Connect Wallet
                  // </div>
                  <Content />
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default MyCollection;
