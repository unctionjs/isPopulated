/* eslint-disable no-undefined */
import {test} from "tap"

import isPopulated from "./index"

test(({equal, end}) => {
  equal(isPopulated(["a"]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated("a"), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([[]]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([{}]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([]), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated({}), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated(""), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated(undefined), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated(null), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([undefined]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([undefined]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([null]), true)

  end()
})
