const express = require('express')
const router = express.Router()

require('./routes/stud')(router)

module.exports = router