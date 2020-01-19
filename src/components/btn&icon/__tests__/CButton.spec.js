import { shallowMount } from '@vue/test-utils';

import CButton from '@/components/btn&icon/CButton';

describe('CButton component', () => {
  const wrapper = shallowMount(CButton, {
    propsData: {
      btn: true,
      theme: 'primary',
      size: 'normal',
      disabled: false,
      flat: false,
      noBorder: false,
      circle: false,
      loading: false,
    },
  });

  it('should have class c-button', () => {
    expect(wrapper.classes()).toContain('c-button');
  });

  it('should have a props btn', () => {
    expect(wrapper.props().btn).toBe(true);
  });

  it('should have a props theme', () => {
    expect(wrapper.props().theme).toBe('primary');
  });

  it('should have a props size', () => {
    expect(wrapper.props().size).toBe('normal');
  });

  it('should have a props disabled', () => {
    expect(wrapper.props().disabled).toBe(false);
  });

  it('should have a props flat', () => {
    expect(wrapper.props().flat).toBe(false);
  });

  it('should have a props noBorder', () => {
    expect(wrapper.props().noBorder).toBe(false);
  });

  it('should have a props circle', () => {
    expect(wrapper.props().circle).toBe(false);
  });

  it('should have a props loading', () => {
    expect(wrapper.props().loading).toBe(false);
  });

  it('should emmited click event', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('should have two classes(because of theme class)', () => {
    const expected = 2;
    expect(wrapper.classes().length).toBe(expected);
  });
});
