import {createContext, useEffect, useState} from "react";
import axios from "axios";

const AllPosts = createContext();

// eslint-disable-next-line react/prop-types
const PostsProvider = ({children}) => {
  const apitoken = '729454158a06c6b14168dc115ccb8650c40ebdc02e273e1d077cbcd3ad24f26d6e39d4fb3867754e317f570af4e867ed6087684b7bdd7570daf6f28cd0d6eaef3d18bb854255c75407de3a8aaa6e9ee50309054cb1ec9cd83d92b0c68fdd2bb34c96b4df4a3ea1a9cbb7e00639bc6365c7dfb4cb968332a5b5deaeebdaad1d8b'

  const [posts, setPostes] = useState('init');
  const [loading, setLoading] = useState(false);

  function GetPosts() {
    axios.get('http://localhost:1337/api/posts?populate=cover', {
      headers: {'Authorization': `Bearer ${apitoken}`}
    })
        .then(res => {
          if (Object.keys(res.data).length) {
            setPostes(res.data.data)
          }
          setLoading(true);
        }).catch(error => {
      console.error('error in fetching:', error);
    })
  }


  useEffect(() => {
    GetPosts();
  }, []);
  return (
      <AllPosts.Provider value={{loading, posts}}>
        {children}
      </AllPosts.Provider>
  );
};

export {PostsProvider, AllPosts};