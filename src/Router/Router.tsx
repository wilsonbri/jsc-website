import { curiProvider } from '@curi/react-dom';
import { curi } from '@curi/router';
import Browser from '@hickory/browser';
import * as React from 'react';
import jscLogo from '../Assets/JacksonStLogo.png';
import routes from './routes';
const history = Browser();
const curiRouter = curi(history, routes);
const Provider = curiProvider(curiRouter);

export class Router extends React.Component<{}, {}> {
	constructor(props: {}, state: {}) {
		super(props, state);
	}

	public render() {
		return (
			<Provider>
				{
					({ router, response, navigation }) => {
						const { body: Body } = response;
						return (
							<div className="container-fluid">
								<div className="d-none d-sm-block">
									<div className="row d-flex justify-content-center" style={{ background: 'white'}}>
										<a href="/">
											<img className="mt-3" src={jscLogo} alt="JSC Logo" height="150" width="450" />
										</a>

									</div>
									<div className="row d-flex justify-content-center" style={{ background: 'white'}}>
										<div className="col-lg-4 d-flex justify-content-center">
											<h5>1103 Jackson Street, Monroe, LA 71202</h5>
										</div>
									</div>
									<div className="row d-flex justify-content-center bg-secondary" style={{borderStyle: 'solid', borderTop: '', borderLeft: '', borderRight: '', borderBottomWidth: '2px'}}>
										<ul className="nav">
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/">Home</a>
											</li>
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/missions">Missions</a>
											</li>
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/events">Events</a>
											</li>
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/sermons">Sermons</a>
											</li>
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/memoryverses">Memory Verses</a>
											</li>
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/links">Links</a>
											</li>
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/directory">Directory</a>
											</li>
											<li className="nav-item font-weight-bold">
												<a className="nav-link" href="/contact">Contact Us</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="pt-3 mt-3">
									<Body response={response} router={router} />
								</div>
							</div>
						);
					}}
			</Provider>
		);
	}
}

export default Router;