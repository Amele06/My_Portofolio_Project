# BrandHorizon
Version: 1.0
Author: Kelvin Aklobessi

# Project Overview
BrandHorizon is a platform designed to help small business owners manage their online advertising efficiently. The system enables business owners to create profiles, list products, and purchase advertising space to promote their products. It also provides dashboards for tracking the performance of their ads.

# Key Features
* Business Profile Creation: Business owners can register their businesses, manage contact details, and update business information.
* Product Listings: Businesses can upload products, including descriptions and prices, which are then visible to customers.
* Advertising Dashboard: Provides metrics on the performance of ads, helping business owners track ad effectiveness.
* User Accounts: Users can register, log in, and manage their accounts.

# Technologies Used
* Front-End:
.React.js (TailwindCSS for styling)
* Back-End:
.Node.js (Express.js framework)
* Database:
.MongoDB for managing business profiles, product listings, and user accounts.
* Deployment:
.AWS for hosting both front-end and back-end services.
.GitHub for version control.

# API Endpoints
* Here are the primary API routes used in BrandHorizon:

* Business Profile
. POST /api/business: Create a new business profile.
. GET /api/business: Retrieve all registered businesses.
# Product Listings
. POST /api/product: Add a new product.
. GET /api/product: Retrieve all products.
# Advertising Spaces
. GET /api/ads: Retrieve available advertising spaces.
. User Accounts
. POST /api/user: Register a new user account.
. GET /api/user: Retrieve details for the currently logged-in user.
