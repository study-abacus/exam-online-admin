import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'exam-online-admin/mixins/authenticated-route-mixin';

const AuthenticatedRoute = Route.extend(AuthenticatedRouteMixin);

export default class IndexRoute extends AuthenticatedRoute {}
