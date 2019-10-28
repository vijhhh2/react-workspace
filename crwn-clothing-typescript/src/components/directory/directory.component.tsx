import React from "react";
import { connect } from 'react-redux';

import { SectionItem } from '../../models/directory.model';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from "../menu-item/menu-item.component";
import { AppState } from "../../redux/store";
import "./directory.component.scss";


interface IDirectoryProps {
  sections: SectionItem[];
}

const Directory: React.FC<IDirectoryProps> = ({sections}) => (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
);

const mapStateToProps = (state: AppState) => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);