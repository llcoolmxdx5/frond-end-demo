import styled from 'styled-components'
// import { Border1px } from 'components/style/Border'

const CateContainer = styled.div`
  display: flex;
  height: 10.14rem;
  overflow: scroll;
  > div:first-child {
    width: 1.84rem;
    ul {
      li {
        line-height: 0.92rem;
        text-align: center;
        background-color: #E2E2E2;
        color: #424242;
        &.active {
          color: #d9772c;
          background-color: white;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0.63rem;
            right: 0.63rem;
            height: 2px;
            background-color: #d9772c;
          }
        }
      }
    }
  }
  > div:last-child {
    flex: 1;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-top: .2rem;
      li {
        width: 33.333%;
        line-height: 1rem;
        text-align: center;
      }
    }
  }
`

// const CateContainer = Border1px({
//   comp: Container
// })

export { CateContainer }
