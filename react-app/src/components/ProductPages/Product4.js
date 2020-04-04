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
            <h1>Ocean Solution Fertilizer</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img
              src={"../img/sea-salt-product-5.jpg"}
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
            <h2>Model : Ocean Solution Fertilizer</h2>
            <h4 className="text-title text-uppercase mt-3 mb-2">
              Made By :{" "}
              <span className="text-uppercase">Ocean Solution, Inc</span>
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
              OceanSolution™ PURE brings natural fertility to consumers in the
              most unadulterated form possible. This product allows growers to
              easily, cost efficiently and safely deliver vital minerals in a
              full spectrum to all plants. It is comprised of all 90 naturally
              occurring ocean minerals in full spectrum and is in liquid form
              for better absorption. We harvest these ocean minerals from a
              naturally filtered current, far off shore away from toxins,
              chemicals, land runoff and all other contaminates. No
              additives...just PURE ocean minerals, No odor, Won't Stain,
              Concentrated Liquid...easy to mix and saves you money, 100%
              Sustainable & Eco Friendly, Contains all 90 Naturally Occurring
              Minerals Elements, OMRI listed for organic use.
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
