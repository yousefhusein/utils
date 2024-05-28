interface FlattenOptions {
  depth?: number
}

export default function flatten(array: unknown[], options?: FlattenOptions) {
  const { depth } = options ?? {};

  if (depth === 0) {
    return array.slice();
  }

  const result: unknown[] = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      if (depth === undefined) {
        result.push(...flatten(item));
      } else {
        result.push(...flatten(item, { depth: depth - 1 }));
      }
    } else {
      result.push(item);
    }
  }

  return result;
}