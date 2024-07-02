import React from 'react';
import Random from '../utils/Number';
function randomBottom(t) {
  let btm = getNumber();
  if (btm === t) {
    return randomBottom(t);
  }
  return btm;
}
function getNumber() {
  return Random(0, 11);
}
export default function Box(props) {
  let random = props.random ?? true;
  let images = [...Array(4).keys()];
  let top = 10;
  let bottom = 11;
  if (random) {
    top = getNumber();
    bottom = randomBottom(top);
    images = [];
    while (images.length < 4) {
      let num = getNumber();
      if (!images.includes(num) && num !== bottom && num !== top) {
        images.push(num);
        images = images.filter((v, i, a) => a.indexOf(v) === i);
      }
    }
  }
  return (
    <div className="box">
      <div className="top" style={{backgroundImage: "url('./images/" + top + ".jpg')"}}></div>
      <div>
        {images.map((v, i) => (
          <span key={i} style={{'--i': i}}>
            <img src={'./images/' + v + '.jpg'} alt="" />
          </span>
        ))}
      </div>
      <div className="bottom" style={{backgroundImage: "url('./images/" + bottom + ".jpg')"}}></div>
    </div>
  );
}
