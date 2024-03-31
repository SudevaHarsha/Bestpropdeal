import React from 'react'

const LocalityTimer = ({time}) => {

    const timers = new Array(time).fill(0);
    const laggers = new Array(3-time).fill(0);

    const timer2 = {
        background: "rgb(242, 116, 86)"
    }
    const timer1 = {
        background: "rgb(198, 156, 92)"
    }
    const timerG = {
        background: "green"
    }

    const colors = time === 1 ? timerG :time === 3 ? timer2 : timer1;

  return <>
        <div className="LocalityRow_Indicator">
            {
                timers.map((item,index)=>{
                    return <div className="LocalityRow_IndicatorBar" style={colors}></div> 
                })
            }  
            {
                laggers.map((item,index)=>{
                    return <div className="LocalityRow_IndicatorBar" style={{ background: "rgb(236,221,238)" }}></div> 
                })
            }  
{/*             <div className="LocalityRow_IndicatorBar" style={{ background: "rgb(236,221,238)" }}></div> 
            <div className="LocalityRow_IndicatorBar" style={{ background: "rgb(236,221,238)" }}></div>  */}
        </div>
    </>
}

export default LocalityTimer