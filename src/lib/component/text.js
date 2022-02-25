import styled from 'styled-components'


const StyledText = styled.span`
margin-top:-100px;
color:${(item) => item.color};
font-size:${(item) => item.fontSize}
`

 export default StyledText