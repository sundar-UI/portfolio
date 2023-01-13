import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Education />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App
