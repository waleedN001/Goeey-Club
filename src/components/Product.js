import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import placeholder from "../assets/black.png";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        let response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/products`,
        });

        setLoading(false);
        setProducts(response.data.products);
      } catch (error) {
        setLoading(false);
      }
    }

    fetch();
  }, []);

  const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
      setLoadedSrc(null);
      if (props.src) {
        const handleLoad = () => {
          setLoadedSrc(props.src);
        };
        const image = new Image();
        image.addEventListener("load", handleLoad);
        image.src = props.src;
        return () => {
          image.removeEventListener("load", handleLoad);
        };
      }
    }, [props.src]);
    if (loadedSrc === props.src) {
      return <img {...props} />;
      // return <CircularProgress style={{ color: "white" }} />
    }

    return <img src={placeholder} />;

    // return <CircularProgress style={{ color: "white" }} />;
  };
  const Content = () => {
    return (
      <>
        <div className="collection-container">
          <div className="tokens-container">
            <h3 className="collection-title">Products</h3>

            <Grid container>
              {products?.length > 0 ? (
                products.map((product, i) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    className="token-item-container"
                    key={i}
                    onClick={() =>
                      window.location.replace(`/products/${product.id}`)
                    }
                  >
                    <AsyncImage
                      className="product-img"
                      src={product.image.src}
                      alt="token"
                    />

                    <div className="product-desc">
                      <h3>{product.title}</h3>
                    </div>
                  </Grid>
                ))
              ) : loading ? (
                <div style={{ textAlign: "center", width: "100%" }}>
                  <CircularProgress style={{ color: "#3d3d3d" }} />
                </div>
              ) : (
                <div style={{ textAlign: "center", width: "100%" }}>
                  <p>Couldn't fetch products</p>
                </div>
              )}
            </Grid>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Content />
    </>
  );
};

export default Products;
