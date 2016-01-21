import React from 'react';
import { connect } from 'react-redux';

// container element (holds active book state)
class BookDetail extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // taken from key in rootReducer
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
