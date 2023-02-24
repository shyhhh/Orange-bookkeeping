import { FormEventHandler } from "react"
import { Gradient } from "../components/Gradient"
import { Icon } from "../components/Icon"
import { TopNav } from "../components/TopNav"
import { useSignInStore } from "../stores/useSignInStore"
export const SignInPage: React.FC = () => {
  const { data, setData } = useSignInStore()
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(data)
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
      <div b-1 b-red>{JSON.stringify(data)}</div>
        <div>
          <span h-form-label>邮箱地址</span>
          <input h-input-text type="text" placeholder='请输入邮箱，然后点击发送验证码'
            value={data.email} onChange={e => setData({ email: e.target.value })} />
        </div>
      <div>
        <span h-form-label>验证码</span>
        <div flex gap-x-16px>
          <input h-input-text type="text" placeholder='六位数字'
            value={data.code} onChange={e => setData({ code: e.target.value })} />
          <button h-btn>发送验证码</button>
        </div>
      </div>
      <div mt-100px>
        <button h-btn type="submit">登录</button>
      </div>
    </form>
    </>
  )
}
