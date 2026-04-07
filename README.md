# PROJECT PROPOSAL
Ethio-Core Finance System Using MERN Stack.

# 1. Abstract
This project proposes the design and implementation of a web-based financial management system tailored for Ethiopian organizations. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the system enables efficient tracking of income, expenses, budgeting, and reporting. It improves transparency, reduces manual errors, and supports data-driven decision-making.

# 2. Introduction
Digital financial systems are critical for modern organizations. Many Ethiopian institutions still rely on manual processes or fragmented tools. This project introduces a centralized, secure, and scalable platform to manage financial operations in real time.

# 3. Problem Statement
Manual bookkeeping leads to errors
Poor data security and risk of loss
Lack of real-time reporting
Inefficient auditing and tracking

# 4. Objective
General Objective
To develop a scalable web-based financial system using MERN stack.

Specific Objectives
Build secure authentication system
Manage income and expense records
Generate automated financial reports
Provide interactive dashboards
Ensure data integrity and backup

# 5. Scope of the Project
Includes:
User authentication (Admin/User)
Transaction management
Budget planning
Reports (monthly, yearly)
Dashboard visualization

Excludes:
Mobile app (optional future work)
Integration with banks (future enhancement)  

# 6. Methodology
Development Model
Agile (iterative development)
Tools & Technologies
Frontend: React.js
Backend: Node.js + Express.js
Database: MongoDB
Version Control: Git
# 7. System Architecture
[ Client (React.js) ]
          ↓
[ REST API (Express.js / Node.js) ]
          ↓
[ MongoDB Database ]

Description
Frontend handles UI/UX
Backend manages logic & API
Database stores financial data 

# 8. Data Flow Diagram (DFD)
Level 0 (Context Diagram)
[User] → (Finance System) → [Reports]
Level 1
User → Login System → Dashboard  
User → Transaction Module → Database  
Database → Report Module → User   

# 9. Entity Relationship Diagram (ERD)
Entities:
-User

user_id (PK)
name
email
password
role

-Transaction
transaction_id (PK)
amount
type (income/expense)
category
date
user_id (FK)

-Budget

budget_id (PK)
amount
month
user_id (FK)
Relationship:
User → Transaction (1:M)
User → Budget (1:M)

# 10. Database Schema (MongoDB)
User Collection
{
  "name": "string",
  "email": "string",
  "password": "hashed",
  "role": "admin/user"
}
Transaction Collection
{
  "amount": "number",
  "type": "income/expense",
  "category": "string",
  "date": "date",
  "userId": "ObjectId"
}
Budget Collection
{
  "amount": "number",
  "month": "string",
  "userId": "ObjectId"
}

# 11. System Features
Secure login (JWT authentication)
Add/Edit/Delete transactions
Dashboard with charts
Budget tracking
Export reports (PDF/Excel)

# 12. UI Design (Screens Idea)
1. Login Page
Email & password
Simple clean form
2. Dashboard
Total income
Total expenses
Graphs (bar/pie charts)
3. Transactions Page
Add new transaction
Table view (edit/delete)
4. Reports Page
Monthly & yearly reports
Download button

 Use tools like:

Figma (for UI design)
Chart.js (for graphs in React)

# 13. Expected Outcomes
Fully functional web system
Accurate financial tracking
Reduced manual work
Improved reporting and decisions

# 14. Project Timeline
Phase	Duration
Requirement Analysis	2 weeks
Design	2 weeks
Development	6 weeks
Testing	2 weeks
Deployment	1 week

# 15. Budget
Item	Cost
Hosting	$100
Internet & Tools	$50

Total: $150

# 16. Testing & Evaluation
Unit Testing
Integration Testing
User Acceptance Testing

# 17. Conclusion
The system will modernize financial management for Ethiopian organizations using a scalable and secure MERN-based architecture.
