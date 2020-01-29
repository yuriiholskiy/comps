import { shallowMount } from '@vue/test-utils';

import CCol from '@/components/grid/CCol';

describe('CCol component', () => {
  const wrapper = shallowMount(CCol);

  it('should have class c-col', () => {
    expect(wrapper.classes()).toContain('c-col');
  });

  it('should be functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });

  it('should render', () => {
    expect(wrapper.html()).toBeTruthy();
  });
});
