function spectrum(value, start, end) {
  if(start === undefined) {
    start = [0, 0, 0]
  }
  if(end === undefined) {
    end = [255, 255, 255]
  }

  var s = steps(start, end, value)
  var spec = [start]

  for(i = 1; i < value; i++) {
    spec.push(increment(spec[i - 1], s))
  }

  return spec
}

function steps(start, end, steps) {
  a = []
  for(i = 0; i < 3; i++) {
    a[i] = (end[i] - start[i]) / (steps - 1)
  }

  return a
}

function increment(array, steps) {
  a = []
  for(j = 0; j < 3; j++) {
    a[j] = limiter(array[j] + (steps[j]))
  }

  return a
}

function limiter(value) {
  if(value > 255) {
    return 255
  }

  if(value < 0) {
    return 0
  }

  return Math.round(value)
}
