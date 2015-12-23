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

function cssSpectrum(value, start, end) {
  var spec = spectrum(value, start, end)

  return spec.map(function(triplet) {
    return rgbFormat(triplet)
  })
}

function rgbFormat(triplet) {
  return 'rgb(' + triplet.join(', ') + ')'
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

function percentage(value, target, base) {
  if(target === undefined) {
    target = [255, 0, 0]
  }

  if(base === undefined) {
    start = [255, 255, 255]
  }

  a = []

  /*if(value === 100) {
    a = [255, 0, 0]
  }
  if(value === 75) {
    a = [255, 63, 63]
  }
  if(value === 50) {
    a = [255, 127, 127]
  }
  if(value === 25) {
    a = [255, 191, 191]
  }
  if(value === 0) {
    a = [255, 255, 255]
  }*/

  for(i = 0; i < 3; i++) {
    span = start[i] - target[i]
    x = 255 - (span * (value / 100))
    a[i] = Math.floor(x)
  }

  return rgbFormat(a)
}
