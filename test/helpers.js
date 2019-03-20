import {noop} from 'lodash';

export const context = {
  activeIndex: -1,
  hintText: '',
  initialItem: null,
  isOnlyResult: false,
  onActiveItemChange: noop,
  onAdd: noop,
  onInitialItemChange: noop,
  onMenuItemClick: noop,
  results: [],
  selectHintOnEnter: false,
};

// Make sure e.persist() is present in events.
const baseEvent = {
  persist: noop,
};

/**
 * Finding React Elements
 */
export function getHint(wrapper) {
  return wrapper.find('.rbt-input-hint').prop('value');
}

export function getInput(wrapper) {
  return wrapper.find('.rbt-input-main');
}

export function getMenu(wrapper) {
  return wrapper.find('.rbt-menu').hostNodes();
}

export function getMenuItems(wrapper) {
  // Rather than finding the <li> node, find the <a> so we can simulate clicks
  // if needed. This also skips over things like menu item dividers.
  return wrapper.find('a.dropdown-item');
}

export function getPaginator(wrapper) {
  return wrapper.find('.rbt-menu-pagination-option').hostNodes();
}

export function getTokens(wrapper) {
  return wrapper.find('.rbt-token');
}

/**
 * Events
 */
export function focus(wrapper) {
  getInput(wrapper).simulate('focus', baseEvent);
}

export function keyDown(wrapper, value) {
  getInput(wrapper).simulate('keyDown', {
    ...baseEvent,
    keyCode: value,
    which: value,
  });
}

export function change(wrapper, value) {
  // Calling `simulate` doesn't actually change the value, so call the
  // `onChange` prop directly: https://github.com/airbnb/enzyme/issues/1412
  getInput(wrapper).prop('onChange')({...baseEvent, target: {value}});
}

export const cssModulesFixture = {
  active: 'active___1QeAJ',
  clearfix: 'clearfix___3XuW4',
  'dropdown-item': 'dropdown-item___1vqsv',
  'dropdown-menu': 'dropdown-menu___3kr8t',
  'form-control': 'form-control___2KhJw',
  'is-invalid': 'is-invalid___35wm-',
  'is-valid': 'is-valid___28iTl',
  rbt: 'rbt___359mb',
  'rbt-highlight-text': 'rbt-highlight-text___aetTl',
  'rbt-loader': 'rbt-loader___AduT5',
  'rbt-token': 'rbt-token___3dsH5',
  show: 'show___RfU99',
};
