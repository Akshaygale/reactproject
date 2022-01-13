
import React from "react";
const HealtTipsRepeat = ({ updateHealthToRender }) => {return (
    <ul>
      {updateHealthToRender.map((post, box,index) => (
        <div key={index}>
          {post.box}
          {post.title}
        </div>
      ))}
    </ul>
  );
};
export default HealtTipsRepeat;


