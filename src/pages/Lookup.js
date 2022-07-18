import Input from "../components/Lookup";
import Container from "@mui/material/Container";
import bg from "../../public/img/bg-4.9d3f90cf.png"
// import bg from "../assets/bg-4.png";

const Lookup = (props) => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <Container
        className="container container-margin-top section"
        style={{ paddingTop: "125px" }}
      >
        <Input
          tokensContract={props.tokensContract}
          mutantsContract={props.mutantsContract}
        />
      </Container>
    </div>
  );
};

export default Lookup;
