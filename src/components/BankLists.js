import React, { Component } from 'react';
import Banks from './Banks';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CreateBank from "../CreateBank";

class BankLists extends Component {
   render() {

		  if (this.props.feedQuery && this.props.feedQuery.loading) {
		    return <div>Loading</div>
		  }

		  if (this.props.feedQuery && this.props.feedQuery.error) {
		    return <div>Error</div>
		  }

		  const banksToRender = this.props.feedQuery.banks


    return (
        <div className="uk-container uk-container-large">
        <div>
            <div id="create" data-uk-modal>
                <div class="uk-modal-dialog uk-padding-large" data-uk-overflow-auto>
                    <h2 className="uk-modal-title"> Create Bank</h2>
                    <CreateBank/>
                </div>
            </div>
        <button className="uk-button uk-margin-medium-bottom uk-button-primary" data-uk-toggle="target: #create">Create</button>
		  <div className="uk-overflow-auto">
			  <table className="uk-table uk-table-small uk-table-divider">
				  <thead>
				  <tr>
					  <th>#S/N</th>
					  <th>Bank Name</th>
					  <th>Edit</th>
					  <th>Delete</th>
				  </tr>
				  </thead>
				  <tbody>
        {banksToRender.map(bank => (
          <Banks key={bank.id} bank={bank}/>
        ))}
				  </tbody>
			  </table>
		  </div>
      </div>
      </div>
    )
  }
}

const FEED_QUERY = gql`
  query allBanks{
	  banks{
	    id
	    name
	  }
}
`

export default graphql(FEED_QUERY,{ name: 'feedQuery' }) (BankLists)