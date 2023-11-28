import {useEffect, useState} from "react";
import axios from "axios";

const usePosts = () => {

  const [loading, changeLoading] = useState(false);
  const [posts, addPost] = useState([]);
  const [error, addError] = useState('');
  const wordPressSiteUrl = 'http://jewishrecipes.local'


  const request =  () => {
   axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
        .then(res => {
          addPost(res.data);
        })
        .catch(error => {
          addError(error);
        })
  }

  useEffect(  () => {
    request();
  }, [])
  return {
    ...posts,
  }
}

export default usePosts;