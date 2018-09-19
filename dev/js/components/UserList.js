import React from 'react';
import UserDetails from './sub-components/UserDetails';
import SeachInput from './sub-components/SeachInput';


export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getRepo = this.getRepo.bind(this);
    }


    handleChange(e) {
        let name = e.target.value;
        this.setState({ value: name });
    }

    getUser(e) {
        fetch(`https://api.github.com/users/${this.state.value}`)
            .then(response => response.json())
            .then(items => this.setState({ data : items }))
    }

    getRepo(e){
        fetch(`https://api.github.com/users/${this.state.value}/repos?per_page=250`)
            .then(response => response.json())
            .then(items => console.log(items))
    }

    render() {
        return (
            <div className="user-list col-8 mx-auto">
                <SeachInput value={this.state.value} handleChange={this.handleChange} henlderonClick={this.getUser} />

                <UserDetails key={this.state.data.id} 
                imageSrc ={this.state.data.avatar_url}
                name = {this.state.data.name}
                location = {this.state.data.location}
                followers = {this.state.data.followers}
                following= {this.state.data.following}
                repos = {this.state.data.public_repos}
                email = {this.state.data.email}
                getRepo ={this.getRepo}/>                         
                
            </div>
        );
    }
}


