import { App, defineAsyncComponent } from 'vue';
import PublicView from './public/';

const PrivateView = defineAsyncComponent(() => import('./private'));
const MemberView = defineAsyncComponent(() => import('./member'));

export function registerViews(app: App): void {
	app.component('PublicView', PublicView);
	app.component('PrivateView', PrivateView);
	app.component('MemberView', MemberView);
}
