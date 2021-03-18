export const NUMBER_OF_PAGE_LINKS = 7
// max - DISCONNECTED_LENGTH is the start page index where paging
// should look like 1 ... 35 36 37 38 40
// 1 + DISCONNECTED_LENGTH is the end page index where paging
// should look like 1 2 3 4 5 ... 40
const LAYOUT_CHANGE_COUNT = 4

export type PageItem = number | 'jump-left' | 'jump-right'

export const getPages = (
  currentPage: number,
  totalPages: number
): Array<PageItem> => {
  const leftChangePage = LAYOUT_CHANGE_COUNT + 1
  const rightChangePage = totalPages - LAYOUT_CHANGE_COUNT

  // always show first page link
  const pageList: Array<PageItem> = [1]

  if (totalPages <= NUMBER_OF_PAGE_LINKS) {
    for (let i = 2; i <= totalPages; i++) {
      pageList.push(i)
    }
    return pageList
  }

  if (currentPage < leftChangePage) {
    for (let i = 2; i <= leftChangePage; i++) {
      pageList.push(i)
    }

    pageList.push('jump-right')
    pageList.push(totalPages)

    return pageList
  }

  if (currentPage >= leftChangePage && currentPage <= rightChangePage) {
    pageList.push('jump-left')
    pageList.push(currentPage - 1)
    pageList.push(currentPage)
    pageList.push(currentPage + 1)
    pageList.push('jump-right')
    pageList.push(totalPages)

    return pageList
  }

  if (currentPage > rightChangePage) {
    pageList.push('jump-left')

    for (let i = rightChangePage; i <= totalPages; i++) {
      pageList.push(i)
    }

    return pageList
  }

  // all scenarios are covered above, this is to make
  // TS happy
  return pageList
}
