import './normalize.css'
import {AllPosts} from "./Posts";
import EntryPage from "./components/EntryPage/EntryPage.jsx";
import Loader from "./components/Loader/Loader.jsx";
import {useContext} from "react";


function App() {
  const {loading} = useContext(AllPosts);

  return (
      <>
        {
          loading ? (<EntryPage/>) : (
              <Loader/>
          )
        }
      </>

  )
}

export default App
