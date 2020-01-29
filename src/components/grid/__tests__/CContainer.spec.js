import { shallowMount } from '@vue/test-utils';

import CContainer from '@/components/grid/CContainer';

describe('CContainer component', () => {
  const wrapper = shallowMount(CContainer);

  it('should have class c-col', () => {
    expect(wrapper.classes()).toContain('c-container');
  });

  it('should be functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });

  it('should render', () => {
    expect(wrapper.html()).toBeTruthy();
  });
});
