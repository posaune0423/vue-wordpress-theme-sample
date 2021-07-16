import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Top from '@/views/Top';
import MockStore from '@/store/index';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Testing Top Component', () => {
  let store;
  beforeEach(() => {
    store = MockStore;
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Top, { store, localVue });
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
