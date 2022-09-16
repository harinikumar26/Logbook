const res = require('express/lib/response');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");
var cors = require("cors");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
const auth= require("./middleware/auth");
const app = express();
const staffcheck = require('./Models/staffcheck');
const staffdetails = require('./Models/staffdetails');
const placements = require('./Models/placement');
const complaints = require('./Models/complaint');
const clubs = require('./Models/club');
const User = require('./Models/user');
const url = 'mongodb://127.0.0.1:27017/collegelogbook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
mongoose.connect(url, { useNewUrlParser: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.listen(9000, function () {
  console.log('listening to 9000');
})
app.get('/staff', async (req, res) => {
  console.log('staff list');
  const list = await staffdetails.find()
  res.json(list)
});
app.post('/staff', (req, res) => {
  const staffobj = new staffdetails(req.body)
  console.log(req.body);
  res.json(req.body);
  staffobj.save();
  console.log('created successfully')
});

app.put('/staff', async (req, res) => {
  console.log(req.body.staff_id)
  let s = await staffdetails.findOne({ 'staff_id': req.body.staff_id })
  console.log(s);
  s.staff_name = req.body.staff_name
  s.Date_of_birth = req.body.Date_of_birth
  s.Date_of_joining = req.body.Date_of_joining
  s.email_id = req.body.email_id
  s.mobile_no = req.body.mobile_no
  s.address = req.body.address
  s.Type = req.body.Type
  s.save();
  console.log('updated successfully')
  res.send('updated successfully')

})
app.delete('/staff', async (req, res) => {
  let s = await staffdetails.findOneAndDelete({ 'staff_id': req.body.staff_id })
  res.send('Deleted Successfully')

})
app.get('/staffcheck', async (req, res) => {
  console.log('staff list');
  const list = await staffcheck.find()
  console.log('hello world');
  res.json(list)
});
app.post('/staffcheck', (req, res) => {
  const staffobj = new staffcheck(req.body)
  console.log(req.body);
  res.json(req.body);
  staffobj.save();
  console.log('created successfully');
});

app.put('/staffcheck', async (req, res) => {
  console.log(req.body.staff_id)
  let c = await staffcheck.findOne({ 'staff_id': req.body.staff_id })
  console.log(c);
  c.staff_name = req.body.staff_name
  c.Check_out_time = req.body.Check_out_time
  c.Check_in_time = req.body.Check_in_time
  c.Date= req.body.Date
  c.save();
  console.log('updated successfully')
  res.send('updated successfully');

})
app.delete('/staffcheck', async (req, res) => {
  let s = await staffcheck.findOneAndDelete({ 'staff_id': req.body.staff_id })
  res.send('Deleted Successfully')

})
app.get('/club', async (req, res) => {
  console.log(' club details');
  const list = await clubs.find()
  res.json(list )
});
app.post('/club',(req, res) => {
  const clubobj = new clubs(req.body)
  console.log(req.body);
  res.json(req.body);
  clubobj.save();
  console.log('created successfully')
});

app.put('/club', async (req, res) => {
  console.log(req.body.club_id)
  let b = await clubs.findOne({ 'club_id': req.body.club_id })
  console.log(b);
  b.club_name = req.body.club_name
  b.No_of_members = req.body.No_of_members
  b.secretary_name = req.body.secretary_name
  b.secretary_mobile_no = req.body.secretary_mobile_no
  b.secretary_dept = req.body.secretary_dept
  b.save();
  console.log('updated successfully')
  res.send('updated successfully');
})
app.delete('/club', async (req, res) => {
  let b = await clubs.findOneAndDelete({ 'club_id': req.body.club_id })
  console.log('Deleted Successfully')
  res.send('Deleted Successfully')

})
app.get('/placement', async (req, res) => {
  console.log(' Placement details');
  const list = await placements.find()
  res.json(list)
});
app.post('/placement', (req, res) => {
  const placeobj = new placements(req.body)
  console.log(req.body);
  res.json(req.body);
  placeobj.save();
  console.log('created successfully')
});

app.put('/placement', async (req, res) => {
  console.log(req.body.RegNo)
  let p = await placements.findOne({ 'RegNo': req.body.RegNo })
  console.log(p);
  p.RegNo = req.body.RegNo
  p.Student_name = req.body.Student_name
  p.Drive = req.body.Drive
  p.Company_name = req.body.Company_name
  p.Package = req.body.Package
  p.save();
  console.log('updated successfully');
  res.send('updated successfully');

})
app.delete('/placement', async (req, res) => {
  let p = await placements.findOneAndDelete({ 'RegNo': req.body.RegNo })
  console.log('Deleted Successfully')
  res.send('Deleted Successfully')

})

app.get('/complaint', async (req, res) => {
  console.log('Complaints');
  const list = await complaints.find()
  res.json(list)
});
app.post('/complaint', (req, res) => {
  const comobj = new complaints(req.body)
  console.log(req.body);
  res.json(req.body);
  comobj.save();
  console.log('created successfully')
});

app.put('/complaint', async (req, res) => {
  console.log(req.body.Id)
  let d = await complaints.findOne({ 'Id': req.body.Id })
  console.log(d);
  d.Id = req.body.Id
  d.Name = req.body.Name
  d.Description = req.body.Description
  d.save();
  console.log('updated successfully');
  res.send('updated successfully');

});
app.delete('/complaint', async (req, res) => {
  let d = await complaints.findOneAndDelete({ 'Id': req.body.Id })
  console.log('Deleted Successfully')
  res.send('Deleted Successfully')

})
app.get('/staffreport/:Date', (req, res) => {
  console.log('Staff Attendance Report');
  staffcheck.find(
    {
      'Date': req.params.Date
    }
  ).select('staff_name staff_id')
    .then(result => {
      console.log('Staff Present :', result)
      res.status(200).json({
        StaffPresent: result
      })
    })
    .catch(err => {
      console.log('error');
      res.status(404).json({
        error: err
      })
    })
})
app.get('/staffabsent/:Date', (req, res) => {
  console.log('Staff Attendance Report');
  var absent = [];
  staffcheck.find(
    {
      'Date': req.params.Date
    })
    .then(result => {
      console.log('Staff Absent :', result)
      result.map((d, k) => {
        absent.push(d.staff_id);

      })
      staffcheck.find({
        staff_id: { $nin: absent }
      }).select('staff_name staff_id')
        .then(result => {
          console.log("Staff absent :", result)
          res.status(200).json({
            staffAbsent: result
          })
        })
        .catch(error => {
          console.log(error);
        })
    })
    .catch(err => {
      console.log('error');
      res.status(404).json({
        error: err
      })
    })
})
app.post("/register", async (req, res) => {
  try {

    const { first_name, last_name, email, password } = req.body;
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    })
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(200).json(user);
    }else{
    res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
});
