/* eslint-disable no-undef */
import { useEffect } from "react";
import Container from "@mui/material/Container";
// import Logo from "../assets/logo.gif";
import Background from "../../public/img/loader.69d186e2.png";

const Loader = () => {
  useEffect(() => {
    const tween3 = new TimelineMax();

    const loaderBackground = document.querySelectorAll(".loader");

    tween3
      .add(
        TweenMax.staggerTo(
          ".logo-letter",
          1,
          {
            opacity: 0,
            y: -40,
            delay: 1.25,
            stagger: {
              each: 0.02,
            },
            ease: Power1.easeInOut,
          },
          0.02
        )
      )
      .add(
        TweenMax.to(loaderBackground, 1, {
          y: "-100vh",
          height: 0,
          duration: 2,
          delay: 0,
        })
      );
  }, []);

  return (
    <Container
      className="container loader psychic"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <div data-aos="fade-in">
        <div>
          <img src={Logo} className="logo-loader" alt="logo" />
        </div>
        <div>
          <a className="logo-text-loader">
            <span className="logo-letter"></span>
            <span className="logo-letter"></span>
            <span className="logo-letter" style={{ marginRight: 10 }}></span>
            <span className="logo-letter"></span>
            <span className="logo-letter"></span>
            <span className="logo-letter" style={{ marginRight: 10 }}></span>
            <span className="logo-letter"></span>
            <span className="logo-letter"></span>
            <span className="logo-letter"></span>
            <span className="logo-letter"></span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Loader;

// const Loader = () => {
//   return (
//     <>
//       <div class="loader-container">
//         <div class="blobs">
//           <div class="liquid"></div>
//           <div class="blob"></div>
//           <div class="blob"></div>
//           <div class="blob"></div>
//           <div class="blob"></div>
//           <div class="blob"></div>
//           <div class="blob"></div>
//           <div class="blob"></div>
//           <div class="blob"></div>
//         </div>
//         <h1 class="loader-text">
//           Undead
//           <br />
//           Pastel Club
//         </h1>
//       </div>

//       <div class=""></div>

//       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
//         <defs>
//           <filter id="goog">
//             <feGaussianBlur
//               in="SourceGraphic"
//               stdDeviation="10"
//               result="blur"
//             />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
//               result="goo"
//             />
//             <feBlend in="SourceGraphic" in2="goo" />
//           </filter>
//           <filter id="goo">
//             <feGaussianBlur
//               in="SourceGraphic"
//               stdDeviation="10"
//               result="blur"
//             />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
//               result="goo"
//             />
//             <feBlend in="SourceGraphic" in2="goo" />
//           </filter>
//         </defs>
//       </svg>
//     </>
//   );
// };

// export default Loader;
