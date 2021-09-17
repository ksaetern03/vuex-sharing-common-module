export default class AnimalUtil {
  static fail = false;
  static get() {
    const successPromise = new Promise(resolve => {
      setTimeout(() => {
        const data = {
          data: [
            { name: "Marge", type: "German Shepard" },
            { name: "Homer", type: "British Bulldog" },
            { name: "Lisa", type: "Shitzu" },
            { name: "Bart", type: "Pitbull" },
            { name: "Maggie", type: "Pitbull" },
          ]
        };
        resolve(data);
      }, 500);
    });
    const failPromise = new Promise((resolve) => {
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
        resolve(error);
      }, 500);
    });

    return AnimalUtil.fail ? failPromise : successPromise;
  }
}
