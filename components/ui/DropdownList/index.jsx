import React from 'react';
import classnames from 'classnames';
import styles from './dropdownList.module.css';
import DropdownChoice from '../DropdownChoice';
import safeGet from '../../../helpers/safeGet';
import showIf from '../../../helpers/showIf';

// TODO: Need to handle keyPress events such as enter/space and navigation keys

const DropdownList = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    idAccessor = 'id',
    itemComponent: ItemComponent = DropdownChoice,
    items: itemsProp,
    onChange,
    popupMaxHeight = 48 * 5,
    popupMaxWidth,
    text,
    textAccessor = 'text',
    value,
    valueAccessor = 'value',
    ...rest
  } = props;
  const [items, setItems] = React.useState(itemsProp);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const valueContainerRef = React.useRef();
  const popupRef = React.useRef();

  React.useEffect(() => {
    if (itemsProp) {
      setItems(itemsProp);
    }
    if (!itemsProp && children) {
      setItems(React.Children.toArray(children).map((child) => ({ ...child.props })));
    }
  }, [itemsProp, children]);

  const handleSelect = React.useCallback(
    (item) => {
      onChange?.(safeGet(undefined, valueAccessor, item));
      setIsPopupOpen(false);
    },
    [valueAccessor, onChange],
  );

  const safeChildren = React.useMemo(() => {
    let safeChildren;
    if (items && !children) {
      // if the list is passed via items prop, give preference to it
      safeChildren = items.map((item, index) => (
        <ItemComponent
          key={safeGet(index, idAccessor, item)}
          className={classnames(styles.item)}
          item={item}
          text={safeGet(undefined, textAccessor, item)}
          value={safeGet(undefined, valueAccessor, item)}
          onSelect={handleSelect}
          isSelected={value === safeGet(false, valueAccessor, item)}
        />
      ));
    } else {
      // if the items are not present but the list is passed via manually setting children
      safeChildren = React.Children.toArray(children).map((child, index) => {
        return React.cloneElement(child, {
          ...child.props,
          item: { ...child.props },
          key: safeGet(index, idAccessor, child.props),
          onSelect: handleSelect,
          isSelected: value === safeGet(false, valueAccessor, child.props),
        });
      });
    }
    if (safeChildren?.length === 0) {
      // We can set an empty state for safeChildren
      // TODO: RD can think of this later and provide an empty state graphic, may not be needed for now
      safeChildren = null;
    }
    return safeChildren;
  }, [items, children, handleSelect, idAccessor, textAccessor, value, valueAccessor]);

  const getPopupStyle = React.useCallback(() => {
    if (isPopupOpen) {
      const valueContainerRect = valueContainerRef.current?.getBoundingClientRect();

      const popupRect = popupRef.current?.getBoundingClientRect();
      const height = items?.length > 5 ? popupMaxHeight : items.length * 48 || popupMaxHeight;

      const top =
        valueContainerRect.bottom + height + 8 < window.innerHeight ? 2 + valueContainerRect.height : -2 - height;

      return {
        position: 'absolute',
        width: '100%',
        maxWidth: popupMaxWidth
          ? popupMaxWidth >= valueContainerRect.width
            ? popupMaxWidth
            : valueContainerRect.width
          : valueContainerRect.width,
        display: 'block',
        height: 'auto',
        right: 0,
        top: top || 0,
      };
    }
    return { display: 'none' };
  }, [isPopupOpen, items, popupMaxHeight]);

  const handleClick = React.useCallback(() => {
    setIsPopupOpen(!isPopupOpen);
  }, [isPopupOpen]);

  const handleBlur = React.useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return (
    <div ref={ref} className={classnames(styles.root, className)} onBlur={handleBlur} tabIndex="0" {...rest}>
      <div ref={valueContainerRef} onClick={handleClick} className={classnames(styles.valueContainer)}>
        <div className={classnames(styles.value)}>{text}</div>
        <div className={classnames(styles.chevronContainer)}>
          <div className={classnames(styles.chevron, { [styles.chevronUp]: isPopupOpen })}></div>
        </div>
      </div>
      <div ref={popupRef} className={classnames(styles.popup)} style={getPopupStyle()}>
        {showIf(safeChildren)(<div className={classnames(styles.listContainer)}>{safeChildren}</div>)}
      </div>
    </div>
  );
});

export default React.memo(DropdownList);
