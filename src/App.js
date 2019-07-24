import React, { Component, createRef } from 'react'
import './App.css'
import Form from './components/Form';
import Message from './components/Message';
import './components/animations.css'
//Firebase
import base from './base'
//Animation
import { CSSTransition, TransitionGroup } from 'react-transition-group'



class App extends Component {
	state = {
		messages: {},
		pseudo: this.props.match.params.pseudo,
	}
	messageRef = createRef()
	componentDidMount() {   //On va sync notre state avec notre bdd, on choisi donc la racine de la bdd avec le '/' et ensuite on chosit le state qu'on veut sync le contect et le state
		base.syncState('/', {
			context: this,
			state: 'messages'
		})
	}
	componentDidUpdate() {
		const ref = this.messageRef.current    //Avec ref on selectionne la div 
		ref.scrollTop = ref.scrollHeight  //scrolltop:nbr de pixel entre le haut de l'element etce aui la defile ///  scrollHeigt : hauteur en px du scroll 
		// console.log(ref.scrollHeight);
		// console.log(ref.scrollTop)
	}


	addMessage = (message) => {
		const messages = this.state.messages
		messages[`message-${Date.now()}`] = message
		this.setState({ messages: messages })

		//Methode pour supprimer aund le nombre de message depasse 10
		Object.keys(messages).slice(0, -10).forEach(key => {
			messages[key] = null
		})
		this.setState({ messages: messages })
	}

	isUser = (pseudo) => pseudo === this.state.pseudo

	render() {
		const messages = Object.keys(this.state.messages).map(key => (
			<CSSTransition
				timeout={200}
				classNames='fade'
				key={key}>
				<Message
					isUser={this.isUser}
					message={this.state.messages[key].message}
					pseudo={this.state.messages[key].pseudo}>
				</Message>
			</CSSTransition>
		))

		return (
			<div className='box'  >
				<div>
					<div className="messages" ref={this.messageRef}>
						<TransitionGroup className="message">
							{messages}
						</TransitionGroup>
					</div>
				</div>
				<Form
					pseudo={this.state.pseudo}
					addMessage={this.addMessage}
					length={140} />
			</div>
		)
	}
}

export default App
