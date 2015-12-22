describe('colouriser', function() {
  describe('generate spectra', function() {
    pending()
    it('simplest spectrum', function() {
      expect(spectrum(3)).toEqual(
        [
          [0, 0, 0],
          [127, 127, 127],
          [255, 255, 255]
        ])
    })

    it('5 steps', function() {
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
      pending()
      expect(steps([255, 255, 255], [0, 0, 0], 5)).toEqual([-63, -63, -63])
    })
  })
})
