import React, { Component } from "react";
// import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default class Details extends Component {
  render() {
    return (
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-white my-5">
            <h1>SEA 90 Ocean Mineral Fertilizer</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img
              src={"../img/sea-salt-product-4.jpg"}
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
            <h2>Model : SEA 90 Ocean Mineral Fertilizer</h2>
            <h4 className="text-title text-uppercase mt-3 mb-2">
              Made By : <span className="text-uppercase">SeaAgri, Inc</span>
            </h4>
            <h4 className="text-white">
              <strong>
                Price : <span>$</span>
                13
              </strong>
            </h4>
            <p className="font-weight-bold mt-3 mb-0">
              Some Info About Product:
            </p>
            <p align="justify">
              SEA-90 fertilizer is natural mineral crystals produced by solar
              dehydration of sea water trapped in retention ponds in a very arid
              and pristine coastal region devoid of industry or agriculture. The
              particular sea utilized by SeaAgri is considered as one of the
              most diverse in marine life and minerals on earth. The full
              spectrum minerals and trace elements contained in SEA-90 are
              exactly proportioned and balanced as in sea water to sustain
              optimum biological life. Consider that the elements in sea water
              are at essentially the same ratios as human blood, and that sea
              life living in pure and balanced ocean water seems immune to most
              cancer and other degenerative diseases.
            </p>
            {/* buttons */}
            <div>
              <Link to="/store">
                <ButtonContainer>Back to Store</ButtonContainer>
              </Link>

              <Link to="/checkout">
                <ButtonContainer>go to cart</ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
