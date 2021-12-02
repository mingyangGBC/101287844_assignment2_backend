const router = require('express').Router();
let Employee = require('./model');


router.route('/api/v1/employees').get((req, res) => {
    Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/api/v1/employees').post((req, res) => {
  
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

  
    const newEmployee = new Employee({
        fName,
        lName,
        email,
    });
  
    newEmployee.save()
    .then(() => res.json('Employee added!'))
    .catch(err => res.json('Error: ' + err));
  });

  router.route('/api/v1/employees/:id').get((req, res) => {
    Employee.findById(req.params.id)
      .then(employees => res.json(employees))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/api/v1/employees/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
      .then(() => res.json('Employee deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/api/v1/employees/:id').put((req, res) => {
    Employee.findById(req.params.id)
      .then(employees => {
        employees.fName = req.body.fName;
        employees.lName = req.body.lName;
        employees.email = req.body.email;
      
  
        employees.save()
          .then(() => res.json('Employee updated!'))
          .catch(err => res.json('Error: ' + err));
      })
      .catch(err => res.json('Error: ' + err));
  });

module.exports = router;