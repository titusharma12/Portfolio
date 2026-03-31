# Titu Sharma Portfolio

A modern personal portfolio website built with **React + Vite** on the frontend and **Node.js + Express** on the backend.  
The project includes a contact form that can send messages through **email** and **WhatsApp**, using **Nodemailer** and **Twilio**.

Live Demo: https://portfolio-seven-lime-90.vercel.app/

## Features

- Responsive personal portfolio website
- Hero, About, Skills, Projects, Experience, Instagram, Contact, and Footer sections
- Custom cursor and animated UI effects
- Contact form with backend integration
- Email sending with Nodemailer
- WhatsApp notifications with Twilio
- Toast notifications for user feedback

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Toastify
- React Icons

### Backend
- Node.js
- Express
- CORS
- dotenv
- Nodemailer
- Twilio

## Project Structure

```bash
Portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
└── backend/
    ├── config/
    │   ├── mail.js
    │   └── whatsapp.js
    ├── controllers/
    ├── routes/
    │   └── contactRoutes.js
    ├── server.js
    └── package.json
```

## Frontend Sections

The main UI includes:

- Navbar
- Home
- About
- Skills
- Projects
- Experience
- Instagram
- Contact
- Footer

## Backend API

### Contact Route
`POST /api/contact`

This route handles contact form submissions and triggers:
- Email notification
- WhatsApp notification

## Environment Variables

### Backend `.env`
```env
PORT=5000
FRONTEND_URL=https://portfolio-seven-lime-90.vercel.app
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
```

## Local Development

### 1) Clone the repository
```bash
git clone https://github.com/titusharma12/Portfolio.git
cd Portfolio
```

### 2) Run the frontend
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on:
```bash
http://localhost:5173
```

### 3) Run the backend
```bash
cd backend
npm install
npm run dev
```
The backend will run on:
```bash
http://localhost:5000
```

## Available Scripts

### Frontend
From the `frontend/` folder:

```bash
npm run dev      # start local dev server
npm run build    # build for production
npm run preview  # preview production build
npm run lint     # run ESLint
```

### Backend
From the `backend/` folder:

```bash
npm run dev      # start server with nodemon
npm start        # start server with node
```

## Deployment

### Frontend
The frontend is deployed on Vercel:
- https://portfolio-seven-lime-90.vercel.app/

### Backend
Deploy the backend on a Node.js hosting platform such as:
- Render
- Railway
- Any VPS or Node hosting service

Make sure to set all environment variables in your deployment platform.

## Contact Form Notes

The backend uses:
- `backend/config/mail.js` for Gmail SMTP via Nodemailer
- `backend/config/whatsapp.js` for Twilio client configuration

If you use Gmail, make sure to create an **App Password** instead of using your normal account password.

## Customization

You can easily customize:
- Your name and title
- About section content
- Skills and tools
- Project cards
- Experience timeline
- Contact links
- Resume link
- Social media links

## License

This project currently does not include a license.

## Author

**Titu Sharma**  
Portfolio: https://portfolio-seven-lime-90.vercel.app/  
GitHub: https://github.com/titusharma12