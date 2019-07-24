import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)
        this.setState({ message: '', length: length })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createMessage()


    }
    handleChange = (e) => {
        const message = e.target.value
        const length = this.props.length - message.length
        this.setState({ message: message, length: length })

    }
    handleKeyUp = (e) => {  //Si l'utilisateur appuie sur entree alors on declenche la function createMessage()
        if (e.key === 'Enter') {
            this.createMessage()
        }
    }
    render() {
        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
                onKeyUp={this.handleKeyUp}>
                <textarea value={this.state.message} onChange={this.handleChange} required maxLength={this.props.length} ></textarea>
                <div className="info">
                    {this.state.length}
                </div>
                <button type="submit">Send !</button>
            </form>
        )
    }
}
// Quand l'utilisateur submit le form il declenche la function handleSubmit() qui ensuite declenche la fonction createMessage()

//Dans cette function on recupere les props de form qu'on acree dans app.js , c'est a dire le pseudo et la function add message, on stocke ensuit dans une var le seudo et notre mesage tape

//la function addMessage est ensuite call avec comme parametre notre message et son pseudo
//elle cree uensuite une cleprimaire pour notre message et enregistre ce meassage et sa cle primaire dans le state de app.js