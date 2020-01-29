import { shallowMount } from '@vue/test-utils';

import CListGroup from '@/components/list/CListGroup';

describe('CListGroup component', () => {
  const wrapper = shallowMount(CListGroup);

  it('should have class c-list-group', () => {
    expect(wrapper.classes()).toContain('c-list-group');
  });

  it('should be a functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });
});
