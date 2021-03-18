import React, { KeyboardEvent, useState } from 'react'
import { getPages, PageItem } from './utils/getPages'
import { PagesContainer, PageLink } from './styles'

export interface Props {
  totalPages: number
  initialPage?: number
  changeCurrentPage: (page: number) => void
}

const Paging = ({ totalPages, initialPage = 1, changeCurrentPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const previousDisabled = currentPage === 1
  const nextDisabled = currentPage === totalPages

  const goTo = (page: number) => {
    setCurrentPage(page)
    changeCurrentPage(page)
  }
  const goPrevious = () => {
    if (!previousDisabled) {
      goTo(currentPage - 1)
    }
  }
  const goNext = () => {
    if (!nextDisabled) {
      goTo(currentPage + 1)
    }
  }

  const onNavigate = (p: PageItem) => {
    switch (p) {
      case 'jump-left':
        goTo(currentPage - 3)
        return
      case 'jump-right':
        goTo(currentPage + 3)
        return
      default:
        goTo(p)
    }
  }

  const onEnterNavigation = (page: PageItem) => (
    e: KeyboardEvent<HTMLElement>
  ) => {
    if (e.key === 'Enter') {
      onNavigate(page)
    }
  }

  const getElement = (p: PageItem) => (typeof p === 'number' ? p : '...')

  return (
    <PagesContainer data-testid="paging">
      <PageLink
        onClick={goPrevious}
        tabIndex={previousDisabled ? undefined : 0}
        onKeyUp={onEnterNavigation(currentPage - 1)}
        aria-disabled={previousDisabled}
        disabled={previousDisabled}
        data-testid="previous-page-chevron"
      >
        {'<'}
      </PageLink>
      {getPages(currentPage, totalPages).map((p) => (
        <PageLink
          data-testid={`page-link-${p}`}
          tabIndex={0}
          key={p}
          onKeyUp={onEnterNavigation(p)}
          active={p === currentPage}
          onClick={() => onNavigate(p)}
        >
          <a role="button">{getElement(p)}</a>
        </PageLink>
      ))}
      <PageLink
        onClick={goNext}
        onKeyUp={onEnterNavigation(currentPage + 1)}
        tabIndex={nextDisabled ? undefined : 0}
        aria-disabled={nextDisabled}
        disabled={nextDisabled}
        data-testid="next-page-chevron"
      >
        {'>'}
      </PageLink>
    </PagesContainer>
  )
}

export default Paging
