import create from 'zustand'

type List = {
  list: Tag[]
  setList: (data: Tag[]) => void
}

export const useTagsStore = create<List>((set, get) => (
  {
    list: [],
    setList: (list: Tag[]) => {
      set(state => ({ list }))
    },
  }
))
