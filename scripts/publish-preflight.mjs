import { readFile, appendFile } from 'node:fs/promises';
import { publicationPreflight } from './lib/publication-policy.mjs';

const review = JSON.parse(await readFile('ops/telegram-review.json', 'utf8'));
const result = publicationPreflight({ review, mode: process.env.PUBLICATION_MODE,
  credentials: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) });
console.log(`Publication preparation: ${result.run ? 'run' : 'skip'} — ${result.reason.replace(/\.$/, '')}.`);
if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `run=${result.run}\n`);
