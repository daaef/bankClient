import React, { Component } from 'react'

class Bank extends Component {

 render() {
    return (
        <tr>
            <td>
              {this.props.bank.id}
            </td> 
            <td>
              {this.props.bank.name}
            </td> 
            <td>
              <a className="uk-button uk-button-secondary" data-uk-icon="icon: file-edit" href="#">Edit</a>
            </td>
            <td>
              <a className="uk-button uk-button-danger" data-uk-icon="icon: trash" href="#">Delete</a>
            </td>
        </tr>
    )
  }

}

export default Bank