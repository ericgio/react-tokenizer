/* eslint-disable react/prefer-stateless-function */

import cx from 'classnames';
import React from 'react';

import {getDisplayName, getInputText, getMenuItemId, mapClassNamesToCssModules} from '../utils';

function inputContainer(Input) {
  class WrappedInput extends React.Component {
    static displayName = `InputContainer(${getDisplayName(Input)})`;

    render() {
      const {
        activeIndex,
        bsSize,
        disabled,
        inputRef,
        isFocused,
        isInvalid,
        isMenuShown,
        isValid,
        labelKey,
        menuId,
        multiple,
        onBlur,
        onChange,
        onFocus,
        onKeyDown,
        onRemove,
        placeholder,
        renderToken,
        selected,
        cssModules,
      } = this.props;

      const {autoComplete, type} = this.props.inputProps;

      // Add a11y-related props.
      let inputProps = {
        ...this.props.inputProps,
        'aria-activedescendant': activeIndex >= 0 ?
          getMenuItemId(activeIndex) :
          '',
        'aria-autocomplete': multiple ? 'list' : 'both',
        'aria-expanded': isMenuShown,
        'aria-haspopup': 'listbox',
        'aria-owns': isMenuShown ? menuId : '',
        autoComplete: autoComplete || 'nope',
        cssModules,
        disabled,
        inputRef,
        onBlur,
        onChange,
        // Re-open the menu, eg: if it's closed via ESC.
        onClick: onFocus,
        onFocus,
        onKeyDown,
        placeholder: selected.length ? null : placeholder,
        // Comboboxes are single-select by definition:
        // https://www.w3.org/TR/wai-aria-practices-1.1/#combobox
        role: 'combobox',
        type: type || 'text',
        value: getInputText(this.props),
      };

      const className = inputProps.className || '';

      if (multiple) {
        inputProps = {
          ...inputProps,
          'aria-expanded': undefined,
          inputClassName: className,
          labelKey,
          onRemove,
          renderToken,
          role: undefined,
          selected,
        };
      }

      const classNames = cx('rbt-input', {
        [className]: !multiple,
        focus: isFocused,
        'input-lg form-control-lg': bsSize === 'large' || bsSize === 'lg',
        'input-sm form-control-sm': bsSize === 'small' || bsSize === 'sm',
        'is-invalid': isInvalid,
        'is-valid': isValid,
      });
      return (
        <Input
          {...inputProps}
          className={mapClassNamesToCssModules(classNames, cssModules)}
        />
      );
    }
  }

  return WrappedInput;
}

export default inputContainer;
