import Link from 'next/link'

const Button = props => (
  <div>
    <Link href={props.href}>
      <button>{props.name}</button>
    </Link>
  </div>
)

export default Button
