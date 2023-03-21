import React, { useEffect } from 'react';

const HomePage = () => {

    useEffect(() => {
        const a = $ as any;
        a(function() {
          if(!a(".demo1")) {
            return;
          }
            a(".demo1").jCarouselLite({
                vertical: true,
                hoverPause:true,
                visible: 3,
                auto:2500,
                speed:1000
            });
        });
    }, [])

    return (<div className='demo1'>
    <ul>
      <li>
        <div className="info"><div style={{background: 'green', height: 100}}></div></div>
        <div className="clear"></div>
      </li>
      <li>
        <div className="info">
          <div style={{ background: 'red', height: 100 }}></div>
        </div>
        <div className="clear"></div>
      </li>
      <li>
        <div className="info"><div style={{ background: 'blue', height: 100 }}></div></div>
        <div className="clear"></div>
      </li>
      <li>
        <div className="info"><div  style={{ background: 'black', height: 100 }}></div></div>
        <div className="clear"></div>
      </li>
    </ul>
  </div>
  )
};

export default HomePage;