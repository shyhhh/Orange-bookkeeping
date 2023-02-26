import create from 'zustand'

interface Menu {
  visible: boolean
  setVisible: (visible: boolean) => void
}
// eslint-disable-next-line unused-imports/no-unused-vars
export const useMenuStore = create<Menu>((set, get) => ({
  visible: false,
  setVisible: (visible: boolean) => {
    set({ visible })
  }
}))
