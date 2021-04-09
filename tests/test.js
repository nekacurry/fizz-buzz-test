const fb = require('../fizzbuzz')

test('Sanity check', () => {
  expect(2+3).toBe(5)
})

// TEST FIZZ
test('fizz', () => {
  expect(fb.FIZZ).toBe('fizz')
})

// TEST BUZZ
test('buzz', () => {
  expect(fb.BUZZ).toBe('buzz')
})

// TEST FIZZBUZZ
test('fizzbuzz', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})