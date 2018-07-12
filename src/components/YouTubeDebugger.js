
// Code YouTubeDebugger Component Here
import React from 'react';

<<<<<<< HEAD
export default class YouTubeDebugger extends React.Component {
=======
export default class YoutubeDebugger extends React.Component {

>>>>>>> 9d180be7768299f5751d08c675e97841caa319af
  constructor() {
    super();

    this.state = {
      errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
<<<<<<< HEAD
  }

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings, video: { resolution: '720p'}
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeRate}></button>
        <button className="resolution" onClick={this.changeResolution}></button>
      </div>
    );
  }
}
=======


    changeRate() {
      this.setState({
        bitrate: 12
      })
    }

    changeResolution() {
      this.setState({
        resolution: "720p"
      })
    }

    render() {
      return(
        <button class="bitrate" onClick={this.changeRate}>Change Bitrate</button>
        <button class ="resolution" onClick={this.changeResolution}>Change Resolution</button>
      )
    }


  }
>>>>>>> 9d180be7768299f5751d08c675e97841caa319af
