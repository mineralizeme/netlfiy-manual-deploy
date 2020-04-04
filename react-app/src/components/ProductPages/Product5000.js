import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";
import Title from "../Title";

export default class Product5000 extends Component {
  render() {
    const { id, title, tag, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 ex-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                // onClick={() => value.handleDetail(id)}
              >
                <Link to={tag}>
                  <img
                    src={img}
                    style={{
                      width: "auto",
                      height: "22vh",
                      display: "flex",
                      margin: "auto",
                    }}
                    className="img-fluid center"
                    display="flex"
                    align-items="center"
                    justify-content="center"
                    alt="product"
                  />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    // value.addToCart(id);
                    // value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="Mineralize Me Products" />

                <div className="row row1">
                  <ProductConsumer>
                    {(value) => {
                      return value.products.map((product) => {
                        return (
                          <Product5000 key={product.id} product={product} />
                        );
                      });
                    }}
                  </ProductConsumer>
                </div>
              </div>
            </div>

            {/* card footer */}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">{title}</p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
              </h5>
            </div>
          </React.Fragment>
        </div>
      </ProductWrapper>
    );
  }
}

Product5000.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    background: var(--lightBlue) !important;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: var(--lightGreen);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
    width: 100%;
    height: 10vw;
    object-fit: cover;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
