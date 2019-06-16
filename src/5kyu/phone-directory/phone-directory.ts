export class G964 {

    public static phone = (strng, num) => {
        let founded = false;
        let result = '';
        let contactList = strng.split("\n");
        for (let i = 0 ;i<contactList.length; i++) {
          let line = contactList[i];
          if (line.includes(num)) {
            if (founded) {
              return `Error => Too many people: ${num}`;
            }
            result += `Phone => ${num}, `;
            var name = line.substring(
                line.lastIndexOf("<") + 1,
                line.lastIndexOf(">")
            );
            result += `Name => ${name}, `;
            var cleanAddress = line.trim()
                          .replace(num, "").trim()
                          .replace("<" + name + ">", "").trim()
                          .replace("_", " ").trim()
                          .replace(/[\|&;\$%@"!*<>_\(\)\+/?:,]/g, "").trim()
                          .replace("  "," ").trim();

            result += `Address => ${cleanAddress}`;
            founded = true;
          }
      }
      if (!founded) {
        return `Error => Not found: ${num}`;
      }
      return result;
    }

    public static phone2 = (strng, num) => {
        const lines = strng.split('\n');
        const findLines = lines.filter((line) => line.includes(num));

        if (findLines.length === 0) {
          return `Error => Not found: ${num}`;
        } else if (findLines.length > 1) {
          return `Error => Too many people: ${num}`;
        } else {
          let line = findLines[0];
          const userRegex = /<([^<]+)>/g;

          const matchArr = line.match(userRegex);
          const wordWithBrackets = matchArr[0];
          line = line.replace(wordWithBrackets, ' ').replace('+' + num, ' ');

          const userName = wordWithBrackets.substring(1, wordWithBrackets.length - 1);

          return `Phone => ${num}, Name => ${userName}, Address => ${line.replace(/[^a-zA-Z\d\s-.]/g, ' ').replace(/\s+/g, ' ').trim()}`

        }
    }
}
