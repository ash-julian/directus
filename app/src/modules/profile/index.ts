import { defineModule } from '@directus/shared/utils';
import ProfileView from './routes/profile.vue';

export default defineModule({
	id: 'profile',
	hidden: false,
	name: '$t:profile',
	icon: 'face',
	routes: [
		{
			name: 'activity',
			path: '',
			component: ProfileView,
			props: true,
		},
	],
});
