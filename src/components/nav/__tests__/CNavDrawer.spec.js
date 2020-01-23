import { shallowMount } from '@vue/test-utils';

import CNavDrawer from '@/components/nav/CNavDrawer';

describe('CNavDrawer component', () => {
  const wrapper = shallowMount(CNavDrawer, {
    propsData: {
      drawer: true,
      dark: true,
      width: '250px',
      push: false,
      position: 'left',
    },
  });

  it('should have class c-nav-drawer', () => {
    expect(wrapper.classes()).toContain('c-nav-drawer');
  });

  it('should have props drawer', () => {
    expect(wrapper.props().drawer).toBe(true);
  });

  it('should have props dark', () => {
    expect(wrapper.props().dark).toBe(true);
  });

  it('should have props width', () => {
    expect(wrapper.props().width).toBe('250px');
  });

  it('should have props push', () => {
    expect(wrapper.props().push).toBe(false);
  });

  it('should have props position', () => {
    expect(wrapper.props().position).toBe('left');
  });

  it('should have set props dark to false', () => {
    wrapper.setProps({ dark: false });
    expect(wrapper.props().dark).toBe(false);
  });
  it('should have set props position to right', () => {
    wrapper.setProps({ position: 'right' });
    expect(wrapper.props().position).toBe('right');
  });
});
