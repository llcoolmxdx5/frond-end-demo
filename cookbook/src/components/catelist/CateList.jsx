import React from 'react'
import { CateContainer } from './cate.style'

const Cate = (props) => {
  let { list, nav, changeNav } = props;
  let contentList = list[nav] || [];
  return (
    <CateContainer>
        <div>
          <ul>
            {
              Object.keys(list).map((item, index) => {
                return <li
                  key={index}
                  className={item === nav ? 'active' : ''}
                  onClick={() => changeNav(item)}
                >{item}</li>
              })
            }
          </ul>
        </div>
        <div>
          <ul>
            {
              contentList.map((item, index) => {
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
      </CateContainer>
  )
}

export default Cate
