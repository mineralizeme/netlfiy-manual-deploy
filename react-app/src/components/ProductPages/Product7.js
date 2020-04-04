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
            <h1>Ocean Treasure Immune Booster</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img
              src={"../img/sea-salt-product-8.jpg"}
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
            <h2>Model : Ocean Treasure Immune Booster</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              Made By : <span className="text-uppercase">Max-Well</span>
            </h4>
            <h4 className="text-white">
              <strong>
                Price : <span>$</span>
                45
              </strong>
            </h4>
            <p className="font-weight-bold mt-3 mb-0">
              Some Info About Product:
            </p>
            <p align="justify">
              Ocean Treasure is a 100% vegetable dietary containing 9 edible and
              organic species of seaweed plus Ionic Sea Minerals. All the
              minerals in sea vegetation are 10-20 times the organic density of
              any known land plant. Plus, Vitamin D is synthesized naturally in
              the tissues of our sea plants, just as it is in human skin! Sea
              Vegetation is the only plant in the world that synthesizes Vitamin
              D in any appreciable amount, and the varieties in Ocean Treasure
              are particularly high in Vitamin D. This is especially important
              in the winter when your skin gets less sunlight. Sea plants can
              literally change your health. Sea vegetation has been acknowledged
              as a detoxifier, a balanced source of nutrients and many people
              believe sea vegetation works as a miraculous healing agent. Ocean
              algae is the richest natural source of minerals, trace minerals
              and rare earth minerals. Ocean Treasure feeds your cells with the
              most nutritionally potent and mineral-rich family plants on Earth.
              Sea plants are more potent than any land plant salad and contain
              hundreds of natural plant compounds known as phyto (plant)
              nutrients. The ingredients in Ocean Treasure provides hundreds of
              natural compounds which are synthetic-toxin free. Many of these
              natural compounds, though necessary, are missing from our
              processed food supply.
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
