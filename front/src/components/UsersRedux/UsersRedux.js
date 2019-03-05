import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';

class UsersRedux extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    let content = '';
    if (users.isLoading) {
      content = 'Loading...';
    } else if (users.hasError) {
      content = 'Error Loading data';
    } else if (!isEmpty(users.data)) {
      content = 'Content';
    } else {
      content = 'No content';
    }
    return content;
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux);
