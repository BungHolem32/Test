import express from 'express';
import ApiController from '../controllers/apiController';

const {check} = require('express-validator/check');

const router = express.Router();

/*Get Price page*/
router.post('/getPrice', [
      check('weight', 'value must be numeric').isNumeric(),
      check('cut',
          'value must be on of the following: ideal, very good, good, fair,poor').
          isIn(['ideal', 'poor', 'fair', 'very good', 'good']),
      check('color',
          'value must be on of the following: d-z').
          isIn([
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z']),
      check('clarity').
          isIn([
            'fl',
            'if',
            'vvs1',
            'vvs2',
            'vs1',
            'vs2',
            'si1',
            'si2',
            'si3',
            'i1',
            'i2',
            'i3']),
    ],
    ApiController.index);

export default router;
