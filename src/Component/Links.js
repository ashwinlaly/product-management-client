import React, { Fragment } from 'react';
import {useQuery, gql} from '@apollo/client';

const LINKS_QUERY = gql`
    {
        feeds {
            links {
              id
              description
            }
          }
    }
`

const Lists = () => {
    const {data} = useQuery(LINKS_QUERY)
    
    return (
        <Fragment>
            {data && (
                <>
                {data.feeds.links.map((link) => (
                    <div key={link.id}>{link.description}</div>
                ))}
                </>
            )}
        </Fragment>
    )
}

export default Lists;