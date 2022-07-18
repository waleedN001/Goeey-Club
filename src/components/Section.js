import img from "../img/yellow-gooey.png";
import Button from "./Button";
import bg from "../img/bg-4.png";

const Section = () => {
  return (
    <div
      id="section"
      className="section section-reverse psychic"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div
        className="section-container"
        data-aos="fade-up"
        data-aos-offset="250"
      >
        <div className="section-text">
          <div className="subtitle">Discounts</div>
          <h2>Whitelist</h2>
          <p>
            By joining the Whitelist, you will get access to the Gooey
            Club Pre-Sale, which will be held prior to the Public Sale. This
            exclusive Pre-Sale will allow lucky Whitelisted members the chance
            to mint an Gooey Club NFT at a cheaper price.
          </p>
          <p>
            You can join the Whitelist by engaging actively in our Discord chat
            or by inviting new members to the Discord server!
          </p>
          <Button
            text="Join Discord"
            // newWindow={1}
            // location="https://discord.com/invite/WkBaBzsBq8"
          />
        </div>
      </div>
      <div
        className="section-container"
        data-aos="fade-up"
        data-aos-offset="250"
        // style={{ backgroundImage: `url(${img})` }}
      >
        <img src={img} className="fade-bottom psychic" />
      </div>
    </div>
  );
};

export default Section;
