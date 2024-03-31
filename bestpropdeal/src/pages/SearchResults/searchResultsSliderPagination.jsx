import React from 'react'

const searchResultsSliderPagination = () => {
    return <>
        <div style={{ display: "flex", "justify-content": "center", "max-width": "100%", "flex-wrap": "nowrap", position: "absolute", width: "100%", padding: "7px 16px 0px", "align-self": "center", "z-index": 1001, filter: "drop-shadow(rgb(34, 34, 34) 0px 1px 8px)", transition: "opacity 400ms ease-in-out 0s", "margin-left": "0px", bottom: "50px", left: "0px", opacity: 1, "z-index": "3456" }}>
            <div className="SearchResults_ProgressBar">
                <div className="SearchResults_ProgressBarInnerCont"></div>
            </div>
        </div>
    </>
}

export default searchResultsSliderPagination