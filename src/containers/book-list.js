import React from 'react';
// glue between React and Redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
// pass action through all reducers in application
import { bindActionCreators } from 'redux';

// container element (holds book list)
class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// return props to make available to container
// when application state changes, container will automatically re-render, re-assign props
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    // accessed with this.props.books in BookList container
    books: state.books
  }
}

// anything returned from this function will end up as props
// on the BookList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}
// connect uses mapStateToProps & mapDispatch to return container
// export the container (component aware of state tree)
// has dispatch method, selectBook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
