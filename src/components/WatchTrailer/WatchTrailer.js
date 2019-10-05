import React, { Component } from 'react';
import './WatchTrailer.scss';

import Modal from 'react-modal';
import YouTube from 'react-youtube';

const playerStyle = {
  height: '500',
  width: '800',
  playerVars: {
    autoplay: -1,
  },
};

const modelStyle = {
  overlay: {
    backgroundColor: 'hsla(201, 30%, 9%, 0.91)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(8, 8, 8)',
    border: 'none',
    borderRadius: '12px',
  },
};

class WatchTrailer extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const { videoKey, languageSite } = this.props;
    return (
      <>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modelStyle}
          contentLabel="trailer"
        >
          <button className="trailer__btn--close" onClick={this.closeModal}></button>
          <YouTube videoId={videoKey} opts={playerStyle} onReady={this._onReady} />
        </Modal>
        <div className="trailer">
          <button className="trailer__btn" onClick={this.openModal}>
            {languageSite === 'pl-PL' ? 'Zobacz Trailer' : 'Watch Trailer'}
          </button>
        </div>
      </>
    );
  }
}

export default WatchTrailer;
