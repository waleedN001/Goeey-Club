import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import img from "../img/red-gooey.png";
import img2 from "../img/yellow-gooey.png";
import img3 from "../img/perpal-gooey.png";
import img4 from "../img/red-gooey.png";
import bg from "../img/bg-5.png";

// import img from "../assets/team.png";
// import img2 from "../assets/team2.png";
// import img3 from "../assets/team3.png";
// import img4 from "../assets/team4.png";
// import bg from "../assets/bg-5.png";

export default function Team() {
  return (
    <div
      className="section psychic"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      id="team"
    >
      <Container className="conatiner" data-aos="fade-in" data-aos-offset="500">
        <h2 style={{ textAlign: "center" }}>Team</h2>
        <Grid container>
          <Grid item xs={12} md={6} lg={3} className="team-item-container">
            <img className="team-img" src={img} alt="Team" />
            <div className="team-desc">
              <h3>@Undead Gooey</h3>
              <p>Senior Programmer</p>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={3} className="team-item-container">
            <img className="team-img" src={img2} alt="Team" />
            <div className="team-desc">
              <h3>@Belle Gooey</h3>
              <p>Marketing Genius</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className="team-item-container">
            <img className="team-img" src={img3} alt="Team" />
            <div className="team-desc">
              <h3>@Captain Gooey</h3>
              <p>Chief of Communications</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className="team-item-container">
            <img className="team-img" src={img4} alt="Team" />
            <div className="team-desc">
              <h3>@Edgar Gooey</h3>
              <p>Art Director</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
