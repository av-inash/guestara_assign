# Menu Management Backend API

This project is a Node.js backend server for managing a menu system. The menu is organized into categories, subcategories, and items. It provides CRUD operations and search functionalities, built using Node.js, Express, and MongoDB.

## Project Overview

The Menu Management Backend API allows you to manage a hierarchical menu system that consists of categories, subcategories, and items. Each category can have multiple subcategories, and each subcategory can have multiple items. The API supports creating, reading, updating, and deleting these entities, along with a search functionality for items.

## Features

- **CRUD Operations:** Create, read, update, and delete categories, subcategories, and items.
- **Hierarchical Structure:** Organize items under subcategories, which are further organized under categories.
- **Search Functionality:** Search for items by name.
- **Comprehensive Error Handling:** Detailed error responses for invalid requests.
- **RESTful API Design:** Follows RESTful principles for easy integration.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing categories, subcategories, and items.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.

## To start the project

- npm run dev

## All Category Api

- create_category: http://localhost:4006/api/create-category
- get_all_categories:http://localhost:4006/api/all-categories
- get_categories_by_name:http://localhost:4006/api/category-id-name?name=Toothpaste
- get_categories_by_id:http://localhost:4006/api/category-id-name?id=66c1dae62e14c178cd7cf0c6
- update_categories_by_id:http://localhost:4006/api/category-edit-id?id=66c1dae62e14c178cd7cf0c6

## ALl SubCategory Api

- create_subCategory:http://localhost:4006/api/subcategories
- get_all_subCategories:http://localhost:4006/api/subcategories
- get_subcategory_by_category_id:http://localhost:4006/api/categories/categoryId/subcategories?categoryId=66c1dae62e14c178cd7cf0c6
- subCategory_id:http://localhost:4006/api/subcategory-id?id=66c239a4fa15185e075b77d2
- subCategory_name:http://localhost:4006/api/subcategory-name?name=gel
- update_subcategory:http://localhost:4006/api/subcategory-id?id=66c2340653e985f6f6cc0e73

## All Items Api

- create_item:http://localhost:4006/api/items
- get_item:http://localhost:4006/api/items
- get_item_by_category:http://localhost:4006/api/categories/categoryId/items?categoryId=66c1dae62e14c178cd7cf0c6
- get_item_by_subCategory:http://localhost:4006/api/subcategories/subcategoryId/items?subCategoryId=66c2340653e985f6f6cc0e73
- get_item_by_id:http://localhost:4006/api/items-id?id=66c2438f926927486621dd73
- get_item_by_name:http://localhost:4006/api/items-id?id=66c2438f926927486621dd73
- update_item:http://localhost:4006/api/items-id?id=66c2438f926927486621dd73
- search_item_by_name:http://localhost:4006/api/items/search/name?name=c


1. Which database you have chosen and why?
I went with MongoDB because it’s really good at handling nested data, which is perfect for this kind of project where categories, subcategories, and items are all interconnected.

2. Three things that you learned from this assignment?
How to structure a RESTful API for a project with multiple layers of data relationships.
The importance of clear and consistent API routing to make the backend easier to use and maintain.
How to leverage MongoDB for efficiently managing and querying hierarchical data.

3. What was the most difficult part of the assignment?
The hardest part was definitely making sure that the relationships between categories, subcategories, and items stayed consistent, especially when creating, updating, or deleting them. It required careful planning to ensure data integrity across the board.

4. What you would have done differently given more time?
If I had more time, I would have worked on setting up tests to catch bugs sooner.



