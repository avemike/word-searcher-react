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
        if(!search.length) return true;
        else if(!name.length) return false;
        else if(name[0] !== search[0]) return this.isNameMatch(name.substring(1), search); 
        else return this.isNameMatch(name.substring(1), search.substring(1));
    }
    render() {
        const {data} = this.props;
        return (
            <div className="list">
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <ul>
                    {data.filter( item => { return this.isNameMatch.bind(this)(item.name.toLowerCase())}).map( item => {
                        console.log(item.name)
                        return (<li>
                            {item.name}
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}