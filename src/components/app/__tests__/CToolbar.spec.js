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
});
