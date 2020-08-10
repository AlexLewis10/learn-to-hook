import React from 'react'
import {
  render,
  cleanup,
  waitForElement
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import Cards from '../components/cards'


afterEach(cleanup)

it('mocks it', async () => {
axiosMock.get.mockResolvedValueOnce({data: { card: 'KING'}})

  const url = "/cardsApi"
  const { getByTestId } = render(<Cards />)

  expect(getByTestId('loading')).toHaveTextContent('Loading...')
})
