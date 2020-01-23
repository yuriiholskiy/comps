import { shallowMount } from '@vue/test-utils';

import CModal from '@/components/modal&banner/CModal';

describe('CModal component', () => {
  const wrapper = shallowMount(CModal, {
    propsData: {
      value: true,
    },
  });

  it('should have class c-modal-backdrop', () => {
    expect(wrapper.classes()).toContain('c-modal-backdrop');
  });

  it('should have props value and equal to true', () => {
    expect(wrapper.props().value).toBe(true);
  });

  it('should render modal header', () => {
    expect(wrapper.find('.c-modal-header')).toBeTruthy();
  });

  it('should render modal header and have some text', () => {
    const expected = 'This is the default title!';
    expect(wrapper.find('.c-modal-header').text()).toBe(
      expected,
    );
  });

  it('should render modal body', () => {
    expect(wrapper.find('.c-modal-body')).toBeTruthy();
  });

  it('should render modal body and have some text', () => {
    const expected = "I'm the default body!";
    expect(wrapper.find('.c-modal-body').text()).toBe(
      expected,
    );
  });

  it('should render modal footer', () => {
    expect(wrapper.find('.c-modal-footer')).toBeTruthy();
  });

  it('should render modal footer and have some text', () => {
    const expected = "I'm the default footer!";
    expect(wrapper.find('.c-modal-footer').text()).toBe(
      expected,
    );
  });

  it('should emmited input event when clicked on modal backdrop', () => {
    wrapper.find('.c-modal-backdrop').trigger('click');
    expect(wrapper.emitted()['close-modal']).toBeTruthy();
  });
});
