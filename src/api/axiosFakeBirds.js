export default class AnimalUtil {
  static fail = false;
  static get() {
    const successPromise = new Promise(resolve => {
      setTimeout(() => {
        const data = {
          data: [
            { name: "Marge", type: "Waterfowl Birds " },
            { name: "Homer", type: "Hummingbirds" },
            { name: "Lisa", type: "Hornbills" },
            { name: "Bart", type: "Frogmouths " },
            { name: "Maggie", type: "Frogmouths " },
          ]
        };
        resolve(data);
      }, 500);
    });

    const failPromise = new Promise((reject) => {
      setTimeout(() => {
        const error = {
          error: {
            statusCode: 500,
            name: "Error",
            message: "read ETIMEDOUT",
            code: "ETIMEDOUT",
            errno: "ETIMEDOUT",
            syscall: "read",
            stack:
              "Error: read ETIMEDOUT\n    at exports._errnoException (util.js:1050:11)\n    at TCP.onread (net.js:582:26)"
          }
        };
        reject(new Error(error));
      }, 2500);
    });

    return AnimalUtil.fail ? failPromise : successPromise;
  }
}
