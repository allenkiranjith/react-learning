import * as React from 'react';

export default function NumBar({ val }) {
  let styles = {
    width: '20px',
    height: `${val * 10}px`,
    'background-color': 'grey',
  };

  return (
    <React.Fragment>
      <div style={styles}> </div>
      <span>{val}</span>
    </React.Fragment>
  );
}
