import React, { Component } from "react";
import Title from "./Title";

export default class Video extends Component {
  render() {
    return (
      //   <div className="container">
      //     <div className="c-video">
      <React.Fragment>
        <div className="py-5">
          <div className="container row1">
            <Title name="Ocean Mineral Fertilizer" title="Testimony" />
          </div>
        </div>
        <video
          className="video"
          src="./video/Ocean_Mineral_Interview.mp4"
          controls
          controlsList="nodownload"
          style={{
            height: "50vh",
            width: "100%",
            display: "flex",
            margin: "auto",
            background: "black",
            margintop: "2px"
          }}
        ></video>

        <div className="container">
          <br /> <br />
          <h4>
            <p align="justify">
              This woman and her husband found out about ocean grown food
              through their church. After a horrible cancer diagnosis and a
              forecast of 30% chance of survival in the next year, she started
              to use the food as a way to heal after surgery. More than a decade
              later, she lives to tell her story and they still grow food using
              ocean mineral fertilizer also known as sea solids. Her husband
              claims it was the help of this food and doctors that she was able
              to beat the odds. Also joy, prayer, and laughter helped as well.
              The ocean offers many amazing benefits that has yet to be
              discovered by man.
            </p>
            <br />
            <p align="justify">
              This interview was in no way affiliated with the products
              themselves. This is an educational tool designed to spread
              awareness of all natural fertilizers that eliminate the need for
              insecticides and pesticides. Healthy plants provided all of the
              necessary trace elements and microbial life as found in the ocean
              grow resistant to disease and thus do not need the help of
              chemical pesticides and insecticides.
            </p>
            <br />
            <p align="justify">
              Healing starts with the soil. Please check out the store for more
              information on the products.
            </p>
          </h4>
        </div>
      </React.Fragment>

      //   return <VideoPlayer {...videoJsOptions} />;
    );
  }
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "./video/Ocean_Mineral_Interview.mp4",
      type: "video/mp4"
    }
  ]
};
