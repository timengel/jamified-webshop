import React from 'react';
import {sidebar} from './Sidebar.module.scss';
import {FaRegEye} from 'react-icons/fa';
import {MdSettingsEthernet, MdSpeed} from 'react-icons/md';
import {FiDatabase} from 'react-icons/fi'
import {BsGear} from 'react-icons/bs'
import {AiOutlineBlock} from 'react-icons/ai'
import SidebarSection from './SidebarSection';

const sectionIcons = {
  'back': <BsGear/>,
  'ssg': <MdSpeed/>,
  'front': <FaRegEye/>,
  'container': <AiOutlineBlock/>,
  'database': <FiDatabase/>,
  'other': <MdSettingsEthernet/>,
}

const Sidebar = ({categories}) => {
  console.log(categories);
  return (
      <div className={sidebar}>
        {
          categories.map((c, index) => {
            return (
                <SidebarSection key={index} name={c.name}>
                  {
                    sectionIcons[c.slug]
                  }
                </SidebarSection>
            );
          })
        }
      </div>
  );
};

export default Sidebar;
