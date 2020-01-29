import { shallowMount } from '@vue/test-utils';

import CForm from '@/components/forms/CForm';

describe('CForm component', () => {
  const wrapper = shallowMount(CForm);

  it('should have class c-form', () => {
    expect(wrapper.classes()).toContain('c-form');
  });

  it('should be functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });

  it('should render', () => {
    expect(wrapper.html()).toBeTruthy();
  });
});
