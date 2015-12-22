function spectrum(value, start, end) {
  if(start === undefined) {
    start = [0, 0, 0]
  }
  if(end === undefined) {
    end = [255, 255, 255]
  }

  spec = []

  

  spec.push(end)

  return spec
}

function steps(start, end, steps) {
  a = []
  console.log(start, end, steps)
  for(i = 0; i < 3; i++) {
    x = (end[i] - start[i]) / (steps - 1)

    switch(x > 0) {
      case true:
        a[i] = Math.floor(x)
        break
      case false:
        a[i] = Math.ceil(x)
        break
    }
  }

  return a
}

function increment(array, steps) {
  a = []
  for(i = 0; i < 3; i++) {
    a[i] = array[i] + steps[i]
  }

  return a
}
