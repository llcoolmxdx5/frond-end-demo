import styled from 'styled-components';

const Container = styled.div`
  width:200px;
  height:100px;
  background:${(props) => { return props.color }};
  font-size:30px;
  h1 {
    font-size:50px;
  }
`;

export {
  Container
}
