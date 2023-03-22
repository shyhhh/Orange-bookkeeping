import type { MockMethod } from 'vite-plugin-mock'
import { TagsMock } from './tags.mock'
import { itemsMock } from './items.mock'
import { meMock } from './me.mock'
import { sessionMock } from './session.mock'

export default [
  meMock,
  itemsMock,
  sessionMock,
  TagsMock,
] as MockMethod[]
