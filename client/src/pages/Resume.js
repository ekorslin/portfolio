import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Resume extends Component {

  render() {
    return (
      <div>
        <iframe src="resume.pdf" width="500" height="700"/>
      </div>
    );
  }
}

export default Resume;
