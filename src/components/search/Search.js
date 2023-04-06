/** @format */

import React, { Component } from 'react';
import axios from 'axios';
import ImageResults from '../imageresults/imageResults';
class Search extends Component {
	state = {
		searchText: '',
		apiUrl: 'https://pixabay.com/api/',
		apiKey: '21458018-a9172368e1a478da71fa37723',
		images: [],
	};
	onTextChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			axios
				.get(
					`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`,
				)
				.then((res) => this.setState({ images: res.data.hits }))
				.catch((err) => console.log(err));
		});
	};
	render() {
		console.log(this.state.images);
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<input
					type='text'
					style={{
						backgroundColor: 'black',
						color: 'white',
						marginTop: 100,
						paddingTop: 20,
						paddingLeft: 70,
						fontSize: 30,
						borderTopStyle: 'hidden',
						borderRightStyle: 'hidden',
						borderLeftStyle: 'hidden',
						outline: 'none',
						borderBottomStyle: 'groove',
					}}
					placeholder='search for images'
					name='searchText'
					value={this.state.searchText}
					onChange={this.onTextChange}
				/>
				<br />
				{this.state.images.length > 0 ? (
					<ImageResults images={this.state.images} />
				) : null}
			</div>
		);
	}
}

export default Search;
