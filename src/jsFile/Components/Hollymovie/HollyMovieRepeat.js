
import React from "react";
const HollyMovieRepeat = ({ updatehollywoodToRender }) => {return (
    <ul>
      {updatehollywoodToRender.map((post,box,line) => (
        <div key={box}>
            <div className='Bulidrline'/>
          {post.box}
          {post.line}
          

        </div>
      ))}
    </ul>
  );
};
export default HollyMovieRepeat;


