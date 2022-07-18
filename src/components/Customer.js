import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "../components/Button";

const Customer = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({});
  // email: false,
  // address: false,
  // province: false,
  // city: false,
  // zip: false,
  // country: false,
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  useEffect(() => {
    if (props.account) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/customers/${props.account}`, {
          headers: {
            token: process.env.REACT_APP_TOKEN_API,
          },
        })
        .then(function (response) {
          // handle success
          if (response.data.customer != "not found") {
            setFirstName(response.data.customer.first_name);
            setLastName(response.data.customer.last_name);
            setEmail(response.data.customer.email);
            setPhone(response.data.customer.phone);
            setAddress(response.data.customer.default_address.address1);
            setProvince(response.data.customer.default_address.province);
            setCity(response.data.customer.default_address.city);
            setZip(response.data.customer.default_address.zip);
            setCountry(response.data.customer.default_address.country);
          }
        })
        .catch(function (error) {
          // handle error
          setAlertState({
            open: true,
            message: `Couldn't fetch profile`,
            severity: "error",
          });
        })
        .then(function () {
          // always executed
        });
    }
  }, []);

  const handleSave = async (event) => {
    event.preventDefault();

    // var re = /\S+@\S+\.\S+/;
    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   console.log("---------");
    //   console.log("setting email to true");
    //   setValidation({ ...validation, email: true });
    // } else {
    //   setValidation({ ...validation, email: false });
    // }
    let firstNameValidation = firstName ? false : true;
    let lastNameValidation = lastName ? false : true;
    let emailValidation = /\S+@\S+\.\S+/.test(email) ? false : true;
    let addressValidation = address ? false : true;
    let provinceValidation = province ? false : true;
    let cityValidation = city ? false : true;
    let zipValidation = zip ? false : true;
    let countryValidation = country ? false : true;

    // setValidation({ ...validation, address: addressValidation });
    // setValidation({ ...validation, province: provinceValidation });
    // setValidation({ ...validation, city: cityValidation });
    // setValidation({ ...validation, zip: zipValidation });
    // setValidation({ ...validation, country: countryValidation });

    setValidation({
      ...validation,
      firstName: firstNameValidation,
      lastName: lastNameValidation,
      email: emailValidation,
      country: countryValidation,
      province: provinceValidation,
      city: cityValidation,
      zip: zipValidation,
      country: countryValidation,
    });

    if (
      !firstNameValidation &&
      !lastNameValidation &&
      !emailValidation &&
      !addressValidation &&
      !provinceValidation &&
      !cityValidation &&
      !zipValidation &&
      !countryValidation
    ) {
      setLoading(true);

      try {
        let response = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_API_URL}/customers`,
          data: {
            wallet: props.account,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            verified_email: true,
            address: address,
            city: city,
            province: province,
            zip: zip,
            country: country,
          },
          headers: {
            token: process.env.REACT_APP_TOKEN_API,
          },
        });

        setAlertState({
          open: true,
          message: "Saved!",
          severity: "success",
        });
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          for (const [key, value] of Object.entries(error.response.data)) {
            setAlertState({
              open: true,
              message: `${key} ${value}`,
              severity: "error",
            });
          }
        } else {
          setAlertState({
            open: true,
            message: `Something went wrong`,
            severity: "error",
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="tab-content" data-aos="zoom-out-up">
        <div className="informations-form">
          <div className="informations-row">
            <TextField
              id="demo-helper-text-aligned"
              label="First Name"
              className="informations-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              helperText={validation.firstName ? "Required" : null}
            />
            <TextField
              id="demo-helper-text-aligned"
              label="Last Name"
              className="informations-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              helperText={validation.lastName ? "Required" : null}
            />
          </div>
          <div className="informations-row">
            <TextField
              id="demo-helper-text-aligned"
              label="Email"
              className="informations-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={validation.email ? "Incorrect entry." : null}
            />
            <TextField
              id="demo-helper-text-aligned"
              label="Phone"
              className="informations-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="informations-input-fullwidth">
            <TextField
              id="demo-helper-text-aligned"
              label="Address"
              className="informations-input"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              helperText={validation.address ? "Incorrect entry." : null}
            />
            {/* <Places
            setAddress={setAddress}
            setProvince={setProvince}
            setCity={setCity}
            setZip={setZip}
            setCountry={setCountry}
          /> */}
          </div>

          <div className="informations-row">
            <TextField
              id="demo-helper-text-aligned"
              label="City"
              className="informations-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              helperText={validation.city ? "Incorrect entry." : null}
            />
            <TextField
              id="demo-helper-text-aligned"
              label="Province"
              className="informations-input"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              helperText={validation.province ? "Incorrect entry." : null}
            />
          </div>

          <div className="informations-row">
            <TextField
              id="demo-helper-text-aligned"
              label="ZIP"
              className="informations-input"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              helperText={validation.zip ? "Incorrect entry." : null}
            />
            <TextField
              id="demo-helper-text-aligned"
              label="Country"
              className="informations-input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              helperText={validation.country ? "Incorrect entry." : null}
            />
          </div>
        </div>
        {!loading ? (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a
              style={{ color: "black", cursor: "pointer" }}
              onClick={(event) => handleSave(event)}
            >
              Save
            </a>
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              width: "fit-content",
              margin: "30px auto",
              padding: "10px 25px",
            }}
          >
            <CircularProgress style={{ color: "black" }} />
          </div>
        )}
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

export default Customer;
