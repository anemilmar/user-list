import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
        nextId: 1 // Счетчик для следующего ID
    };

    removeCharacter = index => {
        const { characters } = this.state;

        // Удаляем персонажа по индексу
        this.setState({
            characters: characters.filter((_, i) => i !== index)
        });
    }

    handleSubmit = character => {
        const newCharacter = {
            ...character,
            id: this.state.nextId // Используем текущий счетчик ID
        };

        // Обновляем состояние с новым персонажем и увеличиваем счетчик
        this.setState(prevState => ({
            characters: [...prevState.characters, newCharacter],
            nextId: prevState.nextId + 1 // Увеличиваем счетчик ID
        }));
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <h1>Список пользователей</h1>
                <p>Добавьте персонажа с именем, фамилией и электронной почтой в таблицу.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Добавить нового</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;