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

// TEST ISFIZZY
test('isFizzy', () => {
  expect(fb.isFizzy(1)).toBe(false)
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(10)).toBe(false)
  expect(fb.isFizzy(-1000)).toBe(false)
})

// TEST ISBUZZY
test('isBuzzy', () => {
  expect(fb.isBuzzy(1)).toBe(false)
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(15)).toBe(true)
  expect(fb.isBuzzy(100000)).toBe(true)
  expect(fb.isBuzzy(1000001)).toBe(false)
})

// TEST FIZZYBUZZY
test('fizzybuzzy', () => {
  expect(fb.fizzyBuzzy(3)).toBe(fb.FIZZ)
  expect(fb.fizzyBuzzy(5)).toBe(fb.BUZZ)
  expect(fb.fizzyBuzzy(15)).toBe(fb.FIZZBUZZ)
})

// TEST FIZZBUZZ
test('fizzBuzz', () => {
  expect(fb.fizzBuzz('121').fizz).toBe(32)
  expect(fb.fizzBuzz('121').buzz).toBe(16)
  expect(fb.fizzBuzz('121').fizzBuzz).toBe(8)
})