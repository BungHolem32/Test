import Gemstone from './Gemstone';

class Diamond extends Gemstone {

  /**
   *
   * @param weight
   * @param cut
   * @param color
   * @param clarity
   */
  constructor({weight, cut, color, clarity}) {
    super('Diamond');

    this._initial_price = 100;
    this._weight = weight;
    this._cut = cut;
    this._color = color;
    this._clarity = clarity;
  }

  /**
   *
   * @returns {*}
   */
  get weight() {
    return this._weight;
  }

  /**
   *
   * @param value
   */
  set weight(value) {
    this._weight = value;
  }

  /**
   *
   * @returns {*}
   */
  get cut() {
    return this._cut;
  }

  set cut(value) {
    this._cut = value;
  }

  /**
   *
   * @returns {*}
   */
  get color() {
    return this._color;
  }

  /**
   *
   * @param value
   */
  set color(value) {
    this._color = value;
  }

  get clarity() {
    return this._clarity;
  }

  /**
   *
   * @param value
   */
  set clarity(value) {
    this._clarity = value;
  }

  /**
   *
   */
  get type() {
    return this._type;
  }

  /**
   *
   * @param value
   */
  set type(value) {
    this._type = value;
  }

  /**
   *
   * @returns {number}
   */
  get initial_price() {
    return this._initial_price;
  }

  /**
   *
   * @param value
   */
  set initial_price(value) {
    this._initial_price = value;
  }
}

export default Diamond;