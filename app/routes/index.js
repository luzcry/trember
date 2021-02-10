import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @action
  redirect() {
    this.transitionTo('list');
  }
}
