import axios from 'axios'
import type { FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'
import { TopNav } from '../components/TopNav'
import { ajax } from '../lib/ajax'
import { hasError, validate } from '../lib/validate'
import { useSignInStore } from '../stores/useSignInStore'
export const SignInPage: React.FC = () => {
  const { data, error, setData, setError } = useSignInStore()
  const nav = useNavigate()
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const newError = validate(data, [
      { key: 'email', type: 'required', message: '请输入邮箱地址' },
      { key: 'email', type: 'pattern', regex: /^.+@.+$/, message: '邮箱地址格式不正确' },
      { key: 'code', type: 'required', message: '请输入验证码' },
      { key: 'code', type: 'length', min: 6, max: 6, message: '验证码必须是6个字符' },
    ])
    setError(newError)
    if (!hasError(newError)) {
      await ajax.post('/api/v1/session', data)
      // TODO
      // 保存 JWT 作为登录凭证
      nav('/home')
    }
  }
  const onClickCode = async () => {
    const newError = validate({ email: data.email }, [
      { key: 'email', type: 'pattern', regex: /^.+@.+$/, message: '邮箱地址格式不正确' }
    ])
    setError(newError)
    if (hasError(newError)) {
      window.console.log('有错')
    } else {
      // 请求
      const response = await axios.post('http://121.196.236.94:8080/api/v1/validation_codes', {
        email: data.email
      })
      console.log(response)
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
        <Input label='邮箱地址' type="text" placeholder='请输入邮箱，然后点击发送验证码'
          value={data.email} onChange={email => setData({ email })}
          error={error.email?.[0]}
        />
        <Input label='验证码' type="sms_code" placeholder='六位数字' value={data.code}
          onChange={code => setData({ code })} onClick={onClickCode}
          error={error.code?.[0]} />
        <div mt-100px>
          <button h-btn type="submit">登录</button>
        </div>
      </form>
    </>
  )
}
