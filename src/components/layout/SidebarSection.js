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
  const [didHydrate, setDidHydrate] = React.useState(false);
  React.useEffect(() => {
    setDidHydrate(true);
    console.log('Hydrated: SidebarSection ' + slug)
  }, []);

  return (
      // <Link href={`/categories/${slug}`}>
      <button
          onClick={() => console.log('Click: Hydrated SidebarSection: ' + name)}
          className={sidebarSection}
          style={{
            background: didHydrate
                ? "#34eb9e"
                : "#ff788c",
          }}>
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
      // </Link>
  );
};

export default SidebarSection;
