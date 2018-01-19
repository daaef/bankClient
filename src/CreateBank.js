import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreateBank extends Component {
    state = {
        bankName: ''
    }

    render() {
        return (
            <div>
                <div className="uk-margin">
                    <input
                        className="uk-input"
                        value={ this.state.bankName }
                        onChange={(e) => this.setState({ bankName: e.target.value }) }
                        type='text'
                        placeholder='Enter Bank Name'
                    />
                </div>

                <button className="uk-button uk-margin-bottom uk-button-default" onClick={() => this._createBank() }>
                    Submit
				</button>
            </div>
        )
    }

    _createBank = async () => {
        const { bankName } = this.state
        await this.props.createBankMutation({
            variables: {
                bankName
            }
        })
        this.setState({ bankName: '' })
        console.log('clicked')
    }
}

//
const POST_MUTATION = gql`
    # 2
    mutation CreateBankMutation($bankName: String!) {

        createBank(
            input: {name: $bankName}
        ) 
        
        {
            bank {
                id,
                name
            }
        }
    }
`

export default graphql(POST_MUTATION, { name: 'createBankMutation' })(CreateBank)