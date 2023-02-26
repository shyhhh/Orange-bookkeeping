import type { FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { TopNav } from '../components/TopNav'
import { ajax } from '../lib/ajax'
import { hasError, validate } from '../lib/validate'
import { useSignInStore } from '../stores/useSignInStore'
export const SignInPage: React.FC = () => {
  const { data, error, setData, setError } = useSignInStore()
  const nav = useNavigate()
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const error = validate(data, [
      { key: 'email', type: 'required', message: '请输入邮箱地址' },
      { key: 'email', type: 'pattern', regex: /^.+@.+$/, message: '邮箱地址格式不正确' },
      { key: 'code', type: 'required', message: '请输入验证码' },
      { key: 'code', type: 'length', min: 6, max: 6, message: '验证码必须是6个字符' },
    ])
    setError(error)
    if (!hasError(error)) {
      await ajax.post('/api/v1/session', data)
      // TODO
      // 保存 JWT 作为登录凭证
      nav('/home')
    }
  }
  return (
    <>
      <Gradient>
        <TopNav title="登录" icon={
          <Icon name="back" />
        } />
      </Gradient>
      <div text-center pt-40px pb-16px>
        <Icon name="logo" className='w-64px h-68px' />
        <h1 text-32px text="#7878FF" font-bold>橙子记账</h1>
      </div>
      <form h-form onSubmit={onSubmit}>
        <div>
          <span h-form-label>邮箱地址 {error.email?.[0] && <span text-red-500>{error.email[0]}</span>}</span>
          <input h-input-text type="text" placeholder='请输入邮箱，然后点击发送验证码'
            value={data.email} onChange={e => setData({ email: e.target.value })} />
        </div>
      <div>
        <span h-form-label>验证码{error.code?.[0] && <span text-red-500>{error.code[0]}</span>}</span>
        <div flex gap-x-16px>
        <input shrink-1 h-input-text type="text" placeholder='六位数字'
              max-w="[calc(40%-8px)]"
            value={data.code} onChange={e => setData({ code: e.target.value })} />
<<<<<<< HEAD
          <button max-w="[calc(60%-8px)]" shrink-0 h-btn>发送验证码</button>
=======
          <button max-w="[calc(60%-8px)]" shrink-0  h-btn>发送验证码</button>
>>>>>>> f470f9511988fc03283632afa6f0a041a86da517
        </div>
      </div>
      <div mt-100px>
        <button h-btn type="submit">登录</button>
      </div>
    </form>
    </>
  )
}
