import React, { Component } from 'react';
import { ScrollView, TextInput, View, Text } from 'react-native';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.state = { movies: [], searchText: ''};
  }

	renderMovies() {
		return this.state.movies.map(movie => 
			<Text key={movie.imdbID}>{movie.Title}</Text>)
	}

	handleSearchText(searchText) {
		this.setState({searchText})

		fetch('http://www.omdbapi.com/?s=' + searchText)
	    .then((response) => response.json())
	    .then((responseData) => this.setState({ movies: responseData['Search'] }))
	    .catch((error) => {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				 // ADD THIS THROW error
				  throw error;
			});
	}

	render() {
		return (
			<View>
	      <TextInput
	        onChangeText={this.handleSearchText}
	        value={this.state.searchText}
	        placeholder='Search movies'
	        autoFocus={true}
	      />
	      <ScrollView>
	      	{this.renderMovies()}
	      </ScrollView>
			</View>
		)
	}

}

export default MovieList;