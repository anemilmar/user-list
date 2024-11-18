import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { fname, lname, email } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="fname">FirstName</label>
                <input 
                    type="text" 
                    name="fname" 
                    id="fname"
                    value={fname} 
                    onChange={this.handleChange} />
                <label for="lname">LastName</label>
                <input 
                    type="text" 
                    name="lname" 
                    id="lname"
                    value={lname} 
                    onChange={this.handleChange} />
                    <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
