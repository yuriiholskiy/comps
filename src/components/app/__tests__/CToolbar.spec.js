import { shallowMount } from '@vue/test-utils';
import CToolbar from '@/components/app/CToolbar';

describe('CToolbar component', () => {
  const wrapper = shallowMount(CToolbar, {
    propsData: {
      height: '70px',
      theme: 'light',
    },
  });

  it('should have class c-toolbar', () => {
    expect(wrapper.classes()).toContain('c-toolbar');
  });

  it('should have two classes', () => {
    const expected = 2;
    expect(wrapper.classes().length).toBe(expected);
  });

  it('should have props height', () => {
    expect(wrapper.props().height).toBeTruthy();
  });

  it('should have props theme', () => {
    expect(wrapper.props().theme).toBeTruthy();
  });

  it('should set prop height to 90px', () => {
    wrapper.setProps({ height: '90px' });
    expect(wrapper.props().height).toBe('90px');
  });

  it('should set prop theme to warning', () => {
    wrapper.setProps({ theme: 'warning' });
    expect(wrapper.props().theme).toBe('warning');
  });
});
