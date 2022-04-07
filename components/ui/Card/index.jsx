import React from 'react';
import classnames from 'classnames';
import styles from './card.module.css';

const Card = React.forwardRef((props, ref) => {
  const { className, content, header, subheader, footer, ...rest } = props;

  return (
    <div ref={ref} className={classnames(styles.root, className)} {...rest}>
      <h2 className={classnames(styles.header)}>{header}</h2>
      <h3>{subheader}</h3>
      {props.children}
      <p>{props.content && content}</p>
      {/* <div className={classnames(styles.content)}>{header}</div>
      <div className={classnames(styles.footer)}>{header}</div> */}
    </div>
  );
});

export default React.memo(Card);
