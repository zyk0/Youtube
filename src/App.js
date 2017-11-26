import React, { Component } from 'react';
//import './App.css';
import YTSearch from 'youtube-api-search';
import Search from './Search';

const API_KEY = 'fake ';

class App extends Component {
	constructor(){
		super();
		
		this.state = {
			searchTerm: '',
			videos: [],
			selectedVideo: ''
		};
	}
	
	handleGetVideos(searchTerm, event){
		console.log(" смотрим event.preventDefault();"); 
		console.log(event.preventDefault);
		
		event.preventDefault();
		
		YTSearch({key: API_KEY, term: searchTerm}, (data) => {
			this.setState({videos: data});
			const video = data[0];
			const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
			
			this.handleSelectVideo(videoUrl);
		});
	}
	
	handleInputChange(key, event){
		this.setState({[key]: event.target.value});
	}
	
	handleSelectVideo(videoUrl){
		this.setState({selectedVideo: videoUrl});
	}
	
	render() {
		const { searchTerm, videos, selectedVideo } = this.state; 
		//console.log('  братишки, я вам видосы принес ');
		return (
		<div className="">	
			<Search 
				onInptChange={this.handleInputChange.bind(this, 'searchTerm')}
				onBtnClick={this.handleGetVideos.bind(this, searchTerm)}
				value={searchTerm}
			/>
			
			<div className="">	
				{
					selectedVideo ? 
					(<div className="row">
						<div className="col s10 m6">
							<div className="card hoverable">
								<div className="card-image">
									<iframe width="560" height="215" src={selectedVideo} frameBorder="1" allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>) : null
				}
				<div className="">
					{videos.map((video, index) => {
						const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
						
						return(
							/////card material css//////
							<div className="row">
								<div className="col s8 m4">
								  <div className="card small hoverable" onClick={this.handleSelectVideo.bind(this, videoUrl)} key={index}>
									<div className="card-image">
									  <img src={video.snippet.thumbnails.medium.url} width="" height="" alt="screen" />
									  <span className="card-title"> </span>
									</div>
									<div className="card-content">
									  <p>
									  {video.snippet.title}
									  </p>
									</div>
									<div className="card-action">
									  <a href={videoUrl} target="_blank">смотреть </a>
									  <small>Youtube-канал: </small> {video.snippet.channelTitle}
									</div>
								  </div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
  }
}

export default App;