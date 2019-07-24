import React, { Component } from 'react'
import { Redirect } from "react-router-dom";


export class Connection extends Component {
    state = {
        pseudo: '',
        goToChat: false,
    }
    handleChange = (e) => {
        const pseudo = e.target.value
        this.setState({ pseudo: pseudo })
    }
    handleSubmit = (e) => {
        e.preventDefault()  //empeche le comportement normal d'un submit d'un form
        this.setState({ goToChat: true })
    }
    render() {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>  //Push permet de mettre la pge precedente dans l'historique
        }
        return (
            <div className='connexionBox'>
                <form action="" className="connexion" onSubmit={this.handleSubmit}>
                    <input value={this.state.pseudo} onChange={this.handleChange} type="text" placeholder='Pseudo' required />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connection

//  1 : Quand l'utilisateur appuie sur le button submit la function handleSubmit est declenche qui va passer le state 'goToChat' de false a true
// 2 : Qundle le state goToChat passe a true alors grace au module redirect , on redirige l'utilisateur vers un path avec son pseudo
