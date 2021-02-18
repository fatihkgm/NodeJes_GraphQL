const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Employee {
     id: ID!
     firstname: String!
     lastname: String!
     email: String!
     gender: String!
     city: String!
     designation: String!
     salary: Float!
   }

   type Query {
     getEmployee: [Employee]
     getEmployeeByID(id: ID!): Employee
     getEmployeeByCity(city: String!): [Employee]
   }

   type Mutation {
     addEmployee(firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!): Employee

     updateEmployee(id: String!,
        firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!): Employee

     deleteEmployee(id: ID!): Employee
   }
`