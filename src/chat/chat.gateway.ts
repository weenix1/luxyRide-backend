import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

@WebSocketGateway(8091, {
  cors: true,
  allowEIO3: true,
  allowUpgrades: true,
  transports: ['websocket', 'polling'],
})
export class ChatGateway {
  @SubscribeMessage('message')
  handleNewMessage(client: Socket, message: any) {
    console.log(message);

    client.emit('reply', 'Hello from the backend');
  }
}
