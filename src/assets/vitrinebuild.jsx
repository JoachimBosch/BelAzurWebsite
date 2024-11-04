import React, { useState, useContext } from 'react';
import MyContext from '../context/context';
import VitrinePage1 from '../components/vitrinepage1';
import VitrinePage2 from '../components/vitrinepage2';
import VitrinePage3 from '../components/vitrinepage3';
import VitrinePage4 from '../components/vitrinepage4';
import VitrinePage5 from '../components/vitrinepage5';

const VitrineBuild = () => {
  const {page} = useContext(MyContext)
  
    


  return (
      <>
          <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
              {/* Page launch */}

              {/* Page 1 */}
              {page === 1 && <VitrinePage1 />}

              {/* Page 2 */}
              {page === 2 && <VitrinePage2 />}

              {/* Page 3 */}
              {page === 3 && <VitrinePage3 />}

              {/* Page 4 */}
              {page === 4 && <VitrinePage4 />}

              {/* Page 5 */}
              {page === 5 && <VitrinePage5 />}
          </div>
      </>
  );
};

export default VitrineBuild;
