import React, { Component } from 'react';
import './Search.css';
//import TextField from 'material-ui/TextField';

class Search extends Component{
	
	pushbuttonsearch(){
		console.log('отслеживанием событие нажатие на кнопку поиска. request in youtube api');
	}
	
	render() {
		const { onBtnClick } = this.props;
		const { searchTerm } = this.props;
		const { onInptChange } = this.props;
			return (
				<form className="col s10" onSubmit={onBtnClick}>
						<div className="row">
							<div className="input-field col s8">
							<input id="search" type="search" required 
									placeholder="  напечатайте текст для поиска "
									value={searchTerm}
									onChange={onInptChange}
								/>
							<i className="material-icons">close</i>
							</div>	
						</div>
						<button onClick={this.pushbuttonsearch} className="btn waves-effect waves-light red accent-2" type="submit" name="action">искать</button>
						<p className="dvadva">показ по {3+2} видеороликов</p>	
				</form>	
			);
		}
}

export default Search;