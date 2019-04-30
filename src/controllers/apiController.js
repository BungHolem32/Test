import Diamond from '../models/Diamond';
import {PriceGenerator} from '../libararies/PriceGenerator';

const { validationResult } = require('express-validator/check');

class ApiController {
  static index(req,res){
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let DiamondStone = new Diamond(req.body);
    let DiamondPriceGenerator = new PriceGenerator(DiamondStone);
    let price = DiamondPriceGenerator.handle();

    price.then( (p) => {
      res.json({data:{price:p}})
    });
  }
}

export default ApiController