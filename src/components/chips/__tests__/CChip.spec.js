import { shallowMount } from '@vue/test-utils';

import CChip from '@/components/chips/CChip';

describe('CChip component', () => {
  const wrapper = shallowMount(CChip, {
    propsData: {
      theme: 'secondary',
      iconName: 'something',
      iconRight: false,
    },
  });

  it('should have class c-chip', () => {
    expect(wrapper.classes()).toContain('c-chip');
  });

  it('should have prop theme', () => {
    expect(wrapper.props().theme).toBe('secondary');
  });

  it('should have prop iconName', () => {
    expect(wrapper.props().iconName).toBe('something');
  });

  it('should have prop iconRight and set to false', () => {
    expect(wrapper.props().iconRight).toBe(false);
  });

  it('should have prop iconRight and set to true', () => {
    wrapper.setProps({ iconRight: true });
    expect(wrapper.props().iconRight).toBe(true);
  });
});
