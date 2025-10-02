# Customer Management System - Deployment Guide

## Project Overview
This is a Next.js application with MongoDB integration for customer management. The system includes:
- Customer CRUD operations (Create, Read, Update, Delete)
- Customer detail pages
- Modern UI with Material-UI components
- RESTful API endpoints

## Files Created/Modified

### Models
- `/models/Customer.js` - Customer data model with Mongoose schema

### API Routes
- `/app/api/customer/route.js` - Main customer CRUD endpoints
- `/app/api/customer/[id]/route.js` - Individual customer operations

### UI Pages
- `/app/customer/page.js` - Customer management page with CRUD operations
- `/app/customer/[id]/page.js` - Customer detail page
- `/app/page.js` - Updated main page with customer management link

### Documentation
- `/API_Design_Document.md` - Complete API documentation with curl examples

## Environment Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file with:
   ```
   MONGODB_URI=mongodb://localhost:27017/customer-management
   ```

3. **Database Setup:**
   - Ensure MongoDB is running
   - The application will automatically create the database and collections

## Deployment Steps

### For VM Deployment (/fin-customer)

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Configure web server (nginx/apache):**
   - Set up reverse proxy to port 3000 (or your chosen port)
   - Point `/fin-customer` to your Next.js application

4. **Example nginx configuration:**
   ```nginx
   location /fin-customer {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
   }
   ```

### For Development Testing

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Access the application:**
   - Main page: http://localhost:3000
   - Customer management: http://localhost:3000/customer

## API Endpoints

### Customer Management
- `GET /api/customer` - List all customers
- `POST /api/customer` - Create new customer
- `PUT /api/customer` - Update customer
- `DELETE /api/customer` - Delete customer
- `GET /api/customer/[id]` - Get specific customer
- `PUT /api/customer/[id]` - Update specific customer
- `DELETE /api/customer/[id]` - Delete specific customer

## Features Implemented

### ✅ Task 1: Customer Model
- Name (String, required)
- Date of Birth (Date, required)
- Member Number (Number, required, unique)
- Interests (String, required)

### ✅ Task 2: CRUD API
- Complete RESTful API with all CRUD operations
- Proper error handling and validation
- API documentation with curl examples

### ✅ Task 3: CRUD UI
- 3.1 List all customers - ✅ Grid view with customer cards
- 3.2 Delete customers - ✅ Delete button with confirmation
- 3.3 Add new customers - ✅ Modal form for new customers
- 3.4 Update existing customer - ✅ Edit functionality

### ✅ Task 4: Customer Detail Page
- Dedicated page showing all customer details
- Age calculation
- Member information display
- Quick actions for editing

## Testing the Application

1. **Add a customer:**
   - Click "Add Customer" button
   - Fill in the form with required fields
   - Submit to create

2. **View customers:**
   - All customers display in a grid
   - Click eye icon to view details

3. **Edit customer:**
   - Click edit icon on any customer card
   - Modify the information
   - Save changes

4. **Delete customer:**
   - Click delete icon
   - Confirm deletion

5. **View customer details:**
   - Click on any customer card's view icon
   - See detailed information page

## Production Considerations

1. **Environment Variables:**
   - Set proper MONGODB_URI for production
   - Configure any additional environment variables

2. **Database:**
   - Use production MongoDB instance
   - Ensure proper backup and security

3. **Performance:**
   - Application is optimized with Next.js
   - Static generation where possible
   - API routes handle dynamic content

4. **Security:**
   - Input validation on both client and server
   - Proper error handling
   - No sensitive data exposure

## Submission Checklist

- ✅ API Design doc (Microsoft Word compatible format)
- ✅ GitHub repository with all code
- ✅ Customer model with required attributes
- ✅ CRUD API implementation
- ✅ CRUD UI with all operations
- ✅ Customer detail page
- ✅ Application builds successfully
- ✅ Ready for deployment

## Notes

- The application uses Material-UI for consistent, modern design
- All forms include proper validation
- Error handling is implemented throughout
- The API follows RESTful conventions
- Database operations use Mongoose for MongoDB integration
- The application is fully responsive and mobile-friendly
