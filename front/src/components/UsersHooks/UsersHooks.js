import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import find from 'lodash/find';
import values from 'lodash/values';
import TextField from '@material-ui/core/TextField';
import UsersList from './UsersList';
import { getUsers } from '../../services/userService';

const UsersHooks = () => {
  const [filteredUsers, setFilteredUsers] = useState();

  const [users, setUsers] = useState();
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    const regex = new RegExp(filterText, 'i');
    const filteredData = filter(users, (item) =>
      find(values(item), (elem) => String(elem).match(regex))
    );
    setFilteredUsers(filteredData);
  }, [filterText]);

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  if (isEmpty(users)) {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  }

  return (
    <>
      <TextField
        id="outlined-full-width"
        label="User Filter"
        style={{ margin: 8 }}
        placeholder="Type a User name"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
        onChange={(e) => handleChange(e)}
      />
      {!isEmpty(filteredUsers) && <UsersList users={filteredUsers} />}
    </>
  );
};

export default UsersHooks;
