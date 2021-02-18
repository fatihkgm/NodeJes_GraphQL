# NodeJes_GraphQL

1) Create .env file and 
add;
PORT = 4000
MONGODB_URL = mongodb+srv://admin:<password>@cluster0.vfuyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

2)npm;
npm install
npm start

3) Open browser and enter the url; 
 http://localhost:4000/graphql
 

4) Write the code or copy past to see ifit works
 mutation {
  addEmployee (
    firstname:"Pritesh",
    lastname:"Fatih",
    email:"fatih@fatih.com",
    gender:"Male",
    city:"Toronto",
    designation:"Senior Software Engineer",
    salary:10000.50)
  {
    firstname
    lastname
  }
}

5) Validated it by query ;

query {
  getEmployee{
    firstname
    lastname 
    id
  }
}

<img width="1680" alt="Screen Shot 2021-02-18 at 2 58 56 PM" src="https://user-images.githubusercontent.com/63836841/108414463-42b73e00-71fa-11eb-8a47-f930c88eb044.png">




