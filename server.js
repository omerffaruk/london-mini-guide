const express = require('express');
const app = express();
const port = 5000;
const heathrow = require('./data/Heathrow.json');
const harrow = require('./data/Harrow.json');
const stratford = require('./data/Stratford.json');

app.get('/', function(req, res) {
    res.send('Homepage');
})

app.get('/:city/:category', function(req, res) {
    const city = req.params.city;
    const upCity = city[0].toUpperCase() + city.substring(1);
    const category = req.params.category;
    const file = require(`./data/${upCity}.json`);
    res.send(file[category]);
})

// app.get('/:city/pharmacies', function(req, res) {
//     const city = req.params.city;
//     if (city === "stratford") {
//       const pharmacies = stratford.pharmacies;
//       res.send(pharmacies);
//       return;
//     } else if (city === "heathrow") {
//       const pharmacies = heathrow.pharmacies;
//       res.send(pharmacies);
//       return;
//     } else if (city === "harrow") {
//       const pharmacies = harrow.pharmacies;
//       res.send(pharmacies);
//       return;
//     }
// })

// app.get("/:city/:colleges", function (req, res) {
//   const city = req.params.city;
//   if (city === "stratford") {
//     const colleges = stratford.colleges;
//     res.send(colleges);
//     return;
//   } else if (city === "heathrow") {
//     const colleges = heathrow.colleges;
//     res.send(colleges);
//     return;
//   } else if (city === "harrow") {
//     const colleges = harrow.colleges;
//     res.send(colleges);
//     return;
//   }
// });

// app.get("/:city/doctors", function (req, res) {
//   const city = req.params.city;
//   if (city === "stratford") {
//     const doctors = stratford.doctors;
//     res.send(doctors);
//     return;
//   } else if (city === "heathrow") {
//     const doctors = heathrow.doctors;
//     res.send(doctors);
//     return;
//   } else if (city === "harrow") {
//     const doctors = harrow.doctors;
//     res.send(doctors);
//     return;
//   }
// });

// app.get("/:city/hospitals", function (req, res) {
//   const city = req.params.city;
//   if (city === "stratford") {
//     const hospitals = stratford.hospitals;
//     res.send(hospitals);
//     return;
//   } else if (city === "heathrow") {
//     const hospitals = heathrow.hospitals;
//     res.send(hospitals);
//     return;
//   } else if (city === "harrow") {
//     const hospitals = harrow.hospitals;
//     res.send(hospitals);
//     return;
//   }
// });

app.listen(port, function () {
    console.log(`The server is listening at port ${port}`);
})