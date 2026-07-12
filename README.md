# Hospital Management System

A full-stack web application for managing hospital operations including users, roles, appointments, departments, and prescriptions.

## Project Structure

```
hospital-management-system/
├── backend/              # Express.js REST API
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route handlers
│   ├── app.js           # Express application
│   ├── config.js        # Configuration management
│   ├── package.json     # Backend dependencies
│   ├── .env             # Environment variables
│   └── .env.example     # Template for env variables
│
└── frontend/            # React web application
    ├── src/
    │   ├── components/  # React components
    │   ├── App.js       # Root component
    │   └── index.js     # Entry point
    ├── package.json     # Frontend dependencies
    ├── .env             # Environment variables
    └── .env.example     # Template for env variables
```

## Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **CORS:** Enabled for frontend communication

### Frontend
- **Framework:** React 17
- **HTTP Client:** Axios
- **Build Tool:** Create React App

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Install backend dependencies:**
```bash
cd hospital-management-system/backend
npm install
```

2. **Install frontend dependencies:**
```bash
cd hospital-management-system/frontend
npm install
```

### Configuration

1. **Backend Setup:**
   - Copy `.env.example` to `.env` in the backend folder
   - Update `MONGODB_URI` with your MongoDB connection string
   - Set `PORT` if needed (default: 5000)

2. **Frontend Setup:**
   - Copy `.env.example` to `.env` in the frontend folder
   - Ensure `REACT_APP_API_BASE_URL` matches your backend URL

### Running the Application

**Backend:**
```bash
cd hospital-management-system/backend
npm start          # Production mode
npm run dev        # Development mode with nodemon
```

**Frontend:**
```bash
cd hospital-management-system/frontend
npm start          # Starts on http://localhost:3000
```

## API Endpoints

All endpoints are prefixed with `/api`:

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Roles
- `GET /api/roles` - Get all roles
- `POST /api/roles` - Create new role

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Schedule appointment

### Departments
- `GET /api/departments` - Get all departments
- `POST /api/departments` - Create department

### Prescriptions
- `GET /api/prescriptions` - Get all prescriptions
- `POST /api/prescriptions` - Create prescription

### Health Check
- `GET /api/health` - Server health status

## Development

### Backend Development
- Routes are in `backend/routes/`
- Models are in `backend/models/`
- Configuration is centralized in `config.js`
- Use `npm run dev` for auto-reload with nodemon

### Frontend Development
- Components are in `frontend/src/components/`
- Update `REACT_APP_API_BASE_URL` in `.env` to point to backend

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hospitalManagement
```

### Frontend (.env)
```
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## Features

- ✓ User Management
- ✓ Role-Based Access Control
- ✓ Appointment Scheduling
- ✓ Department Management
- ✓ Prescription Management
- ✓ CORS-enabled API
- ✓ MongoDB Integration

## License

ISC

## Author

The Ritesh Dwivedi
