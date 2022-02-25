
import React from 'react';
import StyledButtonClose from './button';
import StyleContainer from './container';
import StyledImage from './image';
import StyledText from './text';
import check from '../assets/check.svg'

export default function Modal({
    show,
    close,
    title,
    img,
    width = window.innerWidth / 3,
    height = window.innerHeight / 2,
    left,
    bg = "white",
    text,
    justifyContent = "space-around",
    borderRadius = "150px ",
    display = "flex",
    alignItems = "center",
    flexDirection = "column",
    boxShadow,
    fontSize,
    color = "black" }) {
    
      if (show) {
            return (
                <StyleContainer                   
                    width={width}
                    height={height}
                    bg={bg}
                    left={left}
                    borderRadius={borderRadius}
                    display={display}
                    alignItems={alignItems}
                    justifyContent={justifyContent}
                    flexDirection={flexDirection}
                    boxShadow={boxShadow}           
                >
                    <StyledImage src={check} />                         
                    <StyledText
                        fontSize={fontSize}
                        color={color}>
                        {text}
                    </StyledText>
                    <StyledButtonClose  onClick={(e) => {close()}}>
                        Close
                    </StyledButtonClose>
                </StyleContainer>)
           
        }
        if(close){return null}
        else { return null }
  
}
