import styled from 'styled-components'


const StyledButtonClose = styled.button`
width:100px;
height:40px;

font-size:20px;
border-radius:15px;
background:linear-gradient(90deg,#29487c 0%, #00f8ff 80%);
box-shadow: 1px 2px 2px 2px rgba(0,0,0,0.75);

&:active {
    
      box-shadow: none;
      transition:all 0.2s;
    }

`

 export default StyledButtonClose