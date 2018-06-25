import React from 'react'
import clientsData from '../data/clients'

class Clients extends React.Component {
    clients = clientsData.map((client, index) => {
        return (
            <div className="client" key={index}>
                <img src={client.logo} alt={client.name}/>
            </div>
        )   
    })

    render() {
        return (
            <div className="section section--noTopPadding">
                <div className="container">
                    <div className="section__title">
                        {this.props.title}
                    </div>
                    <div className="clients">
                        {this.clients}
                    </div>
                </div>
            </div>
        )
    }
}

export default Clients