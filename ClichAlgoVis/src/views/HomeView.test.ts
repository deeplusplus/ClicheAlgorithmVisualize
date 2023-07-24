import { describe, test, expect } from "vitest"
import HomeView from "@/views/HomeView.vue"
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'


describe("HomeView", () => {
    test("should have 100 columns", () => {

        const wrapper: VueWrapper = mount(HomeView)

        const columns : DOMWrapper<HTMLElement>[] = wrapper.findAll(".column")

        expect(columns.length).toEqual(100)
      
    })

    test("should have sorted 100 columns after clicking Merge Sort button", async() => {

        const wrapper: VueWrapper = mount(HomeView)
        const range: number[] = [...Array(100).keys()]

        const button : DOMWrapper<HTMLElement> = wrapper.find("button.merge-button")
      
        expect(button.text()).toEqual("Merge Sort")

        await button.trigger('click')

        const columns : DOMWrapper<HTMLElement>[] = wrapper.findAll(".column")

        range.forEach(num => {
            expect(columns[num].element.style.height).toEqual(`${num + 1}%`)
        })
    })

    test("should have 100 unsorted columns after clicking Reset button", async () => {
        const wrapper: VueWrapper = mount(HomeView)
        const range: number[] = [...Array(100).keys()]

        const resetButton : DOMWrapper<HTMLElement> = wrapper.find("button.reset-button")
        const mergeButton : DOMWrapper<HTMLElement> = wrapper.find("button.merge-button")
        expect(resetButton.text()).toEqual("Reset")

        await mergeButton.trigger('click')

        await resetButton.trigger('click')

        const columns : DOMWrapper<HTMLElement>[] = wrapper.findAll(".column")

        range.forEach(num => {
            expect(columns[num].element.style.height).not.toEqual(`${num + 1}%`)
        })

    })
})