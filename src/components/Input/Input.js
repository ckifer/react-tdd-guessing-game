import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Input extends Component {
  render() {
    return (
      <div>
        <button>Test</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Input);
