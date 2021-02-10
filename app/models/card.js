import Model, { attr, belongsTo } from '@ember-data/model';

export default class CardModel extends Model {
  @attr('sting') ID;
  @attr('sting') title;
  @belongsTo('list',  { subcollection: true }) list ;
}
