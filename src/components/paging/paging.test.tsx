import React from 'react'
import Paging, { Props } from './Paging'
import { fireEvent, screen } from '@testing-library/react'
import renderWithTheme from 'test/renderWithTheme'
import theme from 'theme'

describe('Paging', () => {
  const renderPaging = (props: Partial<Props> = {}) => {
    const {
      totalPages = 70,
      currentPage = 1,
      changeCurrentPage = jest.fn()
    } = props

    return renderWithTheme(
      <Paging
        {...props}
        totalPages={totalPages}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    )
  }

  describe('rendering', () => {
    it('should allow to move to the next page by clicking right chevron', async () => {
      const currentPage = 1
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const nextPageChevron = await screen.getByTestId('next-page-chevron')

      fireEvent.click(nextPageChevron)

      expect(changeCurrentPage).toHaveBeenCalledWith(currentPage + 1)
    })

    it('should allow to move to the next page by focusing right chevron and pressing enter', async () => {
      const currentPage = 1
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const nextPageChevron = await screen.getByTestId('next-page-chevron')

      fireEvent.keyUp(nextPageChevron, { key: 'Enter', charCode: 13, code: 13 })

      expect(changeCurrentPage).toHaveBeenCalledWith(currentPage + 1)
    })

    it('should not allow to move to the next page by clicking right chevron if the last page is active', async () => {
      const currentPage = 10
      const totalPages = 10
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, totalPages, changeCurrentPage })
      const nextPageChevron = await screen.getByTestId('next-page-chevron')

      fireEvent.click(nextPageChevron)
      const activeLink = await screen.getByTestId(`page-link-${currentPage}`)

      expect(activeLink).toHaveStyleRule('background-color', theme.colors.primary)
      expect(changeCurrentPage).not.toHaveBeenCalled()
    })

    it('should allow to move to the previous page by clicking left chevron', async () => {
      const currentPage = 3
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const previousPageChevron = await screen.getByTestId(
        'previous-page-chevron'
      )

      fireEvent.click(previousPageChevron)

      expect(changeCurrentPage).toHaveBeenCalledWith(currentPage - 1)
    })

    it('should not allow to move to the previous page by clicking left chevron if the active is the first page', async () => {
      const currentPage = 1
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const previousPageChevron = await screen.getByTestId(
        'previous-page-chevron'
      )

      fireEvent.click(previousPageChevron)

      expect(changeCurrentPage).not.toHaveBeenCalled()
    })

    it('should allow to move to the previous page by focusing left chevron and pressing enter', async () => {
      const currentPage = 2
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const previousPageChevron = await screen.getByTestId(
        'previous-page-chevron'
      )

      fireEvent.keyUp(previousPageChevron, {
        key: 'Enter',
        charCode: 13,
        code: 13
      })

      expect(changeCurrentPage).toHaveBeenCalled()
    })

    it('should allow to jump 3 forward by clicking the jump right link.', async () => {
      const currentPage = 1
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const jumpRightLink = await screen.getByTestId('page-link-jump-right')

      fireEvent.click(jumpRightLink)

      expect(changeCurrentPage).toHaveBeenCalledWith(currentPage + 3)
    })

    it('should allow to jump 3 backward by clicking the jump left link.', async () => {
      const currentPage = 8
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const jumpLeftLink = await screen.getByTestId('page-link-jump-left')

      fireEvent.click(jumpLeftLink)

      expect(changeCurrentPage).toHaveBeenCalledWith(currentPage - 3)
    })

    it('should move to the chosen page when its number is clicked', async () => {
      const currentPage = 1
      const chosenPage = 3
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const thirdPage = await screen.getByTestId(`page-link-${chosenPage}`)

      fireEvent.click(thirdPage)

      expect(changeCurrentPage).toHaveBeenCalledWith(chosenPage)
    })

    it('should allow navigating by focusing and pressing enter on the page link', async () => {
      const currentPage = 1
      const chosenPage = 3
      const changeCurrentPage = jest.fn()
      await renderPaging({ currentPage, changeCurrentPage })
      const thirdPage = await screen.getByTestId(`page-link-${chosenPage}`)

      fireEvent.keyUp(thirdPage, { key: 'Enter', charCode: 13, code: 13 })

      expect(changeCurrentPage).toHaveBeenCalledWith(chosenPage)
    })
  })
})
