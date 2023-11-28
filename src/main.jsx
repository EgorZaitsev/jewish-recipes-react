import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {PostsProvider} from "./Posts";

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <PostsProvider>
        <App />
      </PostsProvider>
    </BrowserRouter>

)
