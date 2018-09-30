import React, { Component } from 'react';
import { AnimationGroup, Animatable } from 'react-web-animation';

export default class BasicGroup extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      playState: 'running',
    };
  }

  onPlay() {
    console.log('Basic Group example: Play event');
  }

  onFinish() {
    console.log('Basic Group example: Finish event');
  }

  onCancel() {
    console.log('Basic Group example: Cancel event');
  }

  onPause() {
    console.log('Basic Group example: Pause event');
  }

  onReverse() {
    console.log('Basic Group example: Reverse event');
  }

  getKeyFrames() {
    return [
      { transform: 'scale(1)', opacity: 1, offset: 0 },
      { transform: 'scale(.5)', opacity: 0.5, offset: 0.3 },
      { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
      { transform: 'scale(.6)', opacity: 0.6, offset: 1 },
    ];
  }

  getTiming(duration) {
    return {
      duration,
      easing: 'ease-in-out',
      delay: 0,
      iterations: 2,
      direction: 'alternate',
      fill: 'forwards',
    };
  }

  render() {
    return (
      <div style={{ padding: '12px' }}>
        <label htmlFor="currentTime">Current Time: </label>
        <input
          id="currentTime"
          type="range"
          min="0"
          max="6000"
          value={this.state.currentTime}
          onChange={e => {
            this.setState({ currentTime: parseInt(e.target.value, 10) });
          }}
        />
        <div>
          <label>Player Controls: </label>
          <button
            onClick={() => {
              this.setState({ playState: 'running' });
            }}
          >
            Play ▶
          </button>
          <button
            onClick={() => {
              this.setState({ playState: 'paused' });
            }}
          >
            Pause ❚❚
          </button>
          <button
            onClick={() => {
              this.setState({ playState: 'idle' });
            }}
          >
            Stop ◼
          </button>
          <button
            onClick={() => {
              this.setState({ playState: 'reversed' });
            }}
          >
            Reverse ↺
          </button>
          <button
            onClick={() => {
              this.setState({ playState: 'finished' });
            }}
          >
            Finish ⇥
          </button>
        </div>
        <a href="https://github.com/RinconStrategies/react-web-animation/blob/master/demo/src/basic_group.js">
          View Source
        </a>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'none',
            fontWeight: 'bold',
            fontSize: '4rem',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <AnimationGroup
            onReverse={this.onReverse}
            onPlay={this.onPlay}
            onFinish={this.onFinish}
            onCancel={this.onCancel}
            onPause={this.onPause}
            playState={this.state.playState}
            currentTime={this.state.currentTime}
          >
            <Animatable.div
              id="1"
              keyframes={this.getKeyFrames()}
              timing={this.getTiming(2000)}
            >
              Web Animations API Rocks
            </Animatable.div>
            <Animatable.div
              id="2"
              keyframes={this.getKeyFrames()}
              timing={this.getTiming(4000)}
            >
              It really does!
            </Animatable.div>
          </AnimationGroup>
        </div>
      </div>
    );
  }
}
