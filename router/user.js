const express = require('express')
const router = express.Router()
const mysql = require('mysql')
router.get('/messages', (req, res) => {
    console.log("1111111111")
    res.end()
});

router.get("/users", (req, res) => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "ggclown@@@@@",
        database: "node"
    });
    const queryString = "SELECT * FROM employee"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users:" + err)
            res.sendStatus(500)
            return
        }
        res.json(rows)
    })

    // res.send("Nodemon auto updates when I save this file")
})

router.post('/employee_create', (req, res) => {
    console.log("Trying to create a new employee")
    console.log("Fetching how do we get the data?? ")

    console.log("First name: " + req.body.create_first_name)
    const firstName = req.body.create_first_name
    const lastName = req.body.create_last_name

    const queryString = "INSERT INTO employee (firstName, lastName) VALUES(?, ?)"
    getConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new employee:" + err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new employee with id:", results.insertedId);
        res.end()
    });
    res.end()
});

router.get('/users/:id', (req, res) => {
    console.log("Fetching users with id:" + req.params.id)

    const connection = getConnection()

    const userId = req.params.id
    const queryString = "SELECT * FROM employee WHERE id = ?"
    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for employee:" + err)
            res.sendStatus(500)
            return
        }
        console.log("I Think i fetched employee successfully")

        const users = rows.map((row) => {
            return { first_Name: row.firstName, last_Name: row.lastName }
        });

        res.json(rows)
    });

    // res.end()
});

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'ggclown@@@@@',
    database: 'node'
})

function getConnection() {
    return pool
}

module.exports = router