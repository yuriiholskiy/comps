import { shallowMount } from '@vue/test-utils';

import CListItem from '@/components/list/CListItem';

describe('CListItem component', () => {
  const wrapper = shallowMount(CListItem, {
    propsData: {
      active: false,
      theme: 'primary',
      disabled: false,
      flex: true,
    },
  });

  it('should have class c-list-item', () => {
    expect(wrapper.classes()).toContain('c-list-item');
  });

  it('should have prop active', () => {
    expect(wrapper.props().active).toBe(false);
  });

  it('should have prop theme', () => {
    expect(wrapper.props().theme).toBe('primary');
  });

  it('should have prop disabled', () => {
    expect(wrapper.props().disabled).toBe(false);
  });

  it('should have prop flex', () => {
    expect(wrapper.props().flex).toBe(true);
  });

  it('should set prop active to true', () => {
    wrapper.setProps({ active: true });
    expect(wrapper.props().active).toBe(true);
  });

  it('should set prop theme to success', () => {
    wrapper.setProps({ theme: 'success' });
    expect(wrapper.props().theme).toBe('success');
  });
});
