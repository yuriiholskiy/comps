import { shallowMount } from '@vue/test-utils';

import CFormCheckbox from '@/components/forms/CFormCheckbox';

describe('CFormCheckbox component', () => {
  const wrapper = shallowMount(CFormCheckbox, {
    propsData: {
      modelChecked: false,
      value: 'value',
      trueValue: true,
      falseValue: false,
      theme: 'primary',
      switcher: false,
    },
  });

  it('should renders', () => {
    expect(wrapper.html()).toBeTruthy();
  });

  it('should have class c-form-custom-checkbox', () => {
    expect(wrapper.classes()).toContain(
      'c-form-custom-checkbox',
    );
  });

  it('should find input(checkbox) and input class is c-form-checkbox', () => {
    expect(wrapper.find('input').classes()).toContain(
      'c-form-checkbox',
    );
  });

  it('should find label and label class is c-form-checkbox-label', () => {
    expect(wrapper.find('label').classes()).toContain(
      'c-form-checkbox-label',
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
    expect(wrapper.props().value).toBe('value');
  });

  it('should set a value prop to "checkbox-value"', () => {
    wrapper.setProps({ value: 'checkbox-value' });
    expect(wrapper.props().value).toBe('checkbox-value');
  });

  it('should have a theme prop', () => {
    expect(wrapper.props().theme).toBe('primary');
  });

  it('should set a theme prop to "danger"', () => {
    wrapper.setProps({ theme: 'danger' });
    expect(wrapper.props().theme).toBe('danger');
  });

  it('should have a switcher prop', () => {
    expect(wrapper.props().switcher).toBe(false);
  });

  it('should set a switcher prop to true', () => {
    wrapper.setProps({ switcher: true });
    expect(wrapper.props().switcher).toBe(true);
  });

  it('should emit a change event', () => {
    wrapper.find('input').trigger('change');
    expect(
      wrapper.emitted().modelCheckedEvent,
    ).toBeTruthy();
  });

  it('should have a labelFor computed property', () => {
    const expected = 'label';
    expect(wrapper.vm.labelFor).toEqual(expected);
  });

  it('should have a shouldBeChecked computed property', () => {
    const expected = true;
    expect(wrapper.vm.shouldBeChecked).toEqual(expected);
  });
});
