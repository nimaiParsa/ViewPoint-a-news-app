
# ViewPoint - A News Scraper App

Introducing ViewPoint, the ultimate news aggregation app that brings all your favorite news sources to one place. Stay updated with headlines from multiple viewpoints, reducing bias and ensuring a balanced perspective, saving you the hassle of switching between different news apps. Dive into diverse perspectives, get informed, and stay ahead with ViewPoint.


## Screenshots

![App Home Screenshot](/readme-assets//screenshot.png)

![App Read Later Screenshot](/readme-assets//screenshot-readlater.png)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the backend directory

`MONGO_URI` MongoDb Connection String

`JWT_SECRET` JSON Web Token Secret 

`JWT_LIFETIME` JSON Web Token Expiration Lifetime
## Run Locally

Clone the project

```bash
  git clone https://github.com/nimaiParsa/ViewPoint-a-news-app.git
```
Go to the project directory

```bash
  cd ViewPoint-a-news-app
```

Install dependencies

```bash
  cd backend
  npm install
  cd ..
```

```bash
  cd frontend
  npm install
  cd ..
```

Start the server

```bash
  cd backend
  npm run start
  cd ..
```
Start the frontend

```bash
  cd frontend
  npm run build
  npm run preview
  cd ..
```
## Tech Stack

**Client:** React

**Database:** MongoDb

**Server:** Node, Express


## Authors

- [@nimaiParsa](https://www.github.com/nimaiParsa)

