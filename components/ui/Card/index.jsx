import React from 'react';
import classnames from 'classnames';
import styles from './card.module.css';

const Card = React.forwardRef((props, ref) => {
  const { className, content, header, footer, ...rest } = props;

  return (
    <div ref={ref} className={classnames(styles.root, className)} {...rest}>
      <div className={classnames(styles.header)}>{header}</div>
      <div className={classnames(styles.content)}>{header}</div>
      <div className={classnames(styles.footer)}>{header}</div>
    </div>
  );
});

export default React.memo(Card);
