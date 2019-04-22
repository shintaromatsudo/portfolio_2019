import BarChart from '../components/BarChart'

const data =[
  ['HTML',90],
  ['CSS',90],
  ['JavaScript(including jQuery)',90],
  ['React(including Redux)',90],
  ['Node.js(express)',90],
  ['Python',80],
  ['Java(spring)',70],
  ['Video production',80],
  ['Photograph',70],
  ['English',70],
  ['Japanese',100]
  ]


const Skills = () => (
  <div>
      <h2>React D3.js line chart</h2>
    <LineChart  data={data} />
  </div>
)
  

export default Skills
