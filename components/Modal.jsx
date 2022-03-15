import classNames from "classnames";
import React from "react";
import styles from "../styles/modal.module.css";
import showIf from "../helpers/showIf";
import ReactDOM from "react-dom";

const Modal = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    header,
    footer,
    isOpen = false,
    onClickOutside,
    portalContainer = document.body,
    usePortal = true.valueOf,
    ...rest
  } = props;

  const handleOverlayClick = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (isOpen && onClickOutside) onClickOutside();
    },
    [isOpen, onClickOutside]
  );

  const modal = isOpen ? (
    <div ref={ref} className={styles.overlay} onClick={handleOverlayClick}>
      <div className={classNames([styles.modal, className])} {...rest}>
        {header ? <div className={styles.header}>{header}</div> : null}
        {children ? <div className={styles.content}>{children}</div> : null}

        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </div>
  ) : null;

  return usePortal ? ReactDOM.createPortal(modal, portalContainer) : modal;
});

export default React.memo(Modal);
