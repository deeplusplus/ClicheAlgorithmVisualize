import { describe, test, expect } from "vitest"
import HomeView from "@/views/HomeView.vue"
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'


describe("HomeView", () => {
    test("should have 100 columns", () => {

        const wrapper: VueWrapper = mount(HomeView)

        const columns : DOMWrapper<HTMLElement>[] = wrapper.findAll(".column")

        expect(columns.length).toEqual(100)
      
    })

    test("should have sorted 100 columns after clicking Merge Sort button", () => {

        const wrapper: VueWrapper = mount(HomeView)

        const button : DOMWrapper<HTMLElement> = wrapper.find("button")
      
        expect(button.text()).toEqual("Merge Sort")
    })
})