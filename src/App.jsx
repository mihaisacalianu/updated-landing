import Header from "./Components/Header.jsx";
import Bio from './Components/Bio.jsx';
import TechStack from "./Components/TechStack.jsx";
import Projects from "./Components/Projects.jsx";
import SideNav from "./Components/SideNav.jsx";
function App() {


  return (
    <>
     <Header/>
      <main>
        <Bio/>
        <SideNav />
        <TechStack/>
        <Projects/>
      </main>
    </>

  )
}

export default App;
