import React from 'react'

const ListItem = ({label, active, onClick }) => {
    return (
      <li className={`PropertiesSlider_Tabs__ListElements ${active ? 'PropertiesSlider_Tabs__ActiveListElements' : ''}`} onClick={onClick}>
        <a>
            <h2 className="PropertiesSlider_Tabs__Tabtiltle">{label}</h2>
        </a>
      </li> 
    );
  };

export default ListItem