import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledArticle = styled.article`

  @media (max-width: 968px) {
    width: 300px;
  }
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 389px;
  border-radius: 24px;
  box-shadow: 10px 10px 15px 0px rgb(224, 224, 236);
  transition: all .25s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 12px 17px 0px 0px rgb(224, 224, 236);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`


const ImgWrapper = styled.div`

`

const StyledImg = styled.img`
  @media (max-width: 968px) {
    width: 300px;
  }
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
  width: 350px;
  max-height: 189px;

`

const Title = styled.h1`
  padding-left: 26px;
  padding-top: 21px;
  font-family: "Roboto", sans-serif;
`

const Description = styled.p`
  padding-left: 26px;
  padding-top: 15px;
  font-family: 'Roboto', sans-serif;

`

const RecipeCard = ({post}) => {
  return (
      <StyledArticle>
        <StyledLink to={`post/${post.id}`}>
          <ImgWrapper>
            <StyledImg
                src={`http://localhost:1337${post.attributes.cover.data !== null ? post.attributes.cover.data.attributes.url : ''}`}
                alt="recipe"/>
          </ImgWrapper>
          <Title>{post.attributes.title}</Title>
          <Description>{post?.attributes.description}</Description>
        </StyledLink>
      </StyledArticle>

  );
};

export default RecipeCard;