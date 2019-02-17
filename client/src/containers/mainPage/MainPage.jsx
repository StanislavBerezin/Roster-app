import React, { Component } from "react";
import { connect } from "react-redux";
import Particles from "react-particles-js";
import styles from "./mainPage.module.scss";

//import ErrorCard from "../../components/errorCard/ErrorCard";

class MainPage extends Component {
  render() {
    return (
      <div className="mainSearchPage">
        <div className={styles.coloured_image}>
          <Particles />
          <div className={styles.coloured_image_text}>
            <h1>Engage with your workforce</h1>
            <h3>The worlds leading platform</h3>
          </div>
        </div>
        <h4>Construction in progress...</h4>
      </div>
    );
  }
}

export default MainPage;
