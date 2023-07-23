import type { SortableColumnStyle } from "../models/SortableColumnStyle";

export function make() : SortableColumnStyle[] {
    const iterations: number[] = [...Array(100).keys()]
    const sortableColumnList: SortableColumnStyle[] = [];

    iterations.forEach(iteration => {
        sortableColumnList.push({ style : `height:${iteration + 1}%`, numericValue: iteration + 1})
    });

    return sortableColumnList
}