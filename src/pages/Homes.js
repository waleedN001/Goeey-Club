import React from "react";
import Alert from "@material-ui/lab/Alert";
import Hero from "../components/Hero";
// import FAQ from "../components/FAQ";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import Section from "../components/Section";
import Team from "../components/Team";
import { Snackbar } from "@material-ui/core";
import $ from "jquery";

const Home = (props) => {
  $(window)
    .scroll(function () {
      // selectors
      var $window = $(window),
        $body = $("body"),
        $panel = $(".section");

      // Change 33% earlier than scroll position so colour is there when you arrive.
      var scroll = $window.scrollTop() + $window.height() / 3;

      $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          // Remove all classes on body with color-
          $panel.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          // Add class of currently active div
          $panel.addClass("color-" + $(this).data("color"));
        }
      });
    })
    .scroll();

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Hero
        startDate={props.startDate}
        metamask={props.metamask}
        isWalletConnected={props.isWalletConnected}
        mint={props.mint}
        isActive={props.isActive}
        setIsActive={props.setIsActive}
        setCount={props.setCount}
        count={props.count}
        isPaused={props.isPaused}
        isSoldOut={props.isSoldOut}
        isWhitelisted={props.isWhitelisted}
        exceedLimit={props.exceedLimit}
        // isPresale={props.isPresale}
        isPublic={props.isPublic}
        alertState={props.alertState}
        setAlertState={props.setAlertState}
        isMinting={props.isMinting}
      />
      <About />
      <Section />
      <Roadmap />
      <Team />
      {/* <FAQ /> */}

      <Snackbar
        // open={props.alertState.open}
        // autoHideDuration={6000}
        // onClose={() =>
        //   props.setAlertState({ ...props.alertState, open: false })
        // }
        // className="alert"
      >
        <Alert
          // onClose={() =>
          //   props.setAlertState({ ...props.alertState, open: false })
          // }
          // severity={props.alertState.severity}
          // className="alert"
        >
          {/* <h3 style={{ fontSize: "15px" }}>{props.alertState.message}</h3> */}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
