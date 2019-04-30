import Option from '../models/Option';

export class PriceGenerator {

  //example (Diamond => {13, 'N', 'The Good Cut', 'VS1'}
  constructor(Stone) {
    this._stone = Stone;
  }

  /**
   *
   * @returns {Promise<*>}
   */
  async handle() {
    let weightPrice = this._stone.weight * this._stone._initial_price;
    let colorPrice = await this.getPrice('color', this._stone.color,
        weightPrice);
    let cutPrice = await this.getPrice('cut', this._stone.cut, weightPrice);
    let clarityPrice = await this.getPrice('clarity', this._stone.clarity,
        weightPrice);

    this._stone._price = weightPrice + colorPrice + cutPrice + clarityPrice;

    return await this._stone._price;
  }

  /**
   *
   * @param group
   * @param name
   * @param weightPrice
   * @returns {Promise<number>}
   */
  async getPrice(group, name, weightPrice) {
    let option = await Option.findOne({where: {name: name, group: group}}).
        then(option => {
          return JSON.parse(JSON.stringify(option));
        });

    return (weightPrice * option.worth) / 100;
  }
}