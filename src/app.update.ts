import { Update, Hears, Start, InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf'


@Update()
export class AppUpdate {
    
	constructor(
		@InjectBot() private readonly bot: Telegraf<Context>,
	) {}

    @Hears(/привет/i)
    onHelloHears(): string {
        return 'Здравствуй'
    }

    @Hears(/пока/i)
    onByByHears(): string {
        return 'ПОКА';
    }
	@Start()
	async startCommand(ctx: Context) {
		await ctx.reply('ого ничего себе')
		await ctx.reply('вау')
	}

}