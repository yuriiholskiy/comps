import { shallowMount } from '@vue/test-utils';

import CFormGroup from '@/components/forms/CFormGroup';

describe('CFormGroup component', () => {
  const wrapper = shallowMount(CFormGroup, {
    propsData: {
      label: 'label',
      labelFor: 'labelFor',
    },
  });

  it('should have class c-form-group', () => {
    expect(wrapper.classes()).toContain('c-form-group');
  });

  it('should have a label prop', () => {
    expect(wrapper.props().label).toBe('label');
  });

  it('should have a labelFor prop', () => {
    expect(wrapper.props().labelFor).toBe('labelFor');
  });

  it('should set a label prop to "form-label"', () => {
    wrapper.setProps({ label: 'form-label' });
    expect(wrapper.props().label).toBe('form-label');
  });

  it('should set a labelFor prop to "form-labelFor"', () => {
    wrapper.setProps({ labelFor: 'form-labelFor' });
    expect(wrapper.props().labelFor).toBe('form-labelFor');
  });

  it('should render label', () => {
    expect(wrapper.find('label').text()).toBe('form-label');
  });
});
