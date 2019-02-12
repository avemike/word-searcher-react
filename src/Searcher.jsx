import React, {Component} from 'react';

export default class Searcher extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }
    handleChange(event) {
        const serchedText = event.currentTarget.value.toLowerCase();
        this.setState({search: serchedText});
    }
    isNameMatch(name, search = this.state.search) {
        const regSearch = '.*' + search.toLowerCase().split('').join('.*') + '.*' ;
        return Boolean(name.match(regSearch));
    }
    render() {
        const {data} = this.props;
        return (
            <div className="list">
                <div className="header">
                    <h1 className="">Search</h1>
                    <input class="form-control form-control-sm" name="search" type="text" placeholder="Search by name" aria-label="Search" onChange={this.handleChange.bind(this)}/>
                </div>
                <table class="table table-striped">                    
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.filter( item => { return this.isNameMatch.bind(this)(item.name.toLowerCase())}).map( (item, i) => {
                        return (
                              <tr>
                                <th scope="row">{i+1}</th>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                              </tr>
                        )
                    })}
                    </tbody>
                </table>
                
            </div>
        )
    }
}