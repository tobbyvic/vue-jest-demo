import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'



describe('测试About.vue', () => {

  it('测试About.vue中是否渲染了message', () => {

    // 渲染组件
    const wrapper = shallowMount(About, {
      data: { username: '', message: 'Hello World'}
    })
    // wrapper.setData({ message: 'Hello World'})

    // 这里要在nextTick中
    wrapper.vm.$nextTick(()=>{ //再看这里
      // 确认是否渲染了 `message`
      expect(wrapper.find('.message').text()).toEqual('Hello World')
    });
  })

  it('测试About.vue中输入框和错误信息', () => {

    // 渲染组件
    const wrapper = shallowMount(About, {
      data: { username: '', message: 'Hello World'}
    })
    expect(wrapper.find('.error').exists()).toBeTruthy()
    // 更新 `username` 并断言错误信息不再被渲染
    wrapper.setData({ username: 'Lachlan' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
