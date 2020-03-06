const express = require("express")
const router = express.Router()
const User = require("../models/user")
const crypto = require("crypto") //Node.js 에서 제공하는 암호화 모듈
//const properties = require('../properties/key.js');
// mapping
// Login
router.get("/", function(req, res, next) {})

// Sign Up
// Post로만 받는다
router.post("/signUp", function(req, res, next) {
  const user = new User()
  // setting values
  user.id = req.body.user.id
  user.password = req.body.user.password
  user.name = req.body.user.name

  user.save(function(err) {
    if (err) {
      console.error(err)
      res.json({ result: 0 })
      return
    }
    res.json({ result: 1 })
  })
})

router.post("/signIn", function(req, res, next) {
  User.findOne({ id: req.body.user.id }, function(err, db_user) {
    if (err) {
      console.error(err)
      res.json({ result: 0 })
      return
    }
    if (db_user.id == req.body.user.id) {
      res.json({ result: 1 })
    } else {
      res.json({ result: 0 })
      return
    }
  })
})

module.exports = router
