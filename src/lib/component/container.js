
import styled from 'styled-components'



const StyleContainer = styled.div`

width: ${(item) => item.width+"px" };
height: ${(item) => item.height + "px" };
top:${(item) => item.top + "px" };
left:${(item) => item.left + "px" };
background-color:${(item) => item.bg};
border-radius:${(item) => item.borderRadius};
display:${(item) => item.display};
justify-content:${(item) => item.justifyContent};
flex-direction:${(item) => item.flexDirection};
align-items:${(item) => item.alignItems};
box-shadow:${(item) => item.boxShadow};
color:${(item) => item.color};
position:absolute  ;   
   `

export default StyleContainer