import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Mineralize Me Products" />
            <Link to="/checkout">
              <ButtonContainer>To CheckOut</ButtonContainer>
            </Link>

            <div className="row row1">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <React.Fragment>
          <div className="py-3">
            <div className="container">
              <div>
                <h5>
                  Please note: Store is not functional. It is for educational
                  use only. Please click on each item's picture and then follow
                  the "Learn More" for each product's affiliated link.
                </h5>
                <h6>
                  This e-commerce store was built using the guidance of this{" "}
                  <a
                    href="https://www.youtube.com/watch?v=wPQ1-33teR4&t=19556s"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    youtube video
                  </a>
                  . Enjoy the products!
                </h6>
                <br />
              </div>
            </div>
          </div>
        </React.Fragment>
      </React.Fragment>
      //   <Product />
    );
  }
}
