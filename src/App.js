import './App.css';
import Navmenu from './components/NAVBAR';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home"
import DetailPage from "./pages/Detail"
import StoryForm from "./pages/StoryForm"

function App() {
    return (<div className="App">
        <Navmenu></Navmenu>
        <Routes>
            <Route path="" element={<HomePage/>}/>
            <Route path="/detail" element={<DetailPage/>}/>
            <Route path="/storyform" element={<StoryForm/>}/>
        </Routes>
    </div>);
}

export default App;
