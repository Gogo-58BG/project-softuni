import { Component } from 'react';
import { Link } from 'react-router-dom';

import * as traxxasServices from '../../Services/traxxasServices';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            traxxas: [],
        }
    }

    componentDidMount() {
        traxxasServices.getAll()
            .then(res => this.setState({ traxxas: res }))

    }

    render() {
        return (
            <div className="content">
                <section className="Monster Trucks">
                    <h2>Monster Trucks</h2>                
                    {this.state.traxxas.filter(x => x.category == 'monster-trucks').map(x =>
                        <div key={x.objectId} className="articles">
                            <article>
                                <h3>{x.title}</h3>
                                <img className="detail-img" src={x.imageURL} alt="traxxas-image" />
                                <p>{x.description}</p>
                                <Link to={`/traxxas/details/${x.objectId}`}><button className="button">Details</button></Link>
                            </article>
                        </div>
                    )}

                </section>
                <section className="On Road Cars">
                    <h2>On Road Cars</h2>
                    {this.state.traxxas.filter(x => x.category == 'on-road-cars').map(x =>
                        <div key={x.objectId} className="articles">
                            <article>
                                <h3>{x.title}</h3>
                                <img className="detail-img" src={x.imageURL} alt="traxxas-image" />
                                <p>{x.description}</p>
                                <Link to={`/traxxas/details/${x.objectId}`}><button className="button">Details</button></Link>
                            </article>
                        </div>
                    )}
                </section>
                <section className="Short Course Trucks">
                    <h2>Short Course Trucks</h2>
                    {this.state.traxxas.filter(x => x.category == 'short-course-trucks').map(x =>
                        <div key={x.objectId} className="articles">
                            <article>
                                <h3>{x.title}</h3>
                                <img className="detail-img" src={x.imageURL} alt="traxxas-image" />
                                <p>{x.description}</p>
                                <Link to={`/traxxas/details/${x.objectId}`}><button className="button">Details</button></Link>
                            </article>
                        </div>
                    )}
                </section>
                <section className="Stadium Trucks">
                    <h2>Stadium Trucks</h2>
                    {this.state.traxxas.filter(x => x.category == 'stadium-trucks').map(x =>
                        <div key={x.objectId} className="articles">
                            <article>
                                <h3>{x.title}</h3>
                                <img className="detail-img" src={x.imageURL} alt="traxxas-image" />
                                <p>{x.description}</p>
                                <Link to={`/traxxas/details/${x.objectId}`}><button className="button">Details</button></Link>
                            </article>
                        </div>
                    )}
                </section>
                {/* <!-- No articles message -->
            <h3 className="no-articles">No articles yet</h3> */}
            </div>
        );
    }
}

export default Main;