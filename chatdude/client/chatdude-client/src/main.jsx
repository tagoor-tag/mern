import { createRoot } from 'react-dom/client'
import './index.css'
// import { BrowerRouter } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import mystore from './redux/store/store.js'
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Provider store={mystore}>
<App/>

</Provider>
</BrowserRouter>
)
