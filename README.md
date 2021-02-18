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





