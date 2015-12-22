describe('colouriser', function() {
  describe('generate spectra', function() {
    it('simplest spectrum', function() {
      pending()
      expect(spectrum(3)).toEqual(
        [
          [0, 0, 0],
          [127, 127, 127],
          [255, 255, 255]
        ])
    })

    it('5 steps', function() {
      pending()
      expect(spectrum(5)).toEqual(
        [
          [0, 0, 0],
          [63, 63, 63],
          [127, 127, 127],
          [191, 191, 191],
          [255, 255, 255]
        ])
    })
  })

  describe('generate steps', function() {
    it('2 steps, ascending', function() {
      expect(steps([0, 0, 0], [255, 255, 255], 2)).toEqual([255, 255, 255])
    })

    it('3 steps, ascending', function() {
      expect(steps([0, 0, 0], [255, 255, 255], 3)).toEqual([127, 127, 127])
    })

    it('5 steps, descending', function() {
      expect(steps([255, 255, 255], [0, 0, 0], 5)).toEqual([-63, -63, -63])
    })

    it('3 steps, mixed asc and desc', function() {
      expect(steps([255, 127, 0], [0, 127, 255], 3)).toEqual([-127, 0, 127])
    })

    it('7 steps, mashing the keyboard', function() {
      expect(steps([134, 8, 99], [1, 148, 250], 7)).toEqual([-22, 23, 25])
    })
  })

  describe('incrementer', function() {
    it('increments the array correctly', function() {
      expect(increment([19, 19, 19], [12, 13, 24])).toEqual([31, 32, 43])
    })
  })
})
