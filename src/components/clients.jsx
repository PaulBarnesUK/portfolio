import React from 'react'
import clientsData from '../data/clients'

class Clients extends React.Component {
    clients = clientsData.map((client, index) => {
        return (
            <div className="client" key={index}>
                <a href={client.link} target="_blank" rel="noreferrer">
                    <img src={client.logo.default} alt={client.name}/>
                </a>
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