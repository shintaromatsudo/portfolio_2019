const PageLink = props => (
  <div>
    <p>{props.name}</p>
    <style jsx>{`
      div {
        width: 150px;
        height: 200px;
        display: flex;
        cursor: pointer;
      }
      p {
        font-size: 30px;
        color: white;
        margin: auto;
      }
    `}</style>
  </div>
)

export default PageLink
