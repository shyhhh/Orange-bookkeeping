import type { MockMethod } from 'vite-plugin-mock'
import { tagsMock } from './tags.mock'
import { itemsMock } from './items.mock'
import { meMock } from './me.mock'
import { sessionMock } from './session.mock'
import { summaryMock } from './summary.mock'

export default [
  ...meMock,
  ...itemsMock,
  ...sessionMock,
  ...tagsMock,
  ...summaryMock,
] as MockMethod[]
