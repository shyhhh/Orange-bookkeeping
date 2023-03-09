import { useState } from 'react'
import { emojis } from '../lib/emojis'

export const TagsNewPage: React.FC = () => {
  const onSubmit = () => { }
  const [emojiKind, setEmojiKind] = useState('表情')
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>标签名</span>
          <input h-input-text />
          <span text-red>标签名太长</span>
        </div>
        <div>
          <span>符号 😀</span>
          <div>
            <div flex>
              {emojis.map(title =>
                <span onClick={() => setEmojiKind(title.name)}>
                  {title.name}
                </span>)}
            </div>
            <div>
              {emojis.map(emoji =>
                <div key={emoji.name} style={{ display: emoji.name === emojiKind ? '' : 'none' }}>
                  {emoji.chars}
                </div>)}
            </div>
          </div>
        </div>
        <p>记账时长按标签，即可进行编辑</p>
        <div>
          <button h-btn>确定</button>
        </div>
      </form>
    </div>
  )
}
