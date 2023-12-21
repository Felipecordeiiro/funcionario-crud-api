const express = require('express')

const router = express.Router()

router.get('/api', (req, res) => {
  req.statusCode(200).send({
    sucess:'true',
    message:'Seja bem-vindo',
    version:'1.0'
  })
})