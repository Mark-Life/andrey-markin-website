'use server';

import TelegramBot from 'node-telegram-bot-api';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

interface ContactFormData {
  name: string;
  contact: string;
  projectDescription: string;
}

export async function sendTelegramNotification(formData: ContactFormData) {
  try {
    const text = `
🔔 New Project Request:
👤 Name: ${formData.name}
📞 Contact: ${formData.contact}
📝 Project Description:
${formData.projectDescription}
    `;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram configuration is missing');
    }

    await bot.sendMessage(TELEGRAM_CHAT_ID, text);
    return { success: true, message: 'Project request sent successfully!' };
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return { success: false, message: 'Failed to send project request' };
  }
}
