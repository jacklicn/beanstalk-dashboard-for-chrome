import React from 'react/addons'; 

import store from '../store';
import events from '../events';

import ActionsMenuColumn from './ActionsMenuColumn';

class Overview extends React.Component {
	render () {

		var rows = [];

		for(let k of Object.keys(store.stats)) {
			let st = store.stats[k];

			rows.push(
				<tr>
					<td>{st.name}</td>
					<td>{st['total-jobs']}</td>

					<td>{st['current-jobs-ready']}</td>
					<td>{st['current-jobs-reserved']}</td>
					<td>{st['current-jobs-buried']}</td>

					<td>{st['current-using']}</td>
					<td>{st['current-waiting']}</td>
					<td>{st['current-watching']}</td>

					<ActionsMenuColumn queue={st.name} />
				</tr>
			);
		};

		return (
			<div>
				<h1>All Queues</h1>

				<table className="pure-table pure-table-bordered" width="100%">
					<thead>
						<tr>
							<td>name</td>
							<td>total</td>

							<td>ready</td>
							<td>reserved</td>
							<td>buried</td>

							<td>using</td>
							<td>waiting</td>
							<td>watching</td>

							<td></td>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
};

export default Overview;

