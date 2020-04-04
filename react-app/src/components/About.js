import React, { Component } from "react";
import Title from "./Title";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto text-center my-5">
              <Title
                align="center"
                name="Lindsay's"
                title="Web Design Journey"
              />
            </div>

            <div className="row row1">
              <div className="col-10 mx-auto col-md-5 my-3 text-capitalize">
                <img
                  src={"../img/Lindsays_face.jpg"}
                  style={{
                    width: "auto",
                    height: "50vh",
                    display: "flex",
                    margin: "auto"
                  }}
                  alt="product"
                  className="img-fluid"
                  align-items="center"
                  justify-content="center"
                />
              </div>
              {/* product text */}

              <div className="col-10 mx-auto col-md-5 my-3 ">
                <div>
                  <h5>
                    <p align="justify">
                      Lindsay is a Chemical Engineer and artist all wrapped into
                      one. After news of a tragic chemical leak killing four
                      people at an insecticide plant she interned at, she
                      decided chemical engineering was not the right career
                      path. In 2018, she attended a full stack web development
                      bootcamp learning angular in the frontend and java in the
                      backend. Her interests grew as she learned more about the
                      benefits of the ocean. Ocean mineral fertilizer became a
                      passion after years of research for natural alternatives
                      to insecticides and pesticides after the tragic chemical
                      leak changed her life in 2014.
                    </p>
                    <br />
                    <p align="justify">
                      Web Design is a way for Lindsay to express herself
                      creatively and spread the word on important information.
                      It is a much more fulfilling pursuit and she hopes to use
                      her skills and knowledge to help change the world.
                    </p>
                    <br />
                    <p align="justify">
                      This e-commerce store was built using ReactJs and
                      Bootstrap with a 6 hour YouTube video as a guide. Please
                      check out the store and video for more information on
                      ocean mineral products. The store does not enable purchase
                      at this time. It is intended for educational use only.
                      Please contact Lindsay at lindsay_a@comcast.net for more
                      information. Click each product for more information as
                      well. "Learn More" leads to each product's affiliated
                      links where purchase can be made.
                    </p>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h2 className="font-weight-bold">
            <div className=" text-center col-10 mx-auto my-3  ">
              <p align="center">
                “Be the change that you wish to see in the world.”
              </p>
              <p align="center">Mahatma Gandhi</p>
            </div>
          </h2>
        </div>
      </React.Fragment>
    );
  }
}
