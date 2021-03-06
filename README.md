# Shopping site
This full stack shopping site allows users to register, signin, add and remove items to their cart. This project is currently under developement and being built with React and Semantic UI on the front end and Node / Express, MongoDB on the backend. 

## Technologies:
* React
* React Router
* React-redux
* Semantic UI
* React styled components
* Express 
* Passport passport-JWT
* MongoDB
* Jest & Enzyme

### Setup

```
Create a config.js in server directory and add a secret JWT key
example: 
module.exports = {
    secret: 'dfsdfdjk44323kfls3212545887'
}

 yarn 
 yarn start (Client & Server)
 
 or
 
 npm install
 npm start (Client & Server)
```

- [x] Displaying shopping cart and connecting to server to retrieve data
- [x] Add items to cart and change quantity
- [x] Remove items from cart
- [x] Checkout items in cart
- [x] Add user authentication
- [ ] Searching functionality
- [ ] Testing Redux ations and reducers
- [ ] Add unit testing and mocking to authentication
- [ ] Improve API add images to item list
- [ ] Store items that have been added to cart in redux state
- [x] Styling for Menu header
- [ ] Styling for Login and Register pages
- [x] Styling for List of products
- [x] Styling for Checkout page
