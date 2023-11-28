import React from 'react';
import styled from "styled-components";

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

 
`

const UpperImage = styled.div`
  @media (max-width: 968px) {
    width: 300px;
  }
  background-color: rgba(143, 143, 143, 0.69);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
  width: 350px;
  height: 189px;
`

const Description = styled.p`
  @media (max-width: 968px) {
    width: 200px;
  }
  width: 250px;
  height: 20px;
  background-color: rgba(122, 122, 122, 0.37);
  margin-left: 26px;
  margin-top: 16px;
`

const Title = styled.h1`
  @media (max-width: 968px) {
    width: 250px;
  }
  width: 300px;
  height: 24px;
  background-color: rgba(122, 122, 122, 0.37);
  margin-left: 26px;
  margin-top: 21px;
  font-family: "Roboto", sans-serif;
`


const LoadingCard = () => {
  return (
      <StyledArticle>
        <UpperImage/>
        <Title/>
        <Description/>
      </StyledArticle>
  );
};

export default LoadingCard;