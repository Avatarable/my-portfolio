import animate, {stop} from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const list = (length, callback) =>
  Array.from(new Array(length), (hole, index) => callback(index));

const random = (min, max) =>
  Math.random() * (max - min) + min;

const randomColor = () =>
  `#${palette[Math.floor(random(0, palette.length))]}`;

const palette = [
  "216863",
  // "EAC435",
  "1B1B1B",
  // "DBDEEA",
  "C7CAD5",
  "0F312E"
];

const elements = list(50, () => {
  const circle = document.createElement("span");
  const size = random(20, 100);
  Object.assign(circle.style, {
    width: `${size}px`,
    height: `${size}px`,
    left: `${random(0, 100)}%`,
    top: `${random(0, 100)}%`,
    zIndex: `${1000}`,
    background: randomColor()
  });
  return circle;
});


var ids = ['cont', 'proj', 'prof']
ids.forEach(sections)

function sections(item, index){
  const guests = list(1, () => {
      const circle = document.getElementById(item)
      const size = 100;
      Object.assign(circle.style, {
          left: `${random(20, 80)}%`,
          top: `${random(20, 80)}%`,
          zIndex: `${1000}`,
          background: randomColor(),
          color: 'white'
      });
      elements.push(circle)
      return circle;
  });
}

document.body.append(...elements);
["click", "touchstart"].forEach(name =>
  document.addEventListener(name, ({target}) => stop(target)));




animate({
  elements: "p",
  delay: 1500,
  easing: "out-cubic",
  opacity: [1, 0]
}).then(({easing}) => animate({
  elements,
  easing,
  duration: 5000,
  opacity: [0, 1]
}));


animate({
  elements,
  easing: "linear",
  duration: index => 8000 + index * 200,
  loop: true,
  transform: ["rotate(0deg)", 360]
});
