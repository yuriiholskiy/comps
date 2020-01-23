import { shallowMount } from '@vue/test-utils';

import CSpinner from '@/components/progress&spinners/CSpinner';

describe('CSpinner component', () => {
  const wrapper = shallowMount(CSpinner, {
    propsData: {
      pulse: false,
      theme: 'primary',
      size: 10,
    },
  });

  it('should have class c-spinner', () => {
    expect(wrapper.classes()).toContain('c-spinner');
  });

  it('should have props pulse', () => {
    expect(wrapper.props().pulse).toBe(false);
  });

  it('should have props theme', () => {
    expect(wrapper.props().theme).toBe('primary');
  });

  it('should have props size', () => {
    expect(wrapper.props().size).toBe(10);
  });

  it('should have set props pulse to true', () => {
    wrapper.setProps({ pulse: true });
    expect(wrapper.props().pulse).toBe(true);
  });

  it('should have set props theme to danger', () => {
    wrapper.setProps({ theme: 'danger' });
    expect(wrapper.props().theme).toBe('danger');
  });

  it('should have a sizes computed property', () => {
    const expected = {
      width: '10rem',
      height: '10rem',
      borderWidth: '0.5rem',
    };
    expect(wrapper.vm.sizes).toEqual(expected);
  });
});
