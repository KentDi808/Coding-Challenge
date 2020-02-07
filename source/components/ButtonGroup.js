import React from 'react';
import PropTypes from 'prop-types';

function ButtonGroup (props) {
  const { buttons, onClick } = props;

  function _onClick (evt) {
    const id = evt.currentTarget.id;
    if (onClick) {
      onClick(id);
    }
  }

  function renderButtons () {
    return buttons.map((btn) => {
      const { id, label, selected } = btn;
      const classNames = ['button'];
      if (selected) {
        classNames.push('selected')
      }

      return (
        <button
          className={ classNames.join(' ') }
          id={ id }
          key={ id }
          onClick={ _onClick }
        >
          { label }
        </button>
      )
    })
  }

  return (
    <div className="button-group">
      { renderButtons() }
    </div>
  )
}

ButtonGroup.propTypes = {
  buttons: PropTypes.array,
  onClick: PropTypes.func,
};

export default ButtonGroup;