import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route} from "react-router-dom";
function App() {
const apikey=process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<News key='general' pageSize={10} apikey={apikey} country='in' category='general'/>} />
        <Route exact path="technology" element={<News key='technology' apikey={apikey} pageSize={10} country='in' category='technology'/>} />
        <Route exact path="sports" element={<News key='sports' pageSize={10} apikey={apikey} country='in' category='sports'/>} />
        <Route exact path="business" element={<News key='business' pageSize={10} apikey={apikey} country='in' category='business'/>} />
        <Route exact path="entertainment" element={<News key='entertainment' apikey={apikey} country='in' pageSize={10} category='entertainment'/>} />
        <Route exact path="health" element={<News key='health' pageSize={10} apikey={apikey} country='in' category='health'/>} />
        <Route exact path="science" element={<News key='science' pageSize={10} apikey={apikey} country='in' category='science'/>} />
      </Routes>
    </div>
  );
}

export default App
//process.env.REACT_APP_NEWS_API