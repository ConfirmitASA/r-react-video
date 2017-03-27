import React, {PropTypes, PureComponent} from 'react';

class Icon extends PureComponent {
  render() {
    const {color, size, children, icon} = this.props;
    if (!children && !icon) {
      throw new Error(`icon is not passed`)
    }
    return (
      <svg fill={color}
           height={size.toString()}
           viewBox="0 0 24 24"
           width={size.toString()}
           xmlns="http://www.w3.org/2000/svg">
        {icon ? icon : children}
      </svg>
    )
  }
}

Icon.propTypes = {
  color: PropTypes.string,
  size : PropTypes.number,
  icon : PropTypes.element
};

Icon.defaultProps = {
  color: "#cccccc",
  size : 24,
};

export default Icon
