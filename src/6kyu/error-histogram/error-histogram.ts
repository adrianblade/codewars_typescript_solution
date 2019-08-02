export function hist(s: string): string {
  const uCount= s.split("u").length - 1;
  const wCount= s.split("w").length - 1;
  const xCount= s.split("x").length - 1;
  const zCount= s.split("z").length - 1;
  const STAR = '*';
  return "u  " + uCount + "     " + Array( uCount + 1 ).join(STAR)
          + "\rw  " + wCount + "     " + Array( wCount + 1 ).join(STAR)
          + "\rx  " + xCount + "     " + Array( xCount + 1 ).join(STAR)
          + "\rz  " + zCount + "    " + Array( zCount + 1 ).join(STAR);
}
