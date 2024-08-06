import './App.css';
import Image from './components/image'
import About from './components/about'
import Footer from './components/footer'
function App() {
  return (
    <div className="App w-screen min-h-screen mx-auto pt-4 sm:pt-36">
      <header class="pb-4 sm:pb-12 text-4xl text-secondary">Hi, I'm Mollie.</header>
      <div className="App-container bg-white items-center justify-center sm:flex sm:max-w-1/2 sm:h-3/6">
        <Image />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
