import img from "../img/red-gooey.png";
import bg from "../img/bg-3.png";
import Button from "./Button";

const Section = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      id="about"
    >
      {/* <div style={{ background: `#f9f9f9` }}> */}
      <div className="section">
        <div
          className="section-container"
          data-aos="fade-up"
          data-aos-offset="250"
        >
          <img src={img} className="psychic" alt=""/>
        </div>
        <div
          className="section-container"
          data-aos="fade-up"
          data-aos-offset="250"
        >
          <div className="section-text">
            <div className="subtitle">The project</div>
            <h2>Gooey Club NFT</h2>
            <p>The Gooey Club is a unique collection of 2,222 Gooey Club NFTs.</p>
            <p>We are launching on the Solana blockchain, aiming to grow the wealth in our community by bringing a passive income to all holders. We strive for longevity working closely with our community continuing to add value to our club.</p>
            <p>Join our club community in discord for a chance to earn a Whitelist spot and get some discount!</p>
             <Button
              text="Join Discord"
              // newWindow={1}
              // location="https://discord.com/invite/WkBaBzsBq8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
