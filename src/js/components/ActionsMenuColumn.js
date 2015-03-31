import React from 'react/addons'; 
import events from '../events';

class ActionsMenuColumn extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			open: false
		};
	}

	_gotoQueue () {
		this._toggleMenu();
		window.location.hash = "/queue/" + this.props.queue;
	}

	_toggleMenu () {
		this.setState({
			open: !this.state.open
		});
	}

	_emptyQueue () {
		events.emit('queue-empty', this.props.queue);
		this._toggleMenu();
	}

	render () {

		let menu;

		if(this.state.open) {
			menu = (
				<div className="pure-menu custom-actions-menu">
					<ul className="pure-menu-list">
						<li className="pure-menu-item">
							<a onClick={this._emptyQueue.bind(this)} className="pure-menu-link">
								<i className="fa fa-trash-o"></i>
								<span>Empty</span>
							</a>
						</li>
						<li className="pure-menu-item">
							<a onClick={this._gotoQueue.bind(this)} className="pure-menu-link">
								<i className="fa fa-search"></i>
								<span>Details</span>
							</a>
						</li>
					</ul>
				</div>
			);
		}

		return (
			<td className="custom-actions">
				<div className="custom-actions-inner">
					<a onClick={this._toggleMenu.bind(this)} className="pure-button">
						<i className="fa fa-cog"></i>
						Actions
					</a>
					{menu}
				</div>
			</td>
		);
	}
};

export default ActionsMenuColumn;

