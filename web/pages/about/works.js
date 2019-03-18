import WorkList from '../../components/WorkList'

const Works = () => (
  <div className="Works">
    <h1>Works</h1>
    <WorkList />
    <style jsx>{`
      .Works {
        margin: 70px;
      }
      h1 {
        margin: 70px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Works
