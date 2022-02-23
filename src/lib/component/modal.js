
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { useState, useEffect } from 'react'


const DivContainer = styled.div`
width: ${(item) => item.width+"px" };
height: ${(item) => item.height + "px" };
top:${(item) => item.top + "px" };
left:${(item) => item.left + "px" };
position: ${(item) => item.position }; 
background-color:${(item) => item.bg};
border-radius:${(item) => item.borderRadius};
display:${(item) => item.display};
justify-content:${(item) => item.justifyContent};
flex-direction:${(item) => item.flexDirection};
align-items:${(item) => item.alignItems};
box-shadow:${(item) => item.boxShadow};
   `

const ModalText = styled.div`
  
   font-size:${(item) => item.fontSize+"px"};
   color:${(item) => item.color};
   margin-top:${(item) => item.textTop+ "px"};
   margin-left:${(item) => item.textLeft+ "px"};  
  
   `


console.log(DivContainer.width)


function Modal(props) {
    //const Container
    const [width, setWidth] = useState(window.innerWidth / 2)
    const [height, setHeight] = useState(window.innerHeight / 4)
    const [position, setPosition] = useState("absolute")
    const [bg, setBg] = useState("white")
    const [top, setTop] = useState(height * 0.5)
    const [left, setLeft] = useState(width * 0.5)
    const [borderRadius, setBorderRadius] = useState("50px 150px 200px 250px")
    const [display, setDisplay] = useState('flex')
    const [flexDirection, setFlexDirection] = useState("row")
    const [justifyContent, setJustifyContent] = useState("center")
    const [alignItems, setAlignItems] = useState("center")
    const [boxShadow, setBoxShadow]= useState('2px 6px 29px 10px rgba(0,0,0,0.75)')

    //const ModalText
    const [text, setText] = useState("react Modal Version 1.0")
    const [fontSize, setFontSize] = useState("17")
    const [color, setColor] = useState("black")
    const [textTop, setTextTop] = useState("0")
    const [textLeft, setTextLeft] = useState("0")
   
    
    

    useEffect(() => {
         //const Container
        if (props.width) { setWidth(props.width) }
        if (props.height) { setHeight(props.height) }
        if (props.position) { setPosition(props.position) }
        if (props.bg) { setBg(props.bg) }
        if (props.top) { setTop(props.top) }
        if (props.left) { setLeft(props.left) }  
        if (props.borderRadius) { setBorderRadius(props.borderRadius) }
        if (props.display) { setDisplay(props.display) } 
        if (props.flexDirection) { setFlexDirection(props.flexDirection) } 
        if (props.justifyContent) { setJustifyContent(props.justifyContent) } 
        if (props.alignItems) { setAlignItems(props.alignItems) } 
        if(props.boxShadow){setBoxShadow(props.boxShadow)}

         //const ModalText
        if (props.text) { setText(props.text) }
        if (props.fontSize) { setFontSize(props.fontSize) }
        if (props.color) { setColor(props.color) }
        if (props.textTop) { setTextTop(props.textTop) }
        if (props.textLeft) { setTextLeft(props.textLeft) }
       
       
    })

    if (props.show===true) {
        return (
            <DivContainer
            width={width}
            height={height}
            position={position}
            bg={bg}
            top={top}
            left={left}
            borderRadius={borderRadius}
            display={display}
            alignItems={alignItems}
            justifyContent={justifyContent}
            flexDirection={flexDirection}
            boxShadow={boxShadow}    
        >       <ModalText
                fontSize={fontSize}
                color={color}
                textTop={textTop}
                textLeft={textLeft}
               
                >
                    {text}
                </ModalText>
            </DivContainer>)
           
    }
    else { return <div></div> }
}

export default Modal