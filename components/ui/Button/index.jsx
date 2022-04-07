import React from 'react';
import classnames from 'classnames';
import styles from './button.module.css';
import Link from 'next/link';

const Button = React.forwardRef((props, ref) => {
  const { className, children, link, ...rest } = props;

  return link ? (
    <Link href={link} {...rest}>
      <a ref={ref} className={classnames(styles.link, className)}>
        {children}
      </a>
    </Link>
  ) : (
    <button ref={ref} className={classnames(styles.button, className)} {...rest}>
      {children}
    </button>
  );
});

export default React.memo(Button);
