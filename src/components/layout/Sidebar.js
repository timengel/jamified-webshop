import React from 'react';
import {sidebar} from './Sidebar.module.scss';
import {FaRegEye} from 'react-icons/fa';
import {MdSettingsEthernet, MdSpeed} from 'react-icons/md';
import {FiDatabase} from 'react-icons/fi'
import {BsGear} from 'react-icons/bs'
import {AiOutlineBlock} from 'react-icons/ai'
import SidebarSection from './SidebarSection';
import {generateUniqueID} from '../../../lib/crypto';

const sectionIcons = {
  'back': <BsGear/>,
  'ssg': <MdSpeed/>,
  'front': <FaRegEye/>,
  'container': <AiOutlineBlock/>,
  'database': <FiDatabase/>,
  'other': <MdSettingsEthernet/>,
}

const Sidebar = ({categories}) => {
  return (
      <div className={sidebar}>
        {
          categories.map(c => {
            return (
                <SidebarSection key={generateUniqueID()}
                                slug={c.slug}
                                name={c.name}>
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
