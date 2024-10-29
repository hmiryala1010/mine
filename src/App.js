import About from './components/About';      // Ensure this file exists
import Work from './components/Work';  // Ensure this file exists
import Skills from './components/Skills';      // Ensure this file exists
import Contact from './components/Contact';    // Ensure this file exists
import Footer from './components/Footer';      // Ensure this file exists 
import Head from './components/Head'; 
import Home from './components/Home';
 
import Blog from './components/Blog';

console.log(About); // Should log a function
console.log(Work); // Should log a function
console.log(Skills); // Should log a function
console.log(Contact); // Should log a function
console.log(Footer); // Should log a function
console.log(Head); 
console.log(Home);
console.log(Blog);

function App() {
  return (
    <div className="App"> 
    <Home/>
     <Head/>
      <main>  
         <About />
   
        <Skills />
        <Work />
        <Blog/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
