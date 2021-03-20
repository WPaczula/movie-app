import React, { KeyboardEvent } from 'react'
import { ReactComponent as LeftChevron } from 'assets/chevron_left-24px.svg'
import { ReactComponent as RightChevron } from 'assets/chevron_right-24px.svg'
import { getPages, PageItem } from './utils/getPages'
import { PagesContainer, PageLink } from './styles'

export interface Props {
  totalPages: number
  changeCurrentPage: (page: number) => void
  currentPage: number
}

const Paging = ({ totalPages, changeCurrentPage, currentPage }: Props) => {
  const previousDisabled = currentPage === 1
  const nextDisabled = currentPage === totalPages

  const goTo = (page: number) => {
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
        <LeftChevron />
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
        <RightChevron />
      </PageLink>
    </PagesContainer>
  )
}

export default Paging
