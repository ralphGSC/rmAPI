'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/rendimento-controller');
const authService = require('../services/auth-service');

router.get('/chapa/:chapa/ano/:ano', authService.authorize, controller.get);

module.exports = router;