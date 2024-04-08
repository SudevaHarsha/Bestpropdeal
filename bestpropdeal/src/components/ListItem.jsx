import React from 'react'

const ListItem = ({label, active, onClick }) => {
    return (
      <li className={`PropertiesSlider_Tabs__ListElements ${active ? 'PropertiesSlider_Tabs__ActiveListElements' : ''}`} onClick={onClick}>
        <div>
            <h2 className="PropertiesSlider_Tabs__Tabtiltle">{label}</h2>
        </div>
      </li> 
    );
  };

export default ListItem