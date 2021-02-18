const Employee = require('./models/Employee');

exports.resolvers = {
    Query: {
        getEmployee: async (parent, args) => {
            return await Employee.find({});
        },
        getEmployeeByID: async (parent, args) => {
            return await Employee.findById(args.id);
        },
        getEmployeeByCity: async (parent, args) => {
            return await Employee.find({"city" : args.city});
        }
    },
    Mutation: {
        addEmployee: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newEmployee = new Employee({
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                gender: args.gender,
                city: args.city,
                designation: args.designation,
                salary: args.salary,
            });
        return await newEmployee.save();
      },
      updateEmployee: async (parent, args) => {
            console.log(args)
            if (!args.id){
                return;
            }
            return await Employee.findOneAndUpdate(
            {
                _id: args.id
            },
            {
                $set: {
                    firstname: args.firstname,
                    lastname: args.lastname,
                    email: args.email,
                    gender: args.gender,
                    city: args.city,
                    designation: args.designation,
                    salary: args.salary
                }
            }, {new: true}, (err, employee) => {
                if (err) 
                {
                    console.log('Something went wrong when updating the employee');
                } else 
                {
                    return employee
                }
            }
        );
      },
      deleteEmployee: async (parent, args) => {
        console.log(args)
        if (!args.id){
            return JSON.stringify({status: false, "message" : "No ID found"});
        }
        return await Employee.findByIdAndDelete(args.id)
      },
    }
  }