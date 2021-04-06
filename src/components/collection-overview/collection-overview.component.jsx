import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview .component';
import { selectCollectionsPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collection }) => (
    <div className='collections-overview'>
        {collection.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key = {id} {...otherCollectionProps} />
        ))}
              
    </div>
);

const mapStateToProps = createStructuredSelector({
    collection : selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);