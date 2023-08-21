## API Reference

#### User Routes

```http
  GET /api/allusers
  GET /api/userbyemail/:email
  GET /api/userbyid/:_id
  POST /api‎/signup
  POST /api/login
  PUT /api/updateuser
  DELETE /api/deleteuser
```

#### Product Routes

```http
  GET /api/allproducts
  GET /api/productbycategory/:category
  GET /api/productbyid/:_id
  GET /api/productbybrand/:brand
  POST /api‎/addproduct
  PUT /api/updateproduct
  DELETE /api/deleteproduct
```

#### Brand Routes

```http
GET /api/allbrands
GET /api/brandbyid/:_id
POST /api‎/addbrand
PUT /api/updatebrand
DELETE /api/deletebrand
```
