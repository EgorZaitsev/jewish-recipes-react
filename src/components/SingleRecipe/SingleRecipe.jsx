import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Loader from "../Loader/Loader.jsx";
import useGetSize from "../../hooks/useGetSize.jsx";

const getRecipe = (id, setLoading, setPost) => {
  const apitoken = '729454158a06c6b14168dc115ccb8650c40ebdc02e273e1d077cbcd3ad24f26d6e39d4fb3867754e317f570af4e867ed6087684b7bdd7570daf6f28cd0d6eaef3d18bb854255c75407de3a8aaa6e9ee50309054cb1ec9cd83d92b0c68fdd2bb34c96b4df4a3ea1a9cbb7e00639bc6365c7dfb4cb968332a5b5deaeebdaad1d8b'
  axios.get(`http://localhost:1337/api/posts/${id}?populate=cover`, {
    headers: {'Authorization': `Bearer ${apitoken}`}
  })
      .then(res => {
        if (Object.keys(res.data).length) {
          setPost(res.data.data)
        }
        setLoading(true);
      }).catch(error => {
    console.error('error in fetching:', error);
  })
}

const StyledArticle = styled.article`
  @media (max-width: 768px) {
    margin: 25px;
    grid-template-columns: auto;
  }
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 768px;
  gap: 25px;
  margin-top: 30px;
  font-family: 'roboto', sans-serif;
`

const HeaderInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto min-content min-content;
`

const MidInfo = styled.div`
  @media (max-width: 650px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr auto;
  }
  gap: 25px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
`

const Title = styled.h1`
  @media (max-width: 420px) {
    font-size: 26px;
  }
  font-size: 46px;
  width: 100%;
`


const SmallDescription = styled.p`
  @media (max-width: 420px) {
    font-size: 14px;
  }
  color: gray;
  margin-top: 15px;
  grid-row-start: 2;
`
const LittleInfo = styled.p`
  align-self: center;
  font-size: 14px;
  color: gray;
`

const ListWrapper = styled.div`
`

const Image = styled.img`
  @media (max-width: 650px) {
    width: 320px;
  }
  @media (max-width: 420px) {
    justify-self: center;
    width: 300px;
  }
  width: 400px;
`

const Description = styled.p`

`

const BoldInfoText = styled.p`
  font-weight: 800;
  font-size: 24px;
  margin: 15px 0 15px 0;
`


const StyledList = styled.ol`
  list-style-type: ${props => props.$list === 'disc' ? "disc" : ""};
  margin-bottom: 15px;

`

const ListItem = styled.li`
  @media (max-width: 420px) {
    margin-left: 10px;
  }

`

const Line = styled.hr`
  color: gray;
  width: 100%;
`


const SingleRecipe = () => {
  const width = useGetSize();
  const {id} = useParams();
  const [loader, setLoading] = useState(false);
  const [post, setPost] = useState('null');
  useEffect(() => {
    getRecipe(id, setLoading, setPost);
  }, [loader]);
  console.log(post);
  return (
      <>
        {loader ? (
            <>
              <StyledArticle>
                <HeaderInfo>
                  <Title>{post.attributes.title}</Title>
                  <SmallDescription>{post.attributes.smallDescription}</SmallDescription>
                  <LittleInfo>Время подготовки: {post.attributes.preptime} минут</LittleInfo>
                  <LittleInfo>Время приготовления: {post.attributes.cooktime} минут</LittleInfo>
                </HeaderInfo>
                <Line/>
                <MidInfo>
                  <Image src={`http://localhost:1337${post.attributes.cover.data.attributes.url}`}/>
                  <div>
                    <BoldInfoText>Описание</BoldInfoText>
                    <Description>{post.attributes.description}</Description>
                    {width < 1024 ? '' : <button onClick={(e) => {
                      print()

                    }}>Print it!
                    </button>}
                  </div>
                </MidInfo>
                <ListWrapper>
                  <BoldInfoText>Ингредиенты</BoldInfoText>
                  <StyledList $list='disc' key={post.attributes.guidance.id}>

                    {(post.attributes.ingredients[0].children.map((ingredient, index) => {
                          return (
                              <ListItem key={index}>{ingredient.children[0].text}</ListItem>
                          )
                        }
                    ))}
                  </StyledList>
                </ListWrapper>
                <ListWrapper>
                  <BoldInfoText>Инструкция приготовления</BoldInfoText>
                  <StyledList key={post.attributes.guidance.id}>
                    {
                      (post.attributes.guidance[0].children.map((guide, index) => {
                            return (
                                <ListItem key={index}>{guide.children[0].text}</ListItem>
                            )
                          }
                      ))
                    }
                  </StyledList>
                </ListWrapper>

              </StyledArticle>
            </>) : <Loader/>}
      </>
  )
};

export default SingleRecipe;