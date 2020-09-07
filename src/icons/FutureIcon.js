import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class FutureIcon extends PureComponent {
  render() {
    const { className } = this.props;
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 17.143"
        width="25"
        height="17.143"
      >
        <path
          transform="translate(-4 -6)"
          d="M 4 23.143 l 12.143 -8.571 L 4 6 Z M 16.857 6 V 23.143 L 29 14.571 Z"
        />
      </svg>
    );
  }
}

FutureIcon.propTypes = {
  className: PropTypes.string,
};

export default FutureIcon;
