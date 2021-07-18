import React from 'react';
import '../../App.css';


function PortfolioMedium(targetreturn) {
    return (
        <>
        {targetreturn.targetreturn>=11 ? (
  <>
<iframe id="iframe" src="https://docs.google.com/spreadsheets/d/1HVkiobjGnwy_lsS2FbWE3DZp4PUQhlHmWDSy7olLuCk/gviz/tq?tqx=out:html&tq&gid=705900349" frameborder="0" scrolling="no"></iframe>       
</>
) : (
<>
<iframe id="iframe" src="https://docs.google.com/spreadsheets/d/1HVkiobjGnwy_lsS2FbWE3DZp4PUQhlHmWDSy7olLuCk/gviz/tq?tqx=out:html&tq&gid=175990139" frameborder="0" scrolling="no"></iframe>
    
        </>
        )} </>
        )
};

export default PortfolioMedium;