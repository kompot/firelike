import * as uws from "uws";

import { FirelikeServer } from "./FirelikeServer";

describe("uws server", () => {
  let fls: FirelikeServer;
  beforeEach(done => {
    fls = new FirelikeServer("127.0.0.1", 3000);
    setTimeout(() => {
      done();
    }, 1);
  });
  afterEach(() => {
    fls.shutdown();
  });
  test("must reply with hello on connect", done => {
    const client = new uws("ws://127.0.0.1:3000");
    client.on("message", msg => {
      expect(msg).toBe("hello");
      done();
    });
  });
});
