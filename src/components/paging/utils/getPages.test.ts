import { getPages, PageItem } from './getPages'

describe('getPages', () => {
  it.each([
    [1, [1]],
    [7, [1, 2, 3, 4, 5, 6, 7]]
  ])(
    'should return every page if total number is less than 8 (%s)',
    (totalPages, expectedResult) => {
      const currentPage = 1

      const result = getPages(currentPage, totalPages)

      expect(result).toEqual(expectedResult)
    }
  )

  it('should return left jump link if the number of pages is greater than 7 ', () => {
    const currentPage = 1
    const totalPages = 8
    const expectedResult: Array<PageItem> = [1, 2, 3, 4, 5, 'jump-right', 8]

    const result = getPages(currentPage, totalPages)

    expect(result).toEqual(expectedResult)
  })

  it('should return right jump link if the number of pages is greater than 7 and current page is more than 4', () => {
    const currentPage = 5
    const totalPages = 8
    const expectedResult: Array<PageItem> = [1, 'jump-left', 4, 5, 6, 7, 8]

    const result = getPages(currentPage, totalPages)

    expect(result).toEqual(expectedResult)
  })

  it('should return first, last and 3 elements with jump icons for more than 8 elements and current index bigger than 4', () => {
    const currentPage = 5
    const totalPages = 9
    const expectedResult: Array<PageItem> = [
      1,
      'jump-left',
      4,
      5,
      6,
      'jump-right',
      9
    ]

    const result = getPages(currentPage, totalPages)

    expect(result).toEqual(expectedResult)
  })
})
