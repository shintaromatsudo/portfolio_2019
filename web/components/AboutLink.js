import Link from 'next/link'

const AboutLink = props => (
  <div className="AboutLink">
    <Link href={props.href}>
      <a>{props.name}</a>
    </Link>
  </div>
  <style jsx>{`
    .AboutLink {
      width: 50px;
      height 50px;
      font-weght: bold;
      color: black;
      background-color: white;
      border: 2px solid black;
      border-radius: 50%
      transition: all 0.3s;
    }
    .AboutLink :hover {
      color: white;
      background-color: black;
      border: 2px solid white;
    }
  `}</style>
)

export default AboutLink
