import { shallowMount } from '@vue/test-utils';
import CFooter from '@/components/app/CFooter';

describe('CFooter component', () => {
  const wrapper = shallowMount(CFooter);

  it('should have class c-footer', () => {
    expect(wrapper.classes()).toContain('c-footer');
  });

  it('should be a functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });
});
