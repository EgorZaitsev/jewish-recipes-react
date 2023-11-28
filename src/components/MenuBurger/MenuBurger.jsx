import React, {useState} from 'react';
import styled from "styled-components";
import hamburger from '../../assets/hamburger.png'
import {Link} from "react-router-dom";
import useGetSize from "../../hooks/useGetSize.jsx";

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1;
`
const BackgroundCover = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => (props.$isopen ? 'block' : 'none')};
  background-color: rgba(128, 128, 128, 0.4);
  position: fixed;
  top: 0;
  left: 0;
`

const MenuBar = styled.ul`
  height: 100%;
  width: 100%;
  z-index: 2;
  display: ${(props) => (props.$attr === false ? `none` : `flex`)};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  top: 0;
  background-color: rgba(75, 75, 75, 1);
  animation: ${(props) => (props.$attr === false ? `1s ease slideout` : `1s ease slidein`)};
  right: ${(props) => (props.$attr === false ? `-40%` : `-40%`)};
  list-style: none;
  @keyframes slideout {
    from {
      right: -40%;
      display: flex;
    }
    to {
      right: -100%;
      display: none
    }
  }

  @keyframes slidein {
    from {
      right: -100%;
      display: none;
    }
    to {
      right: -40%;
      display: flex;
    }
  }

`

const MenuPosition = styled.li`
  :hover {
    color: red;
    transition: color .5s ease;
  }

  margin-left: 40px;
  margin-top: 25px;
  color: white;
  font-size: 20px;
  transition: color .5s;
  font-family: Roboto, sans-serif;
`

const DecoLink = styled(Link)`
  color: ${(props) => (props.$width > 550 ? 'black' : 'white')};
  text-decoration: none;
  transition: color .5s;
`

const Title = styled.h2`
  margin-top: 25px;
  margin-left: 40px;
  color: white;
  font-size: 20px;
  transition: color .5s;
  font-family: Roboto, sans-serif;
`


const MenuBurger = () => {
  const screenWidth = useGetSize();
  const [isOpen, changeState] = useState(false);
  const handleClick = () => {
    changeState(!isOpen);
  }
  const linkScroll = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
      <>
        <StyledImg onClick={handleClick} src={hamburger}/>
        <>
          <BackgroundCover $isopen={isOpen} onClick={handleClick}/>
          <MenuBar $attr={isOpen}>
            <Title $width={screenWidth}>Menu</Title>
            <MenuPosition><DecoLink onClick={() => {
              handleClick();
              linkScroll()
            }} $width={screenWidth} to='/'>Home</DecoLink></MenuPosition>
            <MenuPosition><DecoLink onClick={() => {
              handleClick();
              linkScroll()
            }} $width={screenWidth} to='/recipes'>Recipes</DecoLink></MenuPosition>
            <MenuPosition><DecoLink onClick={() => {
              handleClick();
              linkScroll()
            }} $width={screenWidth} to='/social'>Social</DecoLink></MenuPosition>
          </MenuBar>
        </>

      </>
  );
};


export default MenuBurger;