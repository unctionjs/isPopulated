/* eslint-disable no-magic-numbers */
import isPresent from "@unction/ispresent";
import length from "@unction/length";
import {EnumerableType} from "./types";

export default function isPopulated<A> (enumerable: EnumerableType<A>): boolean {
  return isPresent(enumerable) && length(enumerable) !== 0;
}
