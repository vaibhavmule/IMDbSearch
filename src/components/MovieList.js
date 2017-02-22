import React, { Component } from 'react';
import { ScrollView, TextInput, View, Text } from 'react-native';


class MovieList extends Component {
  constructor(props) {
    super(props);

    this.handleSearchText = this.handleSearchText.bind(this);
    this.state = {loaded:false,movies: [], searchText: '', error: ''};
  }

	renderMovies() {
		return this.state.movies.map(movie => 
			<Text key={movie.imdbID}>{movie.Title}</Text>)
	}

	renderLoading() {
		if (this.state.error) {
			return <Text>{this.state.error}</Text>
		} else {
			return <Text>Laoding..</Text>
		}
		
	}

	handleSearchText(searchText) {
		this.setState({searchText})
		this.setState({loaded:false})

		fetch('http://www.omdbapi.com/?s=' + searchText)
	    .then((response) => response.json())
	    .then((responseData) => {
	    	const error = responseData['Error']
	    	if (error) {
	    		this.setState({ loaded:false, movies: [], error: error })
	    	} else {
	    		this.setState({ loaded:true, movies: responseData['Search'], error: ''})
	    	}
	  	})
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
	      	{this.state.loaded ? this.renderMovies(): this.renderLoading()}
	      </ScrollView>
			</View>
		)
	}

}

export default MovieList;