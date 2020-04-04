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
            <h1>GroPal Seamineral Fertilizer</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img
              src={"../img/sea-salt-product-66.jpg"}
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
            <h2>Model : GroPal Seamineral Fertilizer</h2>
            <h4 className="text-title text-uppercase mt-3 mb-2">
              Made By : <span className="text-uppercase">GroPal</span>
            </h4>
            <h4 className="text-white">
              <strong>
                Price : <span>$</span>
                18
              </strong>
            </h4>
            <p className="font-weight-bold mt-3 mb-0">
              Some Info About Product:
            </p>
            <p align="justify">
              GroPAL™ is a highly concentrated ocean water concentrate that goes
              through a number of natural solar concentration processes. It is
              during these processes that the sodium levels gradually reduce
              leaving an ionic solution that is both low in sodium and yet
              packed full of other minerals and trace elements. \n It is these
              bio-essential building blocks of life that are missing in many
              types of soil because they were either never there or lost long
              ago. GroPAL™ remedies this situation by infusing these essential
              nutrients back into the soil, the plant & the ecosystem. That’s
              the difference between a fair and a very good season. Minerals and
              equally important trace elements have an absolutely stunning
              effect on soil and plant health. They are required as an enzymatic
              activator, growth stimulator and a catalyst in the formation of
              all other nutrients in plants. Naturally balanced by nature
              GroPAL™ is safe, nutrient dense, OMRI Listed and a viable
              alternative to chemicals that don’t contribute to loss of soil
              nutrients. Additionally, GroPAL™ helps maintain and enhances soil
              quality over time under sensible and sustainable soil management
              programs.
            </p>
            {/* buttons */}
            <div>
              <Link to="/store">
                <ButtonContainer>Back To Store</ButtonContainer>
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
