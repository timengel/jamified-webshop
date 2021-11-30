import React from 'react';
import {
  sectionIcon,
  sectionName,
  sidebarSection,
} from './SidebarSection.module.scss';
import {IconContext} from 'react-icons';

const iconSizePx = '30';

const SidebarSection = ({name, children}) => {
  return (
      <button className={sidebarSection}>
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
      </button>
  );
};

export default SidebarSection;
