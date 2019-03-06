import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import * as userActions from '../../actions/userActions';
import UserTable from './UserTable';
import StatusMessage from '../ui/StatusMessage/StatusMessage';

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class UsersRedux extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, classes } = this.props;

    let content = '';
    if (users.isLoading) {
      content = (
        <div className="loading-placeholder">
          <CircularProgress className={classes.progress} />
        </div>
      );
    } else if (users.hasError) {
      content = <StatusMessage message="Error Loading data" type="alert" />;
    } else if (!isEmpty(users.data)) {
      content = <UserTable data={users.data} />;
    } else {
      content = <StatusMessage message="No data loaded" />;
    }
    return content;
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UsersRedux));
