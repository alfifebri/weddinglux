#  Digital Wedding Invitation - Dark Luxury Theme

A commercial-grade, modern, and cinematic Digital Wedding Invitation web app built with **React**, **Vite**, and **Tailwind CSS**. Designed with an exclusive dark-gold aesthetic, dynamic personalized guest link support, and an automated WhatsApp link generator for the couple.

---

##  Features

- **Dark Luxury Aesthetic:** Elegant dark stone tones, gold accents, glassmorphism cards, and Cinzel/Plus Jakarta Sans typography.
- **Custom Guest Name (`?to=Guest+Name`):** Personalizes the cover invitation automatically via URL parameters.
- **Hidden WhatsApp Link Generator (`?mode=admin`):** Secret admin suite for the couple to create and copy custom guest invitation messages to WhatsApp in one click.
- **Background Music Player:** Floating audio player with spin animation and smooth playback.
- **Floating Bottom Navigation:** Smooth scrolling controls for quick navigation across sections.
- **Complete Sections:** Cover, Hero (Mempelai), Event Details (Akad & Resepsi), Photo Gallery, Digital Envelope / Gift (Bank & E-Wallet), and RSVP Form.
- **Fully Responsive & Fast:** Built on Vite + Tailwind CSS v4, optimized for mobile-first user experience.

---

##  Quick Start & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/USERNAME/REPO_NAME.git](https://github.com/USERNAME/REPO_NAME.git)
   cd REPO_NAME

   Install dependencies:
   npm install

   Run development server:
   npm run dev

   Open in browser:
Go to http://localhost:5173

##  How to Customize Data (weddingData.js)
All client data (names, dates, location, music, photos, bank account numbers) is centralized in src/data/weddingData.js. Simply modify this single file to update the entire invitation content:

export const weddingData = {
  groom: {
    name: "Alfi Febriawan, S.Kom.",
    nickname: "Alfi",
    parents: "Putra dari Bpk. Febriawan & Ibu Febriawan",
    photo: "URL_OR_PATH_TO_PHOTO"
  },
  bride: {
    name: "Putri Rosmawati, S.Kom.",
    nickname: "Putri",
    parents: "Putri dari Bpk. Rosmawati & Ibu Rosmawati",
    photo: "URL_OR_PATH_TO_PHOTO"
  },
  event: {
    date: "Sabtu, 12 Desember 2026",
    time: "08:00 WIB - Selesai",
    location: "Bandung, Jawa Barat",
    mapsUrl: "[https://maps.google.com/](https://maps.google.com/)..."
  },
  // Add gifts, music, and gallery images here
};

##  How to Access the Admin Generator
Standard Guest Link:
https://your-domain.com/?to=Budi+Santoso

Admin WA Generator Link (Hidden Mode):
https://your-domain.com/?mode=admin

(Open the admin link, scroll down to the bottom, enter guest name, and click "Salin Teks & Link WhatsApp" to share on WhatsApp).

## Deployment (Vercel)
Push this repository to GitHub.

Connect your repository to Vercel.

Set the project name (use lowercase without spaces, e.g., weddingluxury).

Click Deploy.

© Digital Invitation Studio. Created with ❤️ for commercial deployment.