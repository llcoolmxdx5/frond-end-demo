import styled from 'styled-components'

const GridContainer = styled.div`
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  color: #393939;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    li {
      /* height: 1rem; */
      width: ${({column}) => 100/column}%;
      display: flex;
      flex-direction: column;
      padding: 0.08rem;
      img {
        width: 100%;
        border-radius: 0.1rem;
      }
      span {
        display: block;
        text-align: center;
        line-height: 0.35rem;
      }
      /* flex: 1; */
    }
  }
`

export default GridContainer
