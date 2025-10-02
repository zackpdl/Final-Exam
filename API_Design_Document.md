# Customer Management API Design Document

## Overview
This document describes the CRUD API endpoints for the Customer Management system built with Next.js and MongoDB.

## Customer Model
```javascript
{
  name: String (required),
  dateOfBirth: Date (required),
  memberNumber: Number (required, unique),
  interests: String (required),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## API Endpoints

### 1. Read All Customers
**Route:** GET /api/customer
**Payload (body):** None
**Response:** Array of customer objects
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "dateOfBirth": "1990-05-15T00:00:00.000Z",
    "memberNumber": 1,
    "interests": "movies, football",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```
**File:** /app/api/customer/route.js
**Test curl:**
```bash
curl -X GET http://localhost:3000/api/customer
```

### 2. Create New Customer
**Route:** POST /api/customer
**Payload (body):** Customer object
```json
{
  "name": "John Doe",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football"
}
```
**Response:** Created customer object with _id
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
**File:** /app/api/customer/route.js
**Test curl:**
```bash
curl -X POST http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","dateOfBirth":"1990-05-15T00:00:00.000Z","memberNumber":1,"interests":"movies, football"}'
```

### 3. Update Existing Customer
**Route:** PUT /api/customer
**Payload (body):** Customer object with _id
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Smith",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gaming"
}
```
**Response:** Updated customer object
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Smith",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gaming",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-02T00:00:00.000Z"
}
```
**File:** /app/api/customer/route.js
**Test curl:**
```bash
curl -X PUT http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{"_id":"507f1f77bcf86cd799439011","name":"John Smith","dateOfBirth":"1990-05-15T00:00:00.000Z","memberNumber":1,"interests":"movies, football, gaming"}'
```

### 4. Delete Customer
**Route:** DELETE /api/customer
**Payload (body):** Customer ID object
```json
{
  "_id": "507f1f77bcf86cd799439011"
}
```
**Response:** Success message
```
"Customer deleted successfully"
```
**File:** /app/api/customer/route.js
**Test curl:**
```bash
curl -X DELETE http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{"_id":"507f1f77bcf86cd799439011"}'
```

### 5. Read Single Customer
**Route:** GET /api/customer/[id]
**Payload (body):** None
**Response:** Single customer object
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
**File:** /app/api/customer/[id]/route.js
**Test curl:**
```bash
curl -X GET http://localhost:3000/api/customer/507f1f77bcf86cd799439011
```

### 6. Update Single Customer by ID
**Route:** PUT /api/customer/[id]
**Payload (body):** Customer object (without _id)
```json
{
  "name": "John Smith",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gaming"
}
```
**Response:** Updated customer object
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Smith",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gaming",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-02T00:00:00.000Z"
}
```
**File:** /app/api/customer/[id]/route.js
**Test curl:**
```bash
curl -X PUT http://localhost:3000/api/customer/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Smith","dateOfBirth":"1990-05-15T00:00:00.000Z","memberNumber":1,"interests":"movies, football, gaming"}'
```

### 7. Delete Single Customer by ID
**Route:** DELETE /api/customer/[id]
**Payload (body):** None
**Response:** Success message
```
"Customer deleted successfully"
```
**File:** /app/api/customer/[id]/route.js
**Test curl:**
```bash
curl -X DELETE http://localhost:3000/api/customer/507f1f77bcf86cd799439011
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Missing required fields"
}
```

### 404 Not Found
```json
{
  "error": "Customer not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

## Database Connection
- MongoDB connection is established through `/lib/db.js`
- Uses environment variable `MONGODB_URI`
- Implements connection caching for performance

## Validation
- All fields are required for customer creation
- Member number must be unique
- Date of birth must be a valid date
- Name and interests must be non-empty strings
