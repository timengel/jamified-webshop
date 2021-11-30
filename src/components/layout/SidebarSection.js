import React from 'react';
import {
  sectionIcon,
  sectionName,
  sidebarSection,
} from './SidebarSection.module.scss';
import {IconContext} from 'react-icons';
import Link from 'next/link';

const iconSizePx = '30';

const SidebarSection = ({name, slug, children}) => {
  return (
      <Link href={`/categories/${slug}`}>
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
      </Link>
  );
};

export default SidebarSection;
