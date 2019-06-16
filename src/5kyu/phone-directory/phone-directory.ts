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
}
