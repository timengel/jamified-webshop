import React from 'react';
import {
  sidebar,
  sidebarSection,
  lastSidebarSection
} from './Sidebar.module.css';
import {FaMountain} from 'react-icons/fa';
import {
  MdSportsTennis,
  MdSportsBasketball,
  MdBusinessCenter
} from 'react-icons/md';
import {IconContext} from 'react-icons';

const sectionIcons = [
  <MdBusinessCenter/>,
  <MdSportsBasketball/>,
  <MdSportsTennis/>,
  <FaMountain/>,
];

const iconSizePx = '50';

const Sidebar = () => {
  return (
      <div className={sidebar}>
        {
          sectionIcons.map((icon, index) => {
            return (
                <div className={`
                ${sidebarSection}
                ${index === (sectionIcons.length - 1)
                    ? lastSidebarSection
                    : ''}`}>
                  <IconContext.Provider
                      value={{size: iconSizePx}}>
                    {icon}
                  </IconContext.Provider>
                </div>
            )
                ;
          })
        }
      </div>
  );
};

export default Sidebar;
