import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.component.scss';

import MenuItem  from '../menu-item/menu-item.component';

const Directory = ({sections}) => {

        return (
            <div className='directory-menu'>
            {
                sections.map(({id, ...otherSectionProperties}) => 
                     (<MenuItem key={id} {...otherSectionProperties}/>)
                )
            }
        </div>
        );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);