import React from 'react';

const char = (props) => {
  const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid teal',
      cursor: 'pointer'
  };

  return (
    <div style={style} onClick={props.removeCharacter}>
      {props.character}
    </div>
  );
}

export default char;
