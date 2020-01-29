import { shallowMount } from '@vue/test-utils';

import CFormRadio from '@/components/forms/CFormRadio';

describe('CFormRadio component', () => {
  const wrapper = shallowMount(CFormRadio, {
    propsData: {
      modelChecked: false,
      value: 'radio',
      theme: 'primary',
    },
  });

  it('should renders', () => {
    expect(wrapper.html()).toBeTruthy();
  });

  it('should have class c-form-custom-radio', () => {
    expect(wrapper.classes()).toContain(
      'c-form-custom-radio',
    );
  });

  it('should find input(radio) and input class is c-form-radio', () => {
    expect(wrapper.find('input').classes()).toContain(
      'c-form-radio',
    );
  });

  it('should find label and label class is c-form-radio', () => {
    expect(wrapper.find('label').classes()).toContain(
      'c-form-radio-label',
    );
  });

  it('should have a modelChecked prop', () => {
    expect(wrapper.props().modelChecked).toBe(false);
  });

  it('should set a modelChecked prop to true', () => {
    wrapper.setProps({ modelChecked: true });
    expect(wrapper.props().modelChecked).toBe(true);
  });

  it('should have a value prop', () => {
    expect(wrapper.props().value).toBe('radio');
  });

  it('should set a modelChecked prop to "input-radio"', () => {
    wrapper.setProps({ value: 'input-radio' });
    expect(wrapper.props().value).toBe('input-radio');
  });

  it('should have a theme prop', () => {
    expect(wrapper.props().theme).toBe('primary');
  });

  it('should set a theme prop to "danger"', () => {
    wrapper.setProps({ theme: 'danger' });
    expect(wrapper.props().theme).toBe('danger');
  });

  it('should emit a change event', () => {
    wrapper.find('input').trigger('change');
    expect(wrapper.emitted().change).toBeTruthy();
  });

  it('should have a labelFor computed property', () => {
    const expected = 'label';
    expect(wrapper.vm.labelFor).toEqual(expected);
  });

  it('should have a shouldBeChecked computed property', () => {
    const expected = false;
    expect(wrapper.vm.shouldBeChecked).toEqual(expected);
  });
});
