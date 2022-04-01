const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const c = canvas.getContext('2d');
c.fillRect(0,0, canvas.width, canvas.height);


class Sprite {
  constructor(position, size) {
    this.position = position;
    this.size = size;
  }

  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }
}

const player = new Sprite(
  {
    x: 0,
    y: 0
  },
  {
    width: 50,
    height: 150
  })
  console.log(player)
  player.draw();