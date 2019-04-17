import { shallowMount   } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const factoryComp = (params) => {
  return shallowMount(HelloWorld, {data: { ...params }})
}

describe('测试HelloWorld.vue', () => {

  it('测试HelloWorld.vue中点击按钮的异步', () => {
    // 渲染组件
    const wrapper = factoryComp();
    // 这里直接使用测试用例会得到''空字符串
    // wrapper.find('button').trigger('click');
    // expect(wrapper.vm.myData).toBe('getData');

    // 这里用nextTick和done结合处理一下
    wrapper.find('button').trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.myData).toBe('getData')
      done()
    })
  })
})
