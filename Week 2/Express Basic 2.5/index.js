const express = require("express");
const app = express();

var users = [{
    name: "Vineet",
    kidneys: [{
        healthy: false
    },
    {
        healthy: true
    },
    ]
}];

app.use(express.json())

app.get("/", function (req, res) {
    const vineetKidneys = users[0].kidneys;
    const noOfKidneys = vineetKidneys.length;

    const HealthyKidneys = vineetKidneys.filter(kidney => kidney.healthy === true).length;
    const UnHealthyKidneys = vineetKidneys.filter(kidney => kidney.healthy === false).length;

    res.json({
        noOfKidneys,
        HealthyKidneys,
        UnHealthyKidneys
    });
});

//To send data use body
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({ healthy: isHealthy })

    res.json({
        msg: "Done"
    })
})


//Update the data 
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys.healthy = true;
    }
    res.json({})
})

app.delete("/", function (req, res) {

    const NewKidneys = []
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            NewKidneys.push({ healthy: true })
        }
    }
    users[0].kidneys = NewKidneys;
    res.json({ msg: "Deleted" })
})
app.listen(3000);
