/* eslint-disable no-magic-numbers */
import isPresent from "@unction/ispresent";
import length from "@unction/length";

export default function isPopulated<A> (enumerable: Array<A> | Set<A> | RecordType<unknown, A> | string): boolean {
  return isPresent(enumerable) && length(enumerable) !== 0;
}
