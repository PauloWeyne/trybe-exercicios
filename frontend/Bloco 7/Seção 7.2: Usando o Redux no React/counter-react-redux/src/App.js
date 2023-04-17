import { connect } from 'react-redux';
import React from 'react';
import actionCreator from './redux/actions';
import "./App.css";

class App extends React.Component {
  render() {
    const { dispatch, countState } = this.props;
    return (
      <main id="container">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatch(actionCreator())}>Aumenta 1</button>
        <button onClick={() => dispatch(actionCreator(2))}>Aumenta 2</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
