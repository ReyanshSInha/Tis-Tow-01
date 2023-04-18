import logo from './logo.svg';
import './App.css';
import FirstNavbar from './components/Navbar';
import Hero from './components/Hero';
import Box from './components/Box';
import WhyTisTow from './components/WhyTisTow';

function App() {
  return (
    <div className="App">

      <FirstNavbar/>
      <Hero/>
      <div className="bodyBox">
        <Box/>
        <Box/>
      </div>
      <WhyTisTow/>

    </div>
  );
}

export default App;
