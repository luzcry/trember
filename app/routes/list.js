import Route from '@ember/routing/route';

export default class ListsRoute extends Route {
  model(){
    return this.store.query('list', { query: ref => {
      console.log(ref)
      return ref} } );
  }
}
