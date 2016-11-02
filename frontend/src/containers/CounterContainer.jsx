import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Counter from '../components/Counter';

import { updateMenu } from '../utils/electron';

class CounterContainer extends Component {

  componentDidMount() {
    const { actions } = this.props;
    // this.renderMenu()
  }

  componentDidUpdate() {
    // this.renderMenu()
  }

  renderMenu() {
    updateMenu([
      {
        label: "Counter",
        submenu: [
          {
            label: 'Increment',
            action: actions.increaseCount(),
          },
          {
            label: 'Reset',
            action: actions.resetCount(),
          },
        ]
      }
    ]);
  }

  render() {
    const { counter, actions } = this.props;
    return (
      <Counter
        count={counter.count}
        onClick={actions.increaseCount}
        //onClick={actions.increaseCountWithDelay}
      />
    );
  }
}

const mapState = (state, ownProps) => ({
  counter: state.counter,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(CounterContainer);
