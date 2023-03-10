import { Gradient } from '../components/Gradient'
import { TopNav } from '../components/TopNav'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'

export const TagsNewPage: React.FC = () => {
  const onSubmit = () => { }
  return (
    <div>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="新建标签" icon={<Icon name="back" />} />
      </Gradient>
      <form onSubmit={onSubmit} px-16px py-32px flex flex-col gap-y-8px>
        <Input label='标签名' error='标签名太长' />
        <Input type='emoji' label={`图标 ${'😯'}`} />
        <p text-center py-24px>记账时长按标签，即可进行编辑</p>
        <div>
          <button h-btn>确定</button>
        </div>
      </form>
    </div>
  )
}
