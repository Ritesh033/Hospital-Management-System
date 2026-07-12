# Development Guide

## Quick Start

### Option 1: Run Both Services (Recommended)
```bash
cd hospital-management-system
bash start.sh
```

### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd hospital-management-system/backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd hospital-management-system/frontend
npm install
npm start
```

## Backend Development

### Project Structure
```
backend/
├── models/              # Mongoose schema definitions
│   ├── user.js
│   ├── role.js
│   ├── appointment.js
│   ├── department.js
│   └── prescription.js
├── routes/              # API route handlers
│   ├── users.js
│   ├── roles.js
│   ├── appointments.js
│   ├── departments.js
│   └── prescriptions.js
├── app.js               # Express app setup
├── config.js            # Configuration
├── package.json         # Dependencies
└── .env                 # Environment variables
```

### Creating a New Route

1. Create a model in `models/`:
```javascript
// models/example.js
const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Example', exampleSchema);
```

2. Create a route in `routes/`:
```javascript
// routes/examples.js
const express = require('express');
const router = express.Router();
const Example = require('../models/example');

router.get('/', async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
```

3. Register the route in `app.js`:
```javascript
const exampleRoutes = require('./routes/examples');
app.use('/api/examples', exampleRoutes);
```

### Environment Variables
- `NODE_ENV`: Set to 'development' or 'production'
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string

### Database Connection
MongoDB should be running before starting the backend:

**Local MongoDB:**
```bash
mongod
```

**MongoDB Atlas (Cloud):**
Update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hospitalManagement
```

## Frontend Development

### Project Structure
```
frontend/src/
├── components/          # React components
│   ├── UserForm.js
│   └── UserList.js
├── App.js               # Root component
├── index.js             # Entry point
└── App.css              # Styles
```

### Creating a New Component

```javascript
// src/components/ExampleComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/examples`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ExampleComponent;
```

### API Client Configuration

The API base URL is set in `.env`:
```
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

Use it in components:
```javascript
const API_URL = process.env.REACT_APP_API_BASE_URL;

axios.get(`${API_URL}/users`)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

## Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

### Build Frontend
```bash
cd frontend
npm run build
```

The build folder will contain optimized production files.

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`
- Verify network connectivity for cloud databases

### CORS Errors
- Backend CORS is enabled for all origins in development
- Ensure frontend `REACT_APP_API_BASE_URL` matches backend URL

### Port Already in Use
- Backend (5000): `lsof -ti:5000 | xargs kill -9`
- Frontend (3000): `lsof -ti:3000 | xargs kill -9`

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Best Practices

### Backend
- Keep routes focused and RESTful
- Use proper HTTP status codes
- Validate input data
- Handle errors gracefully
- Use environment variables for sensitive data

### Frontend
- Use functional components with hooks
- Keep components small and focused
- Use axios interceptors for common headers/auth
- Handle loading and error states
- Avoid prop drilling with context API for shared state

## Deployment

### Backend (Node.js)
Can be deployed to:
- Heroku
- Railway
- Render
- AWS (EC2, Lambda)
- Google Cloud

### Frontend (React)
Can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Axios Documentation](https://axios-http.com/)
