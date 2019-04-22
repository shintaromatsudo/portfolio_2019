import WorkList from '../../components/WorkList'

const Works = () => (
  <div className="works">
    <h1>Works</h1>
    <WorkList />
    <style jsx>{`
      .works {
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
