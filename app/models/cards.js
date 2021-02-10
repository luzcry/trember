import Model, { attr, belongsTo } from '@ember-data/model';

export default class CardsModel extends Model {
  @attr('sting') title;
  @belongsTo('list',  { subcollection: true }) list ;
}
