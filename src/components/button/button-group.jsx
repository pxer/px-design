import React from 'react';
import classNames from 'classnames';

export default function ButtonGroup(props) {
  const {
    prefixCls = 'px-btn-group',
    size = '',
    className,
    ...others
  } = props;

  const sizeCls = ({
    large: 'lg',
    small: 'sm',
  })[size] || '';

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls
  }, className);

  return <div {...others} className={classes} />;
}
