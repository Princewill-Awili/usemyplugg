
import Home from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
