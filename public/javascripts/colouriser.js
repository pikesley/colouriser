function spectrum(value, start, end) {
  if(start === undefined) {
    start = [0, 0, 0]
  }
  if(end === undefined) {
    end = [255, 255, 255]
  }

  spec = []

  for(i = 0; i < value - 1; i++) {
  }

  spec.push(end)

  return spec
}

function steps(start, end, steps) {
  steps = steps - 1
  red = Math.floor((end[0] - start[0]) / steps)
  green = Math.floor((end[1] - start[1]) / steps)
  blue = Math.floor((end[2] - start[2]) / steps)

  return [red, green, blue]
}
