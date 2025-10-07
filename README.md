# Fvckers v3 - WhatsApp Bot Base

**Fvckers v3** is a lightweight, modular, and open-source WhatsApp bot base. It's perfect for developers who want to build their own WhatsApp bot from scratch with high flexibility..

---

## ✨ Key Features

- Neat and easy-to-develop folder structure
- Modular command system (`whatsapp.js`)
- Premium user management (`premium.json`)
- Global configuration system (`config.js`)
- Built using

---

## 🧾 Struktur Folder

```bash
Fvckers/
├── system/                  # System main folder
│   ├── whatsapp.js          # The place for all WhatsApp commands
│   ├── config.js            # Configuration files (owner number, prefix, etc.)
│
├── system/lib/             # Library custom function
│   ├── myfunction.js        # Contains custom functions
│   ├── premium.js           # Premium database loader
│
├── system/database/        # Local database
│   └── premium.json         # Premium user data storage
│
├── package.json            # Metadata and dependencies project
├── index.js                # Bot's main entry point
```

---

## ⚙️ Instalasi

1. Clone repository:
```bash
git clone https://github.com/SwipFvck/Fvckers-Whatsapp.git
cd Fvckers
```

2. Install dependencies:
```bash
npm install
```

3. Run bot:
```bash
npm start
```

---

## 💗 Credits

> Fvckers v3 developed by [Swiper Fvck](https://github.com/SwipFvck) as a powerful yet simple open-source WhatsApp bot base.

---

## License

MIT License © 2025 Swiper-Fvck
