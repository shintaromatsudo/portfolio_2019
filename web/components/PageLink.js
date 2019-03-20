import Link from 'next/link'

const PageLink = props => (
  <div>
    <Link href={props.href}>
      <a>{props.name}</a>
    </Link>
    
  </div>
)

export default PageLink
