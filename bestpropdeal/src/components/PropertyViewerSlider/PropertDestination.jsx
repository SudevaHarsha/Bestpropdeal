import React from 'react'
import "../../pages/Property/Property.css"

const PropertDestination = ({property}) => {

    const Navigation = ["home",`Properties In ${property.location.split(',')[1]}`,`Properties in ${property.location.split(',')[0]}`,property.Title];

    return <>
        <div className="PropertyCard_NavigatorCont">
            <div className="PropertyCard_NavigatorRouteCont">
                {Navigation.map((Navigators) => {
                    return <div className="PropertyCard_NavigatorRouteInline">
                        <link to="/"></link>
                        <div className="PropertyCard_NavigatorArrow">{Navigators}</div>
                        <div className="PropertyCard_NavigatorArrow">{'>'}</div>
                    </div>
                })}
            </div>
        </div>
    </>
}

export default PropertDestination