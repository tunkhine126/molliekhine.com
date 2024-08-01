import './App.css';
import Image from './components/image'
import About from './components/about'
import Footer from './components/footer'
function App() {
  return (
    <div className="App w-screen min-h-screen mx-auto pt-36">
      <div className="App-container bg-white items-center justify-center flex max-w-1/2 h-3/6">
        <Image />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
