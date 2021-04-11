import styled from 'styled-components'

const Top10Container = styled.div`
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  background-color: #f5f5f5;
  h2 {
    line-height: 0.94rem;
    font-size: 0.3rem;
    font-weight: 400;
    color: #909090;
    padding-left: 0.23rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    li {
      /* height: 1rem; */
      width: ${({ column }) => 100 / column}%;
      display: flex;
      flex-direction: column;
      padding: 0.08rem;
      background-color: white;
      img {
        width: 100%;
      }
      div {
        text-align: center;
        h3 {
          font-size: 0.3rem;
          font-weight: 300;
          color: #090909;
        }
        span {
          display: block;
          text-align: center;
          line-height: 0.35rem;
        }
      }
    }
  }
`

export default Top10Container
