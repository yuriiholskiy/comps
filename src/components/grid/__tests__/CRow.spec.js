import { shallowMount } from '@vue/test-utils';

import CRow from '@/components/grid/CRow';

describe('CRow component', () => {
  const wrapper = shallowMount(CRow);

  it('should have class c-col', () => {
    expect(wrapper.classes()).toContain('c-row');
  });

  it('should be functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });

  it('should render', () => {
    expect(wrapper.html()).toBeTruthy();
  });
});
