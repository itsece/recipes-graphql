export default function Container({ children, flex}) {
  return (
    <div className={`container ${flex && `container--flex`} `}>{children}</div>
  )
}