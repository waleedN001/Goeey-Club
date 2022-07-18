import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../img/logo.gif";
import Button from "./Button";
import Background from "../img/loader.png";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const list = () => (
    <Box
      onClick={() => setMenuToggle(false)}
      onKeyDown={() => setMenuToggle(false)}
    >
      <List>
        <ListItem className="drawer-item">
          <h3>
            <a href="/#about">About</a>
          </h3>
        </ListItem>

        <ListItem className="drawer-item">
          <h3>
            <a href="/#roadmap">Roadmap</a>
          </h3>
        </ListItem>
        {/* <ListItem className="drawer-item">
          <h3>
            <a href="#faq">FAQ</a>
          </h3>
        </ListItem> */}
        <ListItem className="drawer-item">
          <h3>
            <a href="/#team">Team</a>
          </h3>
        </ListItem>
        {/* <ListItem className="drawer-item">
          <h3>
            <a onClick={() => window.location.replace("/mycollection")}>
              My Collection
            </a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a onClick={() => window.location.replace("/merch")}>Merch</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a onClick={() => window.location.replace("/lookup")}>Lookup</a>
          </h3>
        </ListItem> */}
      </List>
      <div className="drawer-social-container">
        <a
          onClick={() =>
            window.open("https://twitter.com/UndeadPastelNFT", "_blank")
          }
        >
          <i className="icon ion-social-twitter"></i>
        </a>
        <a
          onClick={() =>
            window.open("https://instagram.com/undeadpastelclub/", "_blank")
          }
        >
          <i className="icon ion-social-instagram"></i>
        </a>
        <a
          onClick={() =>
            window.open("https://discord.com/invite/WkBaBzsBq8", "_blank")
          }
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-discord"
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg>
          </div>
        </a>
      </div>
      <Divider />
    </Box>
  );

  return (
    <div className="navbar">
      <Drawer
        anchor="right"
        open={menuToggle}
        onClose={() => setMenuToggle(false)}
        PaperProps={{ className: "drawer psychic" }}
      >
        {list()}
      </Drawer>

      <div className="navbar-wrapper">
        <div className="nav-menu-container">
          <div className="logo" onClick={() => window.location.replace("/")}>
            <img src={Logo} className="logo-img" />
            <a>Gooey Club NFT</a>
          </div>
          <div className="nav-menu">
            <a className="nav-item" href="/#about">
              About
            </a>
            <a className="nav-item" href="/#roadmap">
              Roadmap
            </a>
            <a className="nav-item" href="/#team">
              Team
            </a>
            {/* <a
              className="nav-item"
              onClick={() => window.location.replace("/mycollection")}
            >
              My Collection
            </a>
            <a
              className="nav-item"
              onClick={() => window.location.replace("/merch")}
            >
              Merch
            </a>
            <a
              className="nav-item"
              onClick={() => window.location.replace("/lookup")}
            >
              Lookup
            </a> */}
          </div>
        </div>

        <div className="nav-button">
          <div className="nav-btn">
            <Button
              text="Join Discord"
            // newWindow={1}
            // location="https://discord.com/invite/WkBaBzsBq8"
            />
          </div>

          {/* <a>Join discord</a> */}

          <div className="hamburger">
            <Hamburger
              color="#3d3d3d"
              toggled={menuToggle}
              onToggle={(toggled) => setMenuToggle(!menuToggle)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


