import BarChart from './BarChart'

const data = [
  ['HTML', 90],
  ['CSS', 90],
  ['JavaScript(& jQuery)', 90],
  ['React(& Redux)', 90],
  ['Node.js(express)', 90],
  ['Python', 80],
  ['Java(spring)', 70],
  ['Video production', 80],
  ['Photograph', 70],
  ['English', 70],
  ['Japanese', 100]
]

const Skills = () => (
  <div className="skills">
    <h2>My skill</h2>
    <BarChart data={data} />
    <style jsx>{`
      .skills {
      }
    `}</style>
  </div>
)

export default Skills
