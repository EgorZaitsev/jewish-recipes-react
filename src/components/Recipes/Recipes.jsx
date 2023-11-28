import React, {useEffect, useState} from 'react';
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import styled from "styled-components";
import axios from "axios";
import LoadingCard from "../LoadingCard/LoadingCard.jsx";


const MainRecipes = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  margin-top: 75px;
`

const fetchNewPosts = (page, addNewData, setLoading) => {
  const apitoken = '729454158a06c6b14168dc115ccb8650c40ebdc02e273e1d077cbcd3ad24f26d6e39d4fb3867754e317f570af4e867ed6087684b7bdd7570daf6f28cd0d6eaef3d18bb854255c75407de3a8aaa6e9ee50309054cb1ec9cd83d92b0c68fdd2bb34c96b4df4a3ea1a9cbb7e00639bc6365c7dfb4cb968332a5b5deaeebdaad1d8b'
  setLoading(true);
  axios.get(`http://localhost:1337/api/posts?populate=cover&pagination[pageSize]=5&pagination[page]=${page}`, {
    headers: {'Authorization': `Bearer ${apitoken}`}
  })
      .then(res => {
        if (Object.keys(res.data).length) {
          addNewData(prevPosts => [...prevPosts, ...res.data.data]);
        }
      }).catch(error => {
    console.error('error in fetching:', error);
  }).finally(() => {
    setLoading(false);
  })
}


const Recipes = () => {
  const maxPages = 4;
  const handleScroll = () => {
    if (!((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) || loading) {
      console.log('scrolling')
      return;
    }

    fetchNewPosts(page, addData, changeLoading);
    nextPage(prevPage => prevPage + 1);
  };


  const [newData, addData] = useState([]);
  const [loading, changeLoading] = useState(false);

  const [page, nextPage] = useState(2);

  useEffect(() => {
    fetchNewPosts(1, addData, changeLoading);
  }, [])

  useEffect(() => {
    if (maxPages !== page) {
      window.addEventListener('scroll', handleScroll)
    }


    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loading])
  return (
      <MainRecipes>
        <>
          {
            newData.map(recipes => {
              return <RecipeCard key={recipes.id} post={recipes}/>
            })
          }
        </>
        {
            loading && (
                <>
                  <LoadingCard/>
                </>
            )
        }
      </MainRecipes>
  );


};

export default Recipes;