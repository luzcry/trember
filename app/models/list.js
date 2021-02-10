import Model, { attr, hasMany } from '@ember-data/model';

export default class ListModel extends Model {
  @attr('string') title;
  @hasMany('card',  { subcollection: true }) cards ;
}
