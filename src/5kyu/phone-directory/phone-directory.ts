export class G964 {

    public static phone = (strng, num) => {
        let founded = false;
        let result = '';
        let contactList = strng.split("\n");
        for (let i = 0 ;i<contactList.length; i++) {
          let line = contactList[i];
          if (line.includes(num)) {
            if (founded === true) {
              return "Error => Too many people: " + num;
            }
            result += "Phone => " + num + ", ";
            line = line.trim().replace(num, "");
            var name = line.substring(
                line.lastIndexOf("<") + 1,
                line.lastIndexOf(">")
            );
            result += "Name => " + name + ", ";
            var cleanAddress = line.trim()
                          .replace("<" + name + ">", "")
                          .replace(/[\|&;\$%@"*<>\(\)\+,]/g, "")
                          .replace("  "," ");

            result += "Address => " + cleanAddress.trim();
            founded = true;
          }
      }
      if (founded === false) {
        return "Error => Not found: "+ num;
      }
      return result;
    }
}
