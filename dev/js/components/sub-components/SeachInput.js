import React from 'react';


export default class SeachInput extends React.Component {
    render() {
        return (
            <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control" type="text" onChange={this.props.handleChange}  value={this.props.value} placeholder="Search Users"   />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.props.henlderonClick} type="button">Search User</button>
                </div>
            </div>
        )
    }
}
