<template>
	<member-view>
		<div v-if="!loading" class="profile-container">
			<div class="tab-container">
				<v-tabs v-model="activeTab" vertical>
					<v-tab>Profile Information</v-tab>
					<v-tab>License Information</v-tab>
					<v-tab>Education</v-tab>
				</v-tabs>

				<v-tabs-items v-model="activeTab">
					<!-- <v-tab-item>
						<v-card>
							<v-card-title>Profile Information</v-card-title>
							<v-card-text>
								<template v-for="(item, index) in profile" :key="index">
									<div v-if="index != 'id' && index !== 'date_created' && index !== 'date_updated'" class="profile-row">
										<span>{{ index.replace(/(_)/g, ' ').toUpperCase() }}</span>
										<span>{{ item }}</span>
									</div>
								</template>
							</v-card-text>
						</v-card>
					</v-tab-item> -->

					<v-tab-item>
						<template v-for="(item, index) in profile" :key="index">
							<v-card>
								<v-card-title>Profile Information</v-card-title>
								<v-card-text>
									<template v-for="(row, rowIndex) in item" :key="rowIndex" class="profile-row">
										<div
											v-if="rowIndex != 'id' && rowIndex !== 'date_created' && rowIndex !== 'date_updated'"
											class="profile-row"
										>
											<span>{{ rowIndex.replace(/(_)/g, ' ').toUpperCase() }}</span>
											<span>{{ row }}</span>
										</div>
									</template>
								</v-card-text>
							</v-card>
						</template>
					</v-tab-item>

					<v-tab-item>
						<v-card>
							<v-card-title>License Information</v-card-title>
							<v-card-text>
								<template v-for="(item, index) in license" :key="index">
									<div v-if="index != 'id' && index !== 'date_created' && index !== 'date_updated'" class="profile-row">
										<span>{{ index.replace(/(_)/g, ' ').toUpperCase() }}</span>
										<span>{{ item }}</span>
									</div>
								</template>
							</v-card-text>
						</v-card>
					</v-tab-item>

					<v-tab-item>
						<template v-for="(item, index) in education" :key="index">
							<v-card>
								<v-card-title>Education Information</v-card-title>
								<v-card-text>
									<template v-for="(row, rowIndex) in item" :key="rowIndex" class="profile-row">
										<div
											v-if="rowIndex != 'id' && rowIndex !== 'date_created' && rowIndex !== 'date_updated'"
											class="profile-row"
										>
											<span>{{ rowIndex.replace(/(_)/g, ' ').toUpperCase() }}</span>
											<span>{{ row }}</span>
										</div>
									</template>
								</v-card-text>
							</v-card>
						</template>
					</v-tab-item>
				</v-tabs-items>
			</div>
		</div>
	</member-view>
</template>

<script>
import api from '@/api';

export default {
	data: function () {
		return {
			loading: true,
			profile: null,
			education: null,
			license: null,
			activeTab: null,
		};
	},

	async mounted() {
		this.profile = await api.get('/items/Profile');
		this.education = await api.get('/items/education');
		this.license = await api.get('/items/license');

		this.profile = this.profile.data.data;
		this.education = this.education.data.data;
		this.license = this.license.data.data;

		this.loading = false;
	},
};
</script>

<style lang="scss" scoped>
.profile-container {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 20px;
}

.v-tabs {
	width: 33%;
}

.v-tabs-items {
	width: 66%;
}

.tab-container {
	display: flex;
}

.profile-row {
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
	border-bottom: 1px solid var(--foreground-subdued);

	span {
		display: block;
		flex: 1;

		&:first-child {
			font-weight: bold;
		}
	}
}

.v-card {
	width: 100%;
	max-width: none !important;
	margin: 0 25px 25px;
	background-color: var(--background-normal-alt);
}
</style>
