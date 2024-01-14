import { Header } from './components/Header'
import { Project } from './components/Project'
import { Service } from './components/Service'
import { Team } from './components/Team'
import { Virtual } from './components/Virtual'

function App() {

  return (
    <div className="container">
      <Header/>
      <Virtual/>
      <Service/>
      <Project reverseOrder={true} />
      <Team/>
    </div>
  )
}

export default App
