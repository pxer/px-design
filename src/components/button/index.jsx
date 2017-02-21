import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import '../style/index.jsx'; // style 集合
import './style/index.scss'; // button style

export default class Button extends Component {

  static defaultProps = {
    prefixCls: 'px-btn'
  }

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'danger']),
    className: PropTypes.string
  }

  render(){
    const { type, htmlType, className, prefixCls } = this.props;

    const classes = classNames(prefixCls, {
      [`${prefixCls}-${type}`]: type
    }, className);
    console.log(18, classes);

    return (
      <button
        type={htmlType || 'button'}
        className={classes}
      >
        primary
      </button>
    );
  }
}
