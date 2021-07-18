import React from 'react';
import '../../App.css';


function PortfolioHigh(targetreturn) {
    return (
        <>
{targetreturn.targetreturn>=11 ? (
  <>
  <iframe id="iframe" src="https://docs.google.com/spreadsheets/d/1HVkiobjGnwy_lsS2FbWE3DZp4PUQhlHmWDSy7olLuCk/gviz/tq?tqx=out:html&tq&gid=1815989271" frameborder="0" scrolling="no"></iframe>
</>
) : (
<>
<iframe id="iframe" src="https://docs.google.com/spreadsheets/d/1HVkiobjGnwy_lsS2FbWE3DZp4PUQhlHmWDSy7olLuCk/gviz/tq?tqx=out:html&tq&gid=1546856446" frameborder="0" scrolling="no"></iframe>
    
        </>
        )} </>
        )
};

export default PortfolioHigh;