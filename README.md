# Mini Healthcare

## Project Overview

This project is a **Mini Healthcare Support Web Application** built as part of an internship assignment.  
It demonstrates **clean backend architecture**, **modular frontend design**, and a **simple automation feature** aligned with real-world system design practices.

The application allows users to submit healthcare support requests through a form. The backend processes the request, validates data, determines request priority automatically, and stores it.

---

## Key Features

- Support / Contact form for patients or users
- Backend layered architecture (Controller → Service → Repository)
- Automation logic to determine request priority
- Modular frontend using reusable components
- Clean separation of concerns
- Easy extensibility for AI/ML integration

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Fetch API
- Component-based architecture

### Backend
- Node.js
- Express.js
- In-memory data storage (can be replaced with DB)
- REST APIs

---

## High-Level System Design (HLD)

### Architecture Overview

```

Client (Browser)
    |
    | HTTP (JSON)
    v
Frontend (React)
    |
    | API Calls
    v
Backend (Express)
    |
    | Business Logic
    v
Service Layer
    |
    | Data Access
    v
Repository Layer

```
---

## Low-Level Design (LLD)

### Backend Folder Structure

```

backend/
├── src/
│   ├── controllers/
│   │   └── supportController.js
│   ├── services/
│   │   └── supportService.js
│   ├── repositories/
│   │   └── supportRepository.js
│   ├── routes/
│   │   └── supportRoutes.js
│   ├── app.js
│   └── server.js
└── package.json

````

---

### Controller Layer

**Responsibility**
- Handle HTTP requests and responses
- No business logic

**Example**
```js
submitSupportRequest(req, res)
````

---

### Service Layer

**Responsibility**

* Business logic
* Validation
* Automation logic (priority detection)

**Automation Logic**

* Analyzes message text
* Assigns priority (`high` or `normal`)

```js
determinePriority(message)
```

This layer is designed to be easily replaceable with:

* NLP models
* LLM-based classifiers
* Rule engines

---

### Repository Layer

**Responsibility**

* Data persistence
* Abstracts data source

Current implementation:

* In-memory array

Future enhancement:

* MongoDB / PostgreSQL / MySQL

---

## Frontend Architecture (LLD)

### Folder Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── SupportForm.jsx
│   │   ├── InputField.jsx
│   │   └── PriorityBadge.jsx
│   ├── services/
│   │   └── supportApi.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
```

---

### Frontend Design Principles

* Reusable components
* API abstraction layer
* Stateless UI components
* Clear separation between UI and logic

---

## API Design

### Submit Support Request

**Endpoint**

```
POST /api/support
```

**Request Body**

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "message": "Urgent help needed immediately"
}
```

**Response**

```json
{
  "message": "Support request submitted",
  "data": {
    "id": 1700000000000,
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "message": "Urgent help needed immediately",
    "priority": "high",
    "createdAt": "2026-02-09T..."
  }
}
```

---

## Automation / AI Concept

### Priority Classification

The system automatically determines request priority based on message content.

**Logic Used**

* If message contains keywords like `urgent` or `immediately` → `high`
* Otherwise → `normal`

**Why this qualifies as automation**

* Reduces manual triage
* Improves response efficiency
* Easily replaceable with ML or AI models

---

## Scalability & Future Enhancements

* Replace in-memory storage with database
* Add authentication (JWT)
* Integrate real AI models (NLP / LLM)
* Admin dashboard for support staff
* Email or notification system
* Logging and monitoring

---

## How This Project Demonstrates System Design Skills

* Clean layered backend architecture
* Business logic isolated in service layer
* Automation logic designed for extensibility
* Modular frontend architecture
* Real-world REST API design

---

## Conclusion

This project showcases a production-ready mindset with clean architecture, scalable design, and automation logic. It is suitable as a foundation for a full-fledged healthcare support system and demonstrates strong backend and system design fundamentals.
