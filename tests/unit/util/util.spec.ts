import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';

import { fixedZero,getTimeDistance } from '@/util/util';
import moment from 'moment';

/*
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
*/

describe('fixedZero', () => {
    test('fixedZero', () => {
        expect(fixedZero(1)).toBe('01');
        expect(fixedZero(12)).toBe(12);
    });
});

describe('getTimeDistance', () => {

    test('getTimeDistance today', () => {

      Date.now = jest.fn(() => moment('2019-10-01 12:35:45').milliseconds());


      const distance = getTimeDistance('today');
      expect(distance.length).toBe(2);
        // expect(fixedZero(1)).toBe('01');
        // expect(fixedZero(12)).toBe(12);
    });
});
