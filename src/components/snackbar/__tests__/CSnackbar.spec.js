import { shallowMount } from '@vue/test-utils';

import CSnackbar from '@/components/snackbar/CSnackbar';

describe('CSnackbar component', () => {
  const wrapper = shallowMount(CSnackbar, {
    propsData: {
      value: true,
      timeout: 2000,
      axisY: 'top',
      axisX: 'center',
    },
  });

  it('should have class c-snacbar', () => {
    expect(wrapper.classes()).toContain('c-snackbar');
  });

  it('should have props value', () => {
    expect(wrapper.props().value).toBe(true);
  });

  it('should have props timeout', () => {
    expect(wrapper.props().timeout).toBe(2000);
  });

  it('should have props axisY', () => {
    expect(wrapper.props().axisY).toBe('top');
  });

  it('should have props axisX', () => {
    expect(wrapper.props().axisX).toBe('center');
  });

  it('should have set props axisY to bottom', () => {
    wrapper.setProps({ axisY: 'bottom' });
    expect(wrapper.props().axisY).toBe('bottom');
  });
  it('should have set props axisX to left', () => {
    wrapper.setProps({ axisX: 'left' });
    expect(wrapper.props().axisX).toBe('left');
  });
});
