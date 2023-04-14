import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export const AddItemFloatButton: React.FC = () => {
  return (
    <Link to='/items/new'>
      <button p-4px w-40px h-40px bg="#fdaa5f" rounded="50%" b-none text-white
        fixed bottom-16px right-16px flex justify-center items-center>
        <Icon name="add" className="w-32px h-32px" />
      </button>
    </Link>
  )
}
