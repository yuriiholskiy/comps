import { shallowMount } from '@vue/test-utils';
import CApp from '@/components/app/CApp';

describe('CApp component', () => {
  const wrapper = shallowMount(CApp);

  it('should have id app', () => {
    expect(wrapper.attributes().id).toBe('app');
  });

  it('should be a functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });

  it('should render aside element inside app', () => {
    expect(wrapper.find('.c-nav-drawer')).toBeTruthy();
  });

  it('should render navigation inside app', () => {
    expect(wrapper.find('.c-toolbar')).toBeTruthy();
  });

  it('should render toolbar inside app', () => {
    expect(wrapper.find('.c-toolbar')).toBeTruthy();
  });

  it('should render main content in container', () => {
    expect(wrapper.find('.c-container')).toBeTruthy();
  });
});
