import * as uws from "uws";

type FirelikeIncomingMessage = {
  type: "subscribe" | "unsubscribe";
};

export class FirelikeServer {
  private wss: uws.Server;

  constructor(host: string, port: number) {
    var WebSocketServer = uws.Server;
    this.wss = new WebSocketServer({ host, port });

    const onMessage = (message: string) => {
      const msg: FirelikeIncomingMessage = JSON.parse(message);
      console.log("received:", msg);
    };

    this.wss.on("connection", function(ws) {
      ws.on("message", onMessage);
      ws.send("hello");
    });
  }

  public shutdown() {
    this.wss.close();
  }
}

