import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import bg from "../img/bg-3.png";

// function createData(title, desc) {
//   return { title, desc };
// }

const DevelopmentRoadmap = () => {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      id="roadmap"
    >
      <Container className="container">
        <div className="title-container">
          <h2
            data-aos="fade-in"
            data-aos-offset="250"
            style={{ textAlign: "center" }}
          >
            ROADMAP
          </h2>
          <p style={{ textAlign: "center" }}>
            Our goal is to make sure that the Gooey Club community
            remains strong and united for a long time. To do so, we will
            implement several strategies after the launch using the community
            fund.
          </p>
        </div>
        <TableContainer style={{ overflow: "hidden" }}>
          <Table aria-label="simple table">
            <TableBody className="table-body">
              <TableRow
                className="table-row"
                data-aos="zoom-out-up"
                data-aos-offset="250"
              >
                <TableCell scope="row" className="table-cell">
                  <h3>Phase 1</h3>
                </TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Design and create the 2,222 Gooey Club NFTs.</p>
                </TableCell>
              </TableRow>
              <TableRow
                className="table-row"
                data-aos="zoom-out-up"
                data-aos-offset="250"
              >
                <TableCell scope="row" className="table-cell"></TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p> Launch discord, website & social media accounts.</p>
                </TableCell>
              </TableRow>
              <TableRow
                className="table-row"
                data-aos="zoom-out-up"
                data-aos-offset="250"
              >
                <TableCell scope="row" className="table-cell"></TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Launch giveaways & advertising.</p>
                </TableCell>
              </TableRow>

              <TableRow className="table-row" data-aos="zoom-out-up" data-aos-offset="250">
                <TableCell scope="row" className="table-cell">
                  <h3>Phase 2</h3>
                </TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Launch Mint (1 sol per Gooey Club NFT).</p>
                </TableCell>
              </TableRow>
              <TableRow className="table-row" data-aos="zoom-out-up" data-aos-offset="250">
                <TableCell scope="row" className="table-cell"></TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>List on secondary market place.</p>
                </TableCell>
              </TableRow>
              <TableRow className="table-row" data-aos="zoom-out-up" data-aos-offset="250" >
                <TableCell scope="row" className="table-cell"></TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Rarity Ranks are released.</p>
                </TableCell>
              </TableRow>
             


              <TableRow className="table-row" data-aos="zoom-out-up" data-aos-offset="250">
                <TableCell scope="row" className="table-cell">
                  <h3>Phase 3</h3>
                </TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>50% of all trading royalties will be distributed to Gooey Club NFT holders once a month.</p>
                </TableCell>
              </TableRow>
              <TableRow className="table-row" data-aos="zoom-out-up" data-aos-offset="250">
                <TableCell scope="row" className="table-cell"></TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Acquire a place in a Metaverse decided by the community.</p>
                </TableCell>
              </TableRow>
              

              <TableRow className="table-row" data-aos="zoom-out-up" data-aos-offset="250">
                <TableCell scope="row" className="table-cell">
                  <h3>Phase 4</h3>
                </TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Staking is live. Stake Gooeys to earn $Goo for future releases.</p>
                </TableCell>
              </TableRow>
              <TableRow className="table-row" data-aos="zoom-out-up" data-aos-offset="250">
                <TableCell scope="row" className="table-cell"></TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Collaborate with the community, providing exclusive opportunities for fellow Gooeys.</p>
                </TableCell>
              </TableRow>
             
             

              <TableRow
                className="table-row"
                data-aos="zoom-out-up"
                data-aos-offset="250"
              >
                <TableCell scope="row" className="table-cell">
                  <h3>Phase 5</h3>
                </TableCell>
                <TableCell align="right" className="table-cell table-cell-desc">
                  <p>Reveal the Gen 2 Roadmap.</p>
                </TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default DevelopmentRoadmap;
