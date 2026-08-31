// Finds the chat id of the channel your bot is in. Post any message in the channel first, then:
//   node scripts/telegram-chat-id.mjs
// Reads TELEGRAM_BOT_TOKEN from .env.local (or the env). Never prints the token.
import { readFile } from "node:fs/promises";
import { readDotEnv } from "./lib/telegram.mjs";

let env = { ...process.env };
try { env = { ...readDotEnv(await readFile(".env.local", "utf8")), ...env }; } catch { /* no .env.local */ }
const token = env.TELEGRAM_BOT_TOKEN;
if (!token) { console.error("TELEGRAM_BOT_TOKEN not set — add it to .env.local first."); process.exit(1); }

const me = await fetch(`https://api.telegram.org/bot${token}/getMe`).then((r) => r.json());
if (!me.ok) { console.error(`Token rejected by Telegram: ${me.description ?? me.error_code}`); process.exit(1); }
console.log(`Bot: @${me.result.username} (${me.result.first_name})`);

const upd = await fetch(`https://api.telegram.org/bot${token}/getUpdates?allowed_updates=["channel_post","message","my_chat_member"]`).then((r) => r.json());
if (!upd.ok) { console.error(`getUpdates failed: ${upd.description}`); process.exit(1); }
const chats = new Map();
for (const u of upd.result) {
  const chat = u.channel_post?.chat ?? u.message?.chat ?? u.my_chat_member?.chat;
  if (chat) chats.set(chat.id, chat);
}
if (!chats.size) {
  console.log("No chats seen yet. Post any message in the channel (with the bot as admin), then run this again.");
  console.log("If the channel is public you can also just use its handle, e.g. TELEGRAM_CHAT_ID=@yourchannel");
  process.exit(0);
}
for (const c of chats.values()) console.log(`${c.type.padEnd(10)} ${String(c.id).padEnd(16)} ${c.title ?? c.username ?? ""}${c.username ? `  (@${c.username})` : ""}`);
console.log("\nPut the id (or @handle) in .env.local as TELEGRAM_CHAT_ID.");
