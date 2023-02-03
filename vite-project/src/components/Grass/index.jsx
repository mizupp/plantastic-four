import React from "react";
// import "./classgrass"
import "./index.css"

const Grass = () => {
  (function(){
    function getRndNum(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }
    for(let x = 0; x < 120; x += getRndNum(2,6)){
      let rndNum = getRndNum(70,100)
      let el = document.createElement('div');
      el.classList.add('grass');
      el.style.width = rndNum + 'vmin';
      el.style.height = rndNum + 'vmin';
      for (let y = 0; y < 3; y++){
        let blade = document.createElement('div');
        blade.classList.add('grass__blade--' + (y + 1));
        blade.classList.add('grass__blade');
        blade.style.setProperty("animation-delay", x + "0ms");
        el.appendChild(blade);
      }
      el.style.left = x + 'vw';
      document.querySelector('body').appendChild(el);
    }
  })();
return (
  <div>
      <div>
        
        <div className="grass">
          <div className="grass__blade grass__blade--1" />
          <div className="grass__blade grass__blade--2" />
          <div className="grass__blade grass__blade--3" />
        </div>
      </div>
</div>
  )
}

export default Grass;