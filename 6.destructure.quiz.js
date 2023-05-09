// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ color }) {
  console.log(color);
}

changeColor(prop.styles);
