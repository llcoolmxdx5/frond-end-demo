import styled from 'styled-components'
import { Border1px } from '../style/Border'

const SearchContainer = styled.div`
  background: ${({ bgcolor }) => bgcolor};
  height: 1.3rem;
  padding: 0.3rem;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  background: white;
  i {
    width: 0.29rem;
    height: 0.29rem;
    display: block;
    background: url(${require('images/search.png')});
    background-size: cover;
  }
  input {
    width: 4rem;
  }
`;

const borderContainer = Border1px({
  comp: InputContainer,
  bordercolor: '#666',
  radius: 0.15
})

export { SearchContainer, InputContainer, borderContainer }
