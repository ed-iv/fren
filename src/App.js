import React, { useState } from 'react';
import Fren from './components/Fren';
import { left, right } from './positions';



const App = () => {
    const [position, setPosition] = useState(left);
    
    const togglePos = ({keyCode}) =>  {
        const newPos = position === left ? right : left;
        setPosition(newPos);
    };

    return (
                
            <div
                style={{ backgroundColor: "#848052" }}
                className="focus:outline-none flex flex-col items-center justify-center h-screen w-screen cursor-pointer"
                onClick={(e) => togglePos(e)}
            >   
                <div 
                    className="select-none font-mono text-lg text-black text-opacity-60"
                >
                    click frantically to bob and weave!
                </div>    
                <Fren                                   
                    currPosition={position}
                />
            
        </div>
    );

}

export default App;