import React, {Component} from 'react';
import { SearchContainer, InputContainer, borderContainer } from './Search.style'

class Search extends Component {
  render() {
    let InputWrapper = this.props.hasborder ? borderContainer : InputContainer;
    return (
      <div>
        <SearchContainer {...this.props}>
          <InputWrapper {...this.props}>
            <i />
            <input type='text' placeholder={this.props.placeholder} />
          </InputWrapper>
        </SearchContainer>
      </div>
    );
  }
}

export default Search;