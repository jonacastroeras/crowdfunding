import './App.css';
import Navmenu from './components/NAVBAR';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home"
import DetailPage from "./pages/Detail"
import StoryForm from "./pages/StoryForm"
import LoginPage from './pages/Login';
import Logout from './components/logout';
import { useEffect, useState } from 'react';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("access") !== null) {
            setIsAuthenticated(true)
        }
    }, [isAuthenticated])

    return (<div className="App">

        <Navmenu isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}></Navmenu>
        <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/storyform" element={<StoryForm />} />
            <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/logout" element={<Logout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
    </div>);
}

export default App;
