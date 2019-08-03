const STAR = '*';
export function hist(s: string): string {
  const uCount= s.split("u").length - 1;
  const wCount= s.split("w").length - 1;
  const xCount= s.split("x").length - 1;
  const zCount= s.split("z").length - 1;

  return drawStats("u", uCount)
          + drawR(wCount, uCount === 0)
          + drawStats("w", wCount)
          + drawR(xCount, uCount + wCount === 0)
          + drawStats("x", xCount)
          + drawR(zCount, uCount + wCount + xCount === 0)
          + drawStats("z", zCount);
}

function drawStats(x, count) {
  if (count < 1) {
    return "";
  }
  if (getlength(count) == 1 ) {
    return x+ "  " + count + "     " + Array( count + 1 ).join(STAR) ;
  } else {
    return x+ "  " + count + "    " + Array( count + 1 ).join(STAR) ;
  }
}

function drawR(next, first) {
  return (next === 0 || first) ? "" : "\r";
}

function getlength(number) {
    return number.toString().length;
}

export function hist2(s: string): string {
  interface Hash<T> {
      [key: string]: T;
  }
  const r: Hash<number> = { 'u': 0, 'w': 0, 'x': 0, 'z': 0 };
  let histogram = "";
  for (var key in r) {
    r[key] = s.split('').filter(error => error === key).length;
    if ( r[key] !== 0 ) {
      histogram += `${key}  ${r[key]}${' '.repeat(6 - String(r[key]).length)}${'*'.repeat(r[key])}\r`;
    }
  }
  return (histogram.substring(0, histogram.length - 1));
}
