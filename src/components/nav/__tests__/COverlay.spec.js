import { shallowMount } from '@vue/test-utils';

import COverlay from '@/components/nav/COverlay';

describe('COverlay component', () => {
  const wrapper = shallowMount(COverlay, {
    propsData: {
      drawer: false,
    },
  });

  it('should have class c-overlay', () => {
    expect(wrapper.classes()).toContain('c-overlay');
  });

  it('should be a functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });
});
