import React, { Component } from 'react';
import './Navigation.scss';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  state = {};

  backToPreviousPath = () => {
    this.props.history.goBack();
  };

  goToNextpath = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div className="navigation">
        <span className="navigation__left" onClick={this.backToPreviousPath}>
          &#x0003C;
        </span>
        <span className="navigation__center">&#x000B7;</span>
        <span className="navigation__right" onClick={this.goToNextpath}>
          &#x0003E;
        </span>
      </div>
    );
  }
}

export default withRouter(Navigation);
