import os

# === SUAS CHAVES (cuidado ao compartilhar!) ===
GEMINI_KEY = "AIzaSyDF5wOFJPEuhrlD9s0m1ZjYLg-IIPWsCRg"
TELEGRAM_KEY = "7730224947:AAG5ENF-HVlD33CbJib0NK2GNXL3E7UYzcw"

# Conteúdo do main.py
main_py = f'''
import google.generativeai as genai
from telegram import Update
from telegram.ext import ApplicationBuilder, MessageHandler, ContextTypes, filters

# Chaves diretamente no código (não recomendado em produção)
GEMINI_API_KEY = "{GEMINI_KEY}"
TELEGRAM_BOT_TOKEN = "{TELEGRAM_KEY}"

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

async def responder(update: Update, context: ContextTypes.DEFAULT_TYPE):
    pergunta = update.message.text
    try:
        resposta = model.generate_content(pergunta)
        await update.message.reply_text(resposta.text)
    except Exception as e:
        await update.message.reply_text("Erro ao responder: " + str(e))

if __name__ == "__main__":
    app = ApplicationBuilder().token(TELEGRAM_BOT_TOKEN).build()
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, responder))
    print("Bot iniciado...")
    app.run_polling()
'''

# requirements.txt
requirements_txt = '''
python-telegram-bot==20.7
google-generativeai==0.4.1
'''

# Criar os arquivos
with open("main.py", "w") as f:
    f.write(main_py.strip())

with open("requirements.txt", "w") as f:
    f.write(requirements_txt.strip())

print("Tudo pronto!")
print("Arquivos 'main.py' e 'requirements.txt' criados.")
print("É só subir isso no Replit e clicar em 'Run'.")
