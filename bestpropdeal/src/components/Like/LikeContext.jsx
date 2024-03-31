import { useState, useEffect, useContext, createContext } from "react";

const LikeContext = createContext();

const LikeProvider = ({children})=>{
    const [like, setLike] = useState([]);

      /* axios.defaults.headers.common['Authorization']= auth?.token; */

      useEffect(()=>{
        const data=localStorage.getItem('like');
        console.log(data);
        if(data){
          /* const allLikes = data.split(',');
          console.log(data, typeof allLikes,allLikes); */
           /*  const parseData = JSON.parse(data); */
            setLike(
                [...like,
                ...JSON.parse(data)]
            );
          
        }
        console.log(like);
      },[])
    return (
    <LikeContext.Provider value={[like, setLike]}>
      {children}
    </LikeContext.Provider>

    )
};

const useLike = ()=> useContext(LikeContext);

export {useLike, LikeProvider};