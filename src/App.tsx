import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Home from "./features/home";
import SignUp from "./features/authentication";

const basename = import.meta.env.BASE_URL;


function AnimatedRoutes() {
    const location = useLocation(); // Track route changes

    return (
        <AnimatePresence mode="wait">
            <Routes location={ location } key={ location.pathname }>
                <Route path="/" element={ <Home/> }/>
                <Route path="/signup" element={ <SignUp/> }/>
            </Routes>
        </AnimatePresence>
    );
}


function App() {
    return (
        <BrowserRouter basename={ basename }>
            <AnimatedRoutes/>
        </BrowserRouter>
    );
}


export default App;
