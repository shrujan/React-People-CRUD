import React, { Component } from 'react';

import Header from '../component/Header/Header'
import Modal from '../component/Modal/Modal'

class App extends Component {
   

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }

    }

    showHideModal() {   
        
       this.setState({
           ...this.state,
           showModal: !this.state.showModal
       })
    }

    render () {
        return (
            <div>  
                { this.state.showModal === true ? <Modal />: null }

                <Header
                    toggleModal = { this.showHideModal.bind(this) }
                    showModal = { this.state.showModal }
                ></Header>
             
            </div>
        )
    }
}

export default App;