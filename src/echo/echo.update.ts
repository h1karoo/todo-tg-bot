import {
  On,
  Message,
  Update,
} from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Update()
export class EchoUpdate {
  @On('text')
  onMessage(
    @Message('text') reversedText: string,
  ) {
    return reversedText;
  }
  
}