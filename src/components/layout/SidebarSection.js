import React from 'react';
import {
  sidebarSection,
  bottomSidebarSection,
  sectionName,
  sectionIcon,
} from './SidebarSection.module.scss';
import {IconContext} from 'react-icons';

const iconSizePx = '35';

const SidebarSection = ({key, name, bottomSection, children}) => {
  return (
      <div key={key}
           className={`
           ${sidebarSection}
           ${bottomSection ? bottomSidebarSection : ''}`}>
        <div className={sectionName}>
          {
            name
          }
        </div>
        <div className={sectionIcon}>
          <IconContext.Provider
              value={{size: iconSizePx}}>
            {
              children
            }
          </IconContext.Provider>
        </div>
      </div>
  );
};

export default SidebarSection;
