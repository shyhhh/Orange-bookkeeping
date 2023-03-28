type Props = {
  value?: string
  onChange?: (v: string) => void
  className?: string
  placeholder?: string
}
export const DateInput: React.FC<Props> = (props) => {
  const { value, className, placeholder } = props
  return (
    <input className={className} h-input-text type="text" readOnly data-xxxx
      placeholder={placeholder} value={value} />
  )
}
