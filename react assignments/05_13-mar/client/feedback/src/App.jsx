import React from 'react'
import "./App.css"
import Nav from './compounts/Nav/Nav'
import Feedbackform from './compounts/Routing/Feedbackform/Feedbackform'
import Allfeedbacks from './compounts/Routing/Allfeedbacks/Allfeedbacks'
import Pagenotfound from './compounts/Routing/Pagenotfound/Pagenotfound'
import { Routes ,Route } from 'react-router-dom'

function App() {
    return (
        <div id='appContainer'>
            <Nav />
            <Routes>
                <Route path={"/"} element={<Feedbackform />} />
                <Route path={"/allfeedbacks"} element={<Allfeedbacks />} />
                <Route path={"*"} element={<Pagenotfound />} />
            </Routes>

        </div>
    )
}

export default App