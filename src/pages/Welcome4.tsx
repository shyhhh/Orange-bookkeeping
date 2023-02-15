import p from '../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
  return (
    <div text-center>
      <img w-129px h-83px src={p} />
      <h2 text-32px mt-48px >
        云备份 <br />
        再也不怕数据丢失
      </h2>
    </div>
  )
}
