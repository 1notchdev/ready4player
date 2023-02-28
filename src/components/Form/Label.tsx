const Label = ({children, ...props}) => {
  return (
    <label
      className="text-white/[0.72]"
      {...props}>
      {children}
    </label>
  )
}

export default Label;