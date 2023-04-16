const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message) {
      throw new Error("Incorrect arguments!");
    }

    if (!key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const messageUpper = message.toLocaleUpperCase();
    const keyUpper = key.toLocaleUpperCase();
    let encrypted = "";

    for (let i = 0, j = 0; i < messageUpper.length; i++) {
      const currentChar = messageUpper[i];
      const keyChar = keyUpper[j % keyUpper.length];
      const currentIndex = alphabet.indexOf(currentChar);
      const keyIndex = alphabet.indexOf(keyChar);

      if (currentIndex >= 0 && keyIndex >= 0) {
        const encryptedIndex = (currentIndex + keyIndex) % alphabet.length;
        const encryptedChar = alphabet[encryptedIndex];

        encrypted += encryptedChar;
        j++;
      } else {
        encrypted += currentChar;
      }
    }

    if (this.direct) {
      return encrypted;
    } else {
      return encrypted.split("").reverse().join("");
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage) {
      throw new Error("Incorrect arguments!");
    }

    if (!key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const encryptedMessageUpper = encryptedMessage.toLocaleUpperCase();
    const keyUpper = key.toLocaleUpperCase();
    let decrypted = "";

    for (let i = 0, j = 0; i < encryptedMessageUpper.length; i++) {
      const currentChar = encryptedMessageUpper[i];
      const keyChar = keyUpper[j % keyUpper.length];
      const currentIndex = alphabet.indexOf(currentChar);
      const keyIndex = alphabet.indexOf(keyChar);

      if (currentIndex >= 0 && keyIndex >= 0) {
        const decryptedIndex =
          (currentIndex - keyIndex + alphabet.length) % alphabet.length;
        const decryptedChar = alphabet[decryptedIndex];
        decrypted += decryptedChar;
        j++;
      } else {
        decrypted += currentChar;
      }
    }

    if (this.direct) {
      return decrypted;
    } else {
      return decrypted.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
