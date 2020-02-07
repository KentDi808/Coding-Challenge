import React from 'react';
import PropTypes from 'prop-types';

import Component1 from '../components/Component1';

function MainView (props) {
  const { height, width } = props;

  return (
    <Component1
      height={ height }
      width={ width }
    ></Component1>
  );
}

MainView.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default MainView;
