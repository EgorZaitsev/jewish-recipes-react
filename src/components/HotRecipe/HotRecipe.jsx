/* eslint-disable react/prop-types */
import styled from "styled-components";
import {useContext, useState} from "react";
import {AllPosts} from "../../Posts.jsx";
import Span from "../StyledComponents/Span.jsx";
import {Link} from "react-router-dom";

const Recipe = styled.article`


  @media (max-width: 562px) {
    grid-template-areas: 
          "title"
          "image"
          "info";
    max-width: 400px;
    min-width: fit-content;
    margin-right: 0;
  }

  margin-right: 25px;
  padding: 20px;
  border-radius: 20px;
  display: grid;
  grid-template-areas: 
          "title title"
          "image info"
          "image info";
  justify-content: start;
  gap: 35px;
  min-width: 600px;
  min-height: 400px;
  box-shadow: 0px 15px 30px 0px rgba(224, 224, 236, 0.80);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Info = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  gap: 15px;
`

const Img = styled.img`
  grid-area: image;
  margin-top: auto;
  object-fit: cover;
  width: 300px;
  height: 250px;
  border-radius: 20px;

  @media (max-width: 550px) {
    width: 100%;
  }
`

const ArticleTitle = styled.h2`
  padding-top: 15px;
  font-size: 42px;
  grid-area: title;
  font-family: "Roboto", sans-serif;
`

const Title = styled.h3`
  font-family: "Roboto", sans-serif;
  line-height: 20px;
  font-size: 24px;
`

const Description = styled.p`
  font-family: "Roboto", sans-serif;
`

const HotRecipe = () => {
  const {posts} = useContext(AllPosts);
  const [randPost, generatePost] = useState(Math.floor(Math.random() * posts.length));
  return (
      <>
        <Recipe>
          <ArticleTitle>Hot recipe </ArticleTitle>
          <Img
              src={`http://localhost:1337${posts[randPost].attributes.cover.data !== null ? posts[randPost].attributes.cover.data.attributes.url : ''}`}/>
          <Info>
            <Span>
              <StyledLink
                  to={`/recipes/post/${posts[randPost].id}`}><Title>{posts[randPost].attributes.title}</Title></StyledLink>
            </Span>
            <Description>{posts[randPost].attributes.description !== null ? posts[randPost].attributes.description : ''}</Description>
          </Info>
        </Recipe>
      </>
  );
};


export default HotRecipe;