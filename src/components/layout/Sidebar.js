import React from 'react';
import {
  sidebar
} from './Sidebar.module.scss';
import {FaMountain, FaRunning} from 'react-icons/fa';
import {
  MdSportsTennis,
  MdSportsBasketball,
  MdBusinessCenter
} from 'react-icons/md';
import SidebarSection from './SidebarSection';

const sections = [
  {
    name: 'Style',
    icon: <MdBusinessCenter/>
  },
  {
    name: 'Basketball',
    icon: <MdSportsBasketball/>
  },
  {
    name: 'Tennis',
    icon: <MdSportsTennis/>
  },
  {
    name: 'Running',
    icon: <FaRunning/>
  },
  {
    name: 'Outdoor',
    icon: <FaMountain/>
  },
];

const Sidebar = () => {
  return (
      <div className={sidebar}>
        {
          sections.map((s, index) => {
            return (
                <SidebarSection key={index}
                                name={s.name}
                                bottomSection={`${(index === (s.length - 1))}`}>
                  {
                    s.icon
                  }
                </SidebarSection>
            );
          })
        }
      </div>
  );
};

export default Sidebar;
