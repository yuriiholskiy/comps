import { shallowMount } from '@vue/test-utils';

import CIcon from '@/components/btn&icon/CIcon';

describe('CIcon component', () => {
  const wrapper = shallowMount(CIcon, {
    propsData: {
      width: 24,
      height: 24,
      sprite: 'icons-sprite.svg',
      name: 'something',
      right: false,
      left: true,
      color: 'none',
      strokeColor: 'currentColor',
    },
  });

  it('should have class c-icon', () => {
    expect(wrapper.classes()).toContain('c-icon-wrap');
  });

  it('should have a props width', () => {
    expect(wrapper.props().width).toBe(24);
  });

  it('should have a props height', () => {
    expect(wrapper.props().height).toBe(24);
  });

  it('should have a props sprite', () => {
    expect(wrapper.props().sprite).toBe('icons-sprite.svg');
  });

  it('should have a props right', () => {
    expect(wrapper.props().right).toBe(false);
  });

  it('should have a props left', () => {
    expect(wrapper.props().left).toBe(true);
  });

  it('should have a props color', () => {
    expect(wrapper.props().color).toBe('none');
  });

  it('should have a props strokeColor', () => {
    expect(wrapper.props().strokeColor).toBe(
      'currentColor',
    );
  });
});
