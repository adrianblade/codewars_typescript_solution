export class Kata {
  static getCount(str: string) {
    let count: number = 0;
    for (var char of str) {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count = count + 1;
      }
    }
    return count;
  }

  static getCount2(str: string) {
    let list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
  }

  static getCount3(str: string) {
    let vowels: string[] = ["a","e","i","o","u"]
    return str.toLowerCase().split("")
      .reduce((a:number,e:string)=>{
        if(vowels.indexOf(e) > -1) a += 1
        return a
      },0)
  }

  static getCount5(str: string) : number {
    return str.split('').filter(c => /[aeiou]/i.test(c)).length
  }

  static getCount6(str: string) {
    return str.split('').filter(x => /[aeiou]/u.test(x)).length;
  }

  static getCount7(str: string) {
    const vowels = 'aeiou'.split('');
    return str.split('').filter(l=>vowels.indexOf(l)>=0).length;
  }
}
