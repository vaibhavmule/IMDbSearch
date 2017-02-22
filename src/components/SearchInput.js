import React, { Component } from 'react';
import { TextInput } from 'react-native';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  render() {
    return (
      <TextInput
        onChangeText={(searchText) => this.setState({searchText})}
        value={this.state.searchText}
        placeholder='Search movies'
        autoFocus={true}
      />
    );
  }
}

export default SearchInput;