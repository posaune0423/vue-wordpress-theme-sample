import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Counter from '@/components/Counter';
import MockStore from '@/store/index';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Testing Top Component', () => {
  let store;

  beforeEach(() => {
    store = MockStore;
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Counter, { store, localVue });
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('have initial count value', () => {
    const wrapper = shallowMount(Counter, { store, localVue });
    expect(wrapper.vm.getCount).toBe(0);
  });

  //   test('is to increase and decrease the counter', () => {
  //     const wrapper = shallowMount(Counter, { store, localVue });
  //     expect(wrapper.vm.getCount).toBe(0);

  //     const btnIncrease = wrapper.findAll('v-btn')[0];
  //     const btnDecrease = wrapper.findAll('v-btn')[1];

  //     btnIncrease.trigger('click');
  //     expect(wrapper.vm.getCount).toBe(1);

  //     btnDecrease.trigger('click');
  //     expect(wrapper.vm.getCount).toBe(0);
  //   });
});
