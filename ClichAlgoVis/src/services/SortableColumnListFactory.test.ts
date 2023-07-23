import { describe, test, expect } from "vitest"
import { make } from "./SortableColumnListFactory"
import type { SortableColumnStyle } from "../models/SortableColumnStyle"

describe("SortableColumnListFactory", () => {

    test("Produces a list of 100 sortable column objects", () => {

        const actualSortableColumnList: SortableColumnStyle[] = make()

        expect(actualSortableColumnList.length).toEqual(100)

        actualSortableColumnList.forEach((column: SortableColumnStyle, index: number) => {
            expect(column.numericValue).toEqual(index + 1)
            expect(column.style).toEqual(`height:${index + 1}%`)
        })
    })


})