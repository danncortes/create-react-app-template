import React from 'react';
import './StatusMessage.css';

const StatusMessage = (props) => {
  const { type } = props || '';
  const { message } = props || '';
  const className = `status-message ${type || 'default'}`;

  return <div className={className}>{message}</div>;
};

export default StatusMessage;
