import { shallowMount } from '@vue/test-utils';

import CFormInput from '@/components/forms/CFormInput';

describe('CFormInput component', () => {
  const wrapper = shallowMount(CFormInput, {
    propsData: {
      value: 'input',
    },
  });

  it('should renders', () => {
    expect(wrapper.html()).toBeTruthy();
  });

  it('should have class c-form-input', () => {
    expect(wrapper.classes()).toContain('c-form-input');
  });

  it('should have a value prop', () => {
    expect(wrapper.props().value).toBe('input');
  });

  it('should set a value prop to "input-value"', () => {
    wrapper.setProps({ value: 'input-value' });
    expect(wrapper.props().value).toBe('input-value');
  });

  it('should emit a input event', () => {
    wrapper.trigger('input');
    expect(wrapper.emitted().input).toBeTruthy();
  });
});
