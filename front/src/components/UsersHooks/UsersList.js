import React from 'react';

const UsersList = (props) => {
  const { users } = props;
  const content = users.map((user) => <p key={user.name}>{user.name}</p>);
  return content;
};

export default UsersList;
