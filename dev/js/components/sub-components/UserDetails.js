import React from 'react';

export default class UserDetails extends React.Component {

    render() {
        return (
            <div className="col-md-6 user-details mt-3 mb-3">
                <div className="row coralbg white">
                    <div className="col-md-6 no-pad">
                        <div className="user-image pl-5 pt-4">
                            <img src={this.props.imageSrc} className="img-responsive rounded-circle" />
                        </div>
                    </div>
                    <div className="col-md-6 no-pad">
                        <div className="user-pad">
                            <h3>{this.props.name}</h3>
                            <h4 className="white"><i className="fa fa-check-circle-o"></i>{this.props.location}</h4>
                            <h4 className="white"><i className="fa fa-twitter"></i> {this.props.email}</h4>
                            <button type="button" className="btn btn-labeled btn-info" href="#" onClick={this.props.getRepo}>
                                <span className="btn-label"><i className="fa fa-pencil"></i></span>REPOSITORIES</button>
                        </div>

                    </div>
                </div>
                <div className="row overview">
                    <div className="col-md-4 user-pad text-center">
                        <h3>FOLLOWERS</h3>
                        <h4>{this.props.followers}</h4>
                    </div>
                    <div className="col-md-4 user-pad text-center">
                        <h3>FOLLOWING</h3>
                        <h4>{this.props.following}</h4>
                    </div>
                    <div className="col-md-4 user-pad text-center">
                        <h3>REPOSITORIES</h3>
                        <h4>{this.props.repos}</h4>
                    </div>
                </div>
            </div>
        );
    }
}