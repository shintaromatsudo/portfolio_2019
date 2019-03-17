import Work from './Work'

const WorkList = () => (
  <div className="work-list">
    <Work image="../static/img/favicon.ico" title="1" content="1" />
    <Work image="../static/img/TheWave.jpg" title="2" content="2" />
    <Work image="" title="3" content="3" />
    <Work image="" title="4" content="4" />
    <Work image="" title="5" content="5" />
    <Work image="" title="6" content="6" />
    <style jsx>{`
      .work-list {
        display: grid;
        gap: 100px;
        grid-template-columns: repeat(auto-fill, 250px);
        justify-content: center;
      }
    `}</style>
  </div>
)

export default WorkList
