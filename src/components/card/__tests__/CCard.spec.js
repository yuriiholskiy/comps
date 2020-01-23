import { shallowMount } from '@vue/test-utils';

import CCard from '@/components/card/CCard';

describe('CCard component', () => {
  const wrapper = shallowMount(CCard, {
    propsData: {
      imageSrc: 'images/cat.jpg',
      imageAlt: 'Image',
      action: false,
    },
  });

  it('should have class c-card', () => {
    expect(wrapper.classes()).toContain('c-card');
  });

  it('should be a functional component', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
  });

  it('should find image and have class', () => {
    expect(
      wrapper.find('.c-card-image').classes(),
    ).toContain('c-card-image');
  });

  it('should find image and have src', () => {
    expect(
      wrapper.find('.c-card-image').attributes().src,
    ).toBe('');
  });

  it('should find image and have alternative text', () => {
    expect(
      wrapper.find('.c-card-image').attributes().alt,
    ).toBe('Image');
  });

  it('should find title and have class', () => {
    expect(
      wrapper.find('.c-card-title').classes(),
    ).toContain('c-card-title');
  });

  it('should find description and have class', () => {
    expect(
      wrapper.find('.c-card-description').classes(),
    ).toContain('c-card-description');
  });
});
