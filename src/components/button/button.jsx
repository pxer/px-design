import React, { Component, PropTypes, Children } from 'react';
import classNames from 'classnames';
import '../style/index.jsx'; // style 集合
import './style/index.scss'; // button style

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
                              child.props.children.split('').join(' '));
  }
  if (isString(child)) {
    return <span>{child}</span>;
  }
  return child;
}

export default class Button extends Component {

  static defaultProps = {
    prefixCls: 'px-btn'
  }

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'danger', 'success', 'warning']),
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small']),
    shape: PropTypes.oneOf(['circle', 'circle-outline'])
  }

  render(){
    const {
      type, shape, size = '', htmlType, className, prefixCls, children, ...others
    } = this.props;

    const sizeCls = ({
      large: 'lg',
      small: 'sm'
    })[size] || '';

    const classes = classNames(prefixCls, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls
    }, className);

    const kids = Children.map(children, insertSpace);

    return (
      <button
        {...others}
        type={htmlType || 'button'}
        className={classes}
      >
        {kids}
      </button>
    );
  }
}
