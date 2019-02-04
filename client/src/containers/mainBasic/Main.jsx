import React, { Component } from "react";
import { connect } from "react-redux";
import {request_lyrics} from "../../redux/actions/songRequestActions";

import Intro from "../../components/intro/Intro";
import Results from "../../components/results/Results";
import Error from "../../components/error/Error";


import "./Main.css";

class Main extends Component {
  state = {
    query: ""
  };

  updateQuery = event => {
    this.setState({ query: event.target.value });
  };

  sendRequest = event => {
    event.preventDefault();
    this.props.sendRequest(this.state.query)
  };

  render() {
   
    return (
      <React.Fragment>
        <Intro/>
        <div className="basicMain">
          
          <h1>Search for your favourite song</h1>
          <div className="submssion_form">
            <form onSubmit={this.sendRequest}>
              <label>
                <input
                  type="search"
                  value={this.state.query}
                  onChange={this.updateQuery}
                />
              </label>
              <input type="submit" value="Search" />
            </form>
          </div>
          <Error isAlive={this.props.error} errorText={this.props.errorTxt} />
          <Results
            songname={this.props.title}
            isAlive={this.props.hasResponded}
            repeatedWords={this.props.repeatedWords}
          />
          
        </div>
       
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    repeatedWords: state.songRequestor.repeatedWords,
    title: state.songRequestor.title,
    hasResponded: state.songRequestor.hasResponded,
    error: state.songRequestor.error,
    errorTxt: state.songRequestor.errorTxt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendRequest: (query) => dispatch(request_lyrics(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
