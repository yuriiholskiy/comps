import { shallowMount } from '@vue/test-utils';

import CProgress from '@/components/progress&spinners/CProgress';

describe('CProgress component', () => {
  const wrapper = shallowMount(CProgress, {
    propsData: {
      value: 10,
      max: 100,
      theme: 'primary',
      dismiss: true,
    },
  });

  it('should have class c-progress', () => {
    expect(wrapper.classes()).toContain('c-progress');
  });

  it('should have props value and equal 10', () => {
    expect(wrapper.props().value).toBe(10);
  });

  it('should have props max', () => {
    expect(wrapper.props().max).toBe(100);
  });

  it('should have props theme', () => {
    expect(wrapper.props().theme).toBe('primary');
  });

  it('should have props dismiss', () => {
    expect(wrapper.props().dismiss).toBe(true);
  });

  it('should have set props theme to danger', () => {
    wrapper.setProps({ theme: 'danger' });
    expect(wrapper.props().theme).toBe('danger');
  });
  it('should have set props dismiss to false', () => {
    wrapper.setProps({ dismiss: false });
    expect(wrapper.props().dismiss).toBe(false);
  });

  it('should have a progressWidth computed property', () => {
    const expected = { width: '10%' };
    expect(wrapper.vm.progressWidth).toEqual(expected);
  });
});
