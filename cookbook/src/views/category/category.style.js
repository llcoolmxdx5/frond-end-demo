import styled from 'styled-components'

const CategoryContainer = styled.div`
  height: 100%;
`

const HeadTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ul {
    width: 2.84rem;
    height: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 0.3rem;
    position: relative;
    transition: all 2s;
    &::before {
      content: '';
      width:1.42rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      background-color: white;
      position: absolute;
      left: 0;
      z-index: 1;
      transform: translate3d(${ ({ dir }) => dir === 'left' ? 0 : '100%'}, 0, 0);
    }
    li {
      width:1.42rem;
      flex: 1;
      z-index: 2;
    }
    .active {
      color: #EE7530;
    }
  }

`

export { CategoryContainer, HeadTab }
