import React, { Component } from "react";
// import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
import { ProductConsumer, ProductProvider } from "../../context";
import { storeProducts, detailProduct } from "../../data";
import Product from "../Product";
import PropTypes from "prop-types";

export default class Details extends Component {
  render() {
    // const { id, title, tag, img, price, inCart } = this.props.Product;
    return (
      <ProductConsumer>
        {(value) => (
          <React.Fragment>
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-black my-5">
                  <h1>Baja Gold Sea Salt</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img
                    src={"../img/sea-salt-product-1.jpg"}
                    style={{
                      // width: "10vw",
                      // height: "20vh",
                      display: "flex",
                      margin: "auto",
                    }}
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model : Baja Gold Sea Salt</h2>
                  <h4 className="text-title text-uppercase mt-3 mb-2">
                    Made By : <span className="text-uppercase">Max-Well</span>
                  </h4>
                  <h4 className="text-black">
                    <strong>
                      Price : <span>$</span>
                      10
                    </strong>
                  </h4>

                  <p className=" font-weight-bold mt-3 mb-0">
                    Some Info About Product:
                  </p>
                  <div>
                    <p align="justify">
                      Unrefined Baja Gold Kosher Sea Salt contains all minerals
                      and trace elements known to exist in seawater, small
                      amounts of magnesium and calcium halides and sulfates,
                      salt-resistant beneficial micro-organisms and sediment
                      particles. Calcium and magnesium salt compounds convey a
                      faintly sharper overtone and cause unrefined sea salt to
                      become hygroscopic (i.e. it gradually absorbs moisture
                      from the air if stored uncovered). Algal products
                      contribute a mild “sea-air” scent. Sediments provide
                      additional minerals and trace element compounds and give
                      Baja Gold an off-white or slightly beige appearance. The
                      taste and aroma of these compounds, even in minute
                      concentrations, are often detectable by humans.
                    </p>
                  </div>
                  <div>
                    <Link to="/checkout">
                      <ButtonContainer
                        className="cart-btn"
                        disabled={storeProducts[0].inCart ? true : false}
                        onClick={() => {
                          value.addToCart(storeProducts[0].id);

                          if (([0].inCart = true)) {
                            return console.log("true");
                          } else {
                            return console.log("false");
                          }
                        }}
                      >
                        {/* {[0].inCart ? "inCart" : "add to"} */}
                        Add To Cart
                      </ButtonContainer>
                    </Link>
                    {/* buttons */}

                    <Link to="/store">
                      <ButtonContainer>Back To Store</ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
//         }
//       //
//     );
//   }
// }
