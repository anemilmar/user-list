import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            fname: '',
            lname: '',
            email: '',
            error: '' // Состояние для хранения сообщения об ошибке
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        // Проверяем, является ли ввод допустимым (только буквы и пробелы)
        if (name === 'fname' || name === 'lname') {
            const regex = /^[A-Za-zА-Яа-яЁё\s]*$/; // Регулярное выражение для проверки
            if (regex.test(value) || value === '') { // Позволяем пустое значение
                this.setState({ [name]: value });
            }
        } else {
            this.setState({ [name]: value });
        }
    }

    onFormSubmit = event => {
        event.preventDefault();

        const { fname, lname, email } = this.state;

        // Проверка на пустые поля
        if (!fname || !lname || !email) {
            this.setState({ error: 'Имя, фамилия и электронная почта не могут быть пустыми.' });
            return;
        }

        // Сброс ошибки и отправка данных
        this.setState({ error: '' });
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { fname, lname, email, error } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="fname">Имя</label>
                <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={fname}
                    onChange={this.handleChange}
                />
                <label htmlFor="lname">Фамилия</label>
                <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={lname}
                    onChange={this.handleChange}
                />
                <label htmlFor="email">Электронная почта</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Сообщение об ошибке */}
                <button type="submit">Отправить</button>
            </form>
        );
    }
}

export default Form;