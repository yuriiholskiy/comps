import { shallowMount } from '@vue/test-utils';

import CBanner from '@/components/modal&banner/CBanner';

describe('CBanner component', () => {
  const wrapper = shallowMount(CBanner, {
    propsData: {
      value: false,
      theme: 'primary',
      dismissible: true,
    },
  });

  it('should have class c-banner', () => {
    expect(wrapper.classes()).toContain('c-banner');
  });

  it('should have props value and equal to false', () => {
    expect(wrapper.props().value).toBe(false);
  });

  it('should have props theme', () => {
    expect(wrapper.props().theme).toBe('primary');
  });

  it('should have props dismissible', () => {
    expect(wrapper.props().dismissible).toBe(true);
  });

  it('should have set props dismissible to false', () => {
    wrapper.setProps({ dismissible: false });
    expect(wrapper.props().dismissible).toBe(false);
  });

  it('should have set props theme to success', () => {
    wrapper.setProps({ theme: 'success' });
    expect(wrapper.props().theme).toBe('success');
  });

  it('should emmited input event when closed button clicked', () => {
    wrapper.setProps({ dismissible: true });
    wrapper.find('c-button').trigger('click');
    expect(wrapper.emitted().input).toBeTruthy();
  });
});
