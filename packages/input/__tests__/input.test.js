import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('cq-input', () => {
    test('input-text', () => {
        const wrapper = mount(input)
        expect(wrapper.html()).toContain('type="text"')
    })
})