import React from 'react';
import DataServiceContext from '../data-service-context';

const WithDataService = () => (Wrapped) => {

    return (props) => {

        return (

            <DataServiceContext.Consumer>
                {
                    (DataService) => {
                        
                        return <Wrapped {...props} DataService={DataService} />
                    }
                }
            </DataServiceContext.Consumer>

        )
    }
};

export default WithDataService;