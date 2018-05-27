/* eslint-disable no-magic-numbers */
import isPresent from "@unction/ispresent";
import length from "@unction/length";
export default function isPopulated(functor) {
  return isPresent(functor) && length(functor) !== 0;
}
