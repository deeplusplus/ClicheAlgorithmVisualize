import { expect, test, describe } from 'vitest'
import router  from '@/router/index'

describe("index", () =>{
    test("has 1 route", () => {
        expect(router.getRoutes().length).toEqual(1)
    })
})
