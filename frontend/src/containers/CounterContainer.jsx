import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Counter from '../components/Counter';

class CounterContainer extends Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.loadCount();
  }

  render() {
    const { counter, actions } = this.props;
    return (
      <Counter
        count={counter.count}
        onClick={actions.increaseCount}
        onSave={actions.saveCount}
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
