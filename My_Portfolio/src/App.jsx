
import styles from './App.module.css'
import { Navbar } from './Components/Navbar/Navbar'
import {Home} from './Components/Home/Home'
import { Skills } from './Components/Skills/Skills'
import { Experience } from './Components/Experience/Experience'
import { SideProjects } from './Components/SideProjects/SideProjects'
import { Contact } from './Components/Contact/Contact'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <Skills/>
      <Experience/>
      
      
      <SideProjects/>
      <Contact/>
    </div>
  )
}

export default App
