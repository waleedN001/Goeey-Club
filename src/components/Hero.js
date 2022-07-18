import React, { useEffect, useState } from "react";
import Bg from "../img/hero-bg.png";
// import Swiper from "Swiper";
// import MintButton from "../components/MintButton";
import Countdown from "react-countdown";
import Button from "./Button";

// import ear1 from "../assets/ear/1.png";
// import ear2 from "../assets/ear/2.png";
// import ear3 from "../assets/ear/3.png";
// import ear4 from "../assets/ear/4.png";

// import eyes1 from "../assets/eyes/1.png";
// import eyes2 from "../assets/eyes/2.png";
// import eyes3 from "../assets/eyes/3.png";
// import eyes4 from "../assets/eyes/4.png";

// import head1 from "../assets/head/1.png";
// import head2 from "../assets/head/2.png";
// import head3 from "../assets/head/3.png";
// import head4 from "../assets/head/4.png";

// import mouth1 from "../assets/mouth/1.png";
// import mouth2 from "../assets/mouth/2.png";
// import mouth3 from "../assets/mouth/3.png";
// import mouth4 from "../assets/mouth/4.png";

// import outfit1 from "../assets/outfit/1.png";
// import outfit2 from "../assets/outfit/2.png";
// import outfit3 from "../assets/outfit/3.png";
// import outfit4 from "../assets/outfit/4.png";

// import skin1 from "../assets/skin/1.png";
// import skin2 from "../assets/skin/2.png";
// import skin3 from "../assets/skin/3.png";
// import skin4 from "../assets/skin/4.png";

const Hero = (props) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return (
      // <div className="countdown-value" style={{ fontWeight: "bold" }}>

      // </div>

      <textPath xlinkHref="#curve" className="hero-text pshychic">
        {days} Days {hours}:{minutes}:{seconds}
      </textPath>
    );
  };
  return (
    <div className="hero" style={{ background: `url(${Bg})` }}>
      <div className="hero-text-container">
        {/* <div className="subtitle">Mutant Sale, Jan 12th, 9 PM EST</div> */}
        <svg viewBox="0 0 500 500">
          <path
            className="hero-path"
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            {/* <Countdown date={props.startDate} renderer={renderer} /> */}

            <textPath xlinkHref="#curve" className="hero-text pshychic">
              Gooey Club NFT
            </textPath>
          </text>
        </svg>
      </div>
      {/* <div className="swiper-container">
        <Swiper images={[skin1, skin2, skin3, skin4]} delay={7250} />
        <Swiper images={[outfit1, outfit2, outfit3, outfit4]} delay={7000} />
        <Swiper images={[ear1, ear2, ear3, ear4]} delay={7750} />
        <Swiper images={[eyes1, eyes2, eyes3, eyes4]} delay={8000} />
        <Swiper images={[mouth1, mouth2, mouth3, mouth4]} delay={9000} />
        <Swiper images={[head1, head2, head3, head4]} delay={6000} />
      </div> */}

      <div className="hero-btn">
        <Button
          text="Mint Now"
          // newWindow={1}
          // location="https://opensea.io/collection/undead-pastel-club"
        />
      </div>

      {/* <MintButton
        metamask={props.metamask}
        isWalletConnected={props.isWalletConnected}
        mint={props.mint}
        startDate={props.startDate}
        isActive={props.isActive}
        setActive={props.setActive}
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
      /> */}
    </div>
  );
};

export default Hero;
