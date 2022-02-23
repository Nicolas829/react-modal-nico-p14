# Documentation
width            width of the container = half of window width by default
height           height of the container = half of window height by default
position         position of the container = absolute by default
bg               choose your bg = white by default
top              position of your container on y= 10% of height
left             position of your container on x=center by default
borderRadius     border-radius= none by defatul

    

    //const ModalText
Text                type your information
fontSize           "em" = 1 by default
color               "black" by default
textTop             
    const [text, setText] = useState("react Modal Version 1.0")
    const [fontSize, setFontSize] = useState("1")
    const [color, setColor] = useState("black")
    const [textTop, setTextTop] = useState(height / 2)
    const [textLeft, setTextLeft] = useState(width / 2)
    const [marginRight, setMarginRight]=useState()