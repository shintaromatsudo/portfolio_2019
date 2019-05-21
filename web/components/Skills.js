import BarChart from './BarChart'

const data = [
  ['HTML', 90],
  ['CSS', 90],
  ['JavaScript', 85],
  ['React & Redux', 80],
  ['Node.js(express)', 70],
  ['Python', 70],
  ['Java(spring)', 75],
  ['Video production', 80],
  ['Photograph', 70],
  ['English', 60],
  ['Japanese', 95]
]

const Skills = () => (
  <div className="skills">
    <BarChart data={data} />
    <style jsx>{`
      .skills {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Skills
