import React from 'react';
import {message, Button} from 'antd';

const info = () => {
  message.error('This is a normal message');
};

const Test = () => {
  return (
    <Button type="primary" onClick={info}>
      Display normal message
    </Button>
  );
};

export default Test;
