import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

const factoryComp = (params) => {
  return shallowMount(About, {data: { ...params }})
}

describe('测试About.vue', () => {

  it('测试About.vue中是否渲染了message', () => {
    // 渲染组件
    const wrapper = factoryComp({ username: '', message: 'Hello World'});
    // wrapper.setData({ message: 'Hello World'})
    // 这里要在nextTick中
    wrapper.vm.$nextTick(()=>{ //再看这里
      // 确认是否渲染了 `message`
      // expect(wrapper.find('.message').text()).toEqual('Hello World')
      expect(wrapper.html()).toContain('<div class="message">Hello World</div>')
    });
  });

  it('测试About.vue中存在输入框', () => {

    // 渲染组件
    const wrapper = shallowMount(About, {
      data: { username: '', message: 'Hello World'}
    })
    expect(wrapper.contains('input')).toBe(true)
    // expect(wrapper.find('.error').exists()).toBeTruthy()
    // 更新 `username` 并断言错误信息不再被渲染
    // wrapper.setData({ username: 'Lachlan' })
    // expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
