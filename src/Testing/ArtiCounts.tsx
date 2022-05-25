import React, { FC, useState } from "react";
import Tables from "./Tables";

const ArtiCounts : FC<any> = () =>{
    const [Count, setCounts] = useState<number>(0)
   
    return(
        <div>
            <div className={`clicks-${Count}`}>
               {Count}
            </div>
            <button onClick={()=>setCounts((Count + 1))}>
                    Increment
                </button>
                <h1>Article Details</h1>
<Tables />
        </div>
    )
}

export default ArtiCounts