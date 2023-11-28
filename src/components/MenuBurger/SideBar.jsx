import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import useGetSize from "../../hooks/useGetSize.jsx";

const MenuBar = styled.ul`
  height: 100%;
  width: 100%;
  z-index: 2;
  display: ${(props) => (props.$attr === false ? `none` : `flex`)};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  top: 0%;
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

  margin-left: 25px;
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
  margin-left: 25px;
  margin-top: 25px;
  color: white;
  font-size: 20px;
  transition: color .5s;
  font-family: Roboto, sans-serif;
`


const SideBar = ({attrs}) => {
  const linkHandler = () => {
    changeState(!menuState);
  }


  const screenWidth = useGetSize();
  const [menuState, changeState] = useState(attrs);


  useEffect(() => {
    changeState(attrs);
  }, [attrs])
  console.log(menuState)
  return (
      <>
        <MenuBar $attr={menuState}>
          <Title $width={screenWidth}>Menu</Title>
          <MenuPosition><DecoLink onClick={linkHandler} $width={screenWidth} to='/'>Home</DecoLink></MenuPosition>
          <MenuPosition><DecoLink onClick={linkHandler} $width={screenWidth}
                                  to='/recipes'>Recipes</DecoLink></MenuPosition>
          <MenuPosition><DecoLink onClick={linkHandler} $width={screenWidth}
                                  to='/social'>Social</DecoLink></MenuPosition>
        </MenuBar>
      </>
  );
};

export default SideBar;