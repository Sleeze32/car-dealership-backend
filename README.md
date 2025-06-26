# Car Dealership Backend

This is a simple Node.js + Express backend for the Car Dealership web app.

## Features
- Serves real car data (GET /api/cars)
- Accepts test drive bookings (POST /api/test-drive)
- Accepts feedback (POST /api/feedback)
- Demo admin login (POST /api/admin/login)

## Setup & Run

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   # or for auto-reload during development:
   npm run dev
   ```

3. **API will be available at:**
   - http://localhost:4000/api/cars
   - http://localhost:4000/api/test-drive
   - http://localhost:4000/api/feedback
   - http://localhost:4000/api/admin/login

## Data Files
- `cars.json` — Car data
- `test_drives.json` — Test drive submissions (created automatically)
- `feedback.json` — Feedback submissions (created automatically)

---

**Note:** This backend is for demo/development. For production, use a real database and secure authentication. 