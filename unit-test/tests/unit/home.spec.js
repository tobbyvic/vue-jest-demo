import { mount  } from '@vue/test-utils'
import Home from '@/views/Home.vue'

const factoryComp = (params) => {
  return mount(Home, {data: { ...params }})
}

describe('测试Home.vue', () => {

  it('测试Home.vue中刚开始不会显示', () => {
    // 渲染组件
    const wrapper = factoryComp();
    // wrapper.setData({ message: 'Hello World'})
    expect(wrapper.vm.uploadModalFlag).toBe(false);
  })

  it('测试Home.vue中点击了button后uploadModalFlag为true', () => {
    // 渲染组件
    const wrapper = factoryComp();
    // wrapper.setData({ message: 'Hello World'})
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.uploadModalFlag).toBe(true);
  })
})
