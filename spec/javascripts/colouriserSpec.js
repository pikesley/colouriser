describe('colouriser', function() {
  describe('generate spectra', function() {
    it('simplest spectrum', function() {
      expect(spectrum(3)).toEqual(
        [
          [0, 0, 0],
          [128, 128, 128],
          [255, 255, 255]
        ])
    })

    it('5 steps', function() {
      expect(spectrum(5)).toEqual(
        [
          [0, 0, 0],
          [64, 64, 64],
          [128, 128, 128],
          [192, 192, 192],
          [255, 255, 255]
        ])
    })
  })

  describe('generate steps', function() {
    it('2 steps, ascending', function() {
      expect(steps([0, 0, 0], [255, 255, 255], 2)).toEqual([255, 255, 255])
    })

    it('3 steps, ascending', function() {
      expect(steps([0, 0, 0], [255, 255, 255], 3)).toEqual([127.5, 127.5, 127.5])
    })

    it('5 steps, descending', function() {
      expect(steps([255, 255, 255], [0, 0, 0], 5)).toEqual([-63.75, -63.75, -63.75])
    })

    it('3 steps, mixed asc and desc', function() {
      expect(steps([255, 127, 0], [0, 127, 255], 3)).toEqual([-127.5, 0, 127.5])
    })

    it('7 steps, mashing the keyboard', function() {
      expect(steps([134, 8, 99], [1, 148, 250], 7)).toEqual([-22.166666666666668, 23.333333333333332, 25.166666666666668])
    })
  })

  describe('incrementer', function() {
    it('increments the array correctly', function() {
      expect(increment([19, 19, 19], [12, 13, 24])).toEqual([31, 32, 43])
    })
  })

  describe('limiter', function() {
    it('does not care about a value within the bounds', function() {
      expect(limiter(19)).toEqual(19)
    })

    it('caps a value above the upper bound', function() {
      expect(limiter(300)).toEqual(255)
    })

    it('caps a value below the lower bound', function() {
      expect(limiter(-3)).toEqual(0)
    })
  })

  describe('format for CSS', function() {
    it('formats the spectrum for CSS use', function() {
      expect(cssSpectrum(2)).toEqual(
        [
          'rgb(0, 0, 0)',
          'rgb(255, 255, 255)'
        ])
    })
  })

  describe('gives a colour as a percentage', function() {
    describe('with default colours', function() {
      it('handles 100%', function() {
        expect(percentage(100)).toEqual('rgb(255, 0, 0)')
      })

      it('handles 75%', function() {
        expect(percentage(75)).toEqual('rgb(255, 63, 63)')
      })

      it('handles 50%', function() {
        expect(percentage(50)).toEqual('rgb(255, 127, 127)')
      })

      it('handles 25%', function() {
        expect(percentage(25)).toEqual('rgb(255, 191, 191)')
      })

      it('handles 0%', function() {
        expect(percentage(0)).toEqual('rgb(255, 255, 255)')
      })
    })

    describe('with a different target colour', function() {
      it('handles 100% with blue as a target', function() {
        expect(percentage(100, [0, 0, 255])).toEqual('rgb(0, 0, 255)')
      })

      it('handles 33% with green as a target', function() {
        expect(percentage(33, [0, 255, 0])).toEqual('rgb(170, 255, 170)')
      })

      it('handles 50% with magenta as a target', function () {
        expect(percentage(50, [255, 0, 255])).toEqual('rgb(255, 127, 255)')
      })

      it('handles 25% with magenta as a target', function () {
        expect(percentage(25, [255, 0, 255])).toEqual('rgb(255, 191, 255)')
      })
    })

    describe('with a different base colour', function() {
      pending()
      
      it('handles 100% with black as a base', function() {
        expect(percentage(100, [255, 0, 0], [0, 0, 0])).toEqual('rgb(255, 0, 0)')
      })

      it('handles 50% with black as a base', function() {
        expect(percentage(50, [255, 0, 0], [0, 0, 0])).toEqual('rgb(127, 0, 0)')
      })

      it('handles 0% with black as a base', function() {
        expect(percentage(0, [255, 0, 0], [0, 0, 0])).toEqual('rgb(0, 0, 0)')
      })
    })
  })
})
