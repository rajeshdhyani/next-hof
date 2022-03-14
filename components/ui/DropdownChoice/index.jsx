import React from 'react';
import classnames from 'classnames';
import styles from './dropdownChoice.module.css';

const DropdownChoice = React.forwardRef((props, ref) => {
  const { className, isSelected = false, item, onSelect, text, value, ...rest } = props;

  const handleClick = React.useCallback((e) => {
    onSelect?.(item);
  }, []);

  return (
    <div
      ref={ref}
      className={classnames(styles.root, className, { [styles.selected]: isSelected })}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </div>
  );
});

export default React.memo(DropdownChoice);
