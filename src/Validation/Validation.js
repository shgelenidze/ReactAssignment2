import React from 'react';

const validation = (props) => {
  return (
    <div className="validation">
      {props.textLength < 5 ? 'Text Too Short' : 'Text Long Enough' }
    </div>
  );
}

export default validation;
