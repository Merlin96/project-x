<template>
<v-container>
<v-layout row>
<v-flex xs12>
		<h4 class="primary--text">Create a new Meetup</h4>
</v-flex>
<v-layout row>
		<v-flex xs12>
				<form @submit.prevent="onCreateMeetup">
						<v-layout row>
								<v-flex xs12 sm6 offset-sm3>
										<v-text-field 
										name="title" 
										label="Title"
										id="title"
										v-model="title"
										required>  </v-text-field>
								</v-flex>
						</v-layout>
						<v-layout row>
								<v-flex xs12 sm6 offset-sm3>
										<v-text-field 
										name="location" 
										label="Location"
										id="location"
										v-model="location">  </v-text-field>
								</v-flex>
						</v-layout>
						<v-layout row>
								<v-flex xs12 sm6 offset-sm3>
										<v-text-field 
										name="imageurl" 
										label="image Url"
										id="image-url"
										v-model="imageurl">  </v-text-field>
								</v-flex>
						</v-layout>
						<v-layout row>
								<v-flex xs12 sm6 offset-sm3>
									<img :src="imageurl" height="150">
								</v-flex>
						</v-layout>
						<v-layout row>
								<v-flex xs12 sm6 offset-sm3>
										<v-text-field 
										name="description" 
										label="Description"
										id="description"
										v-model="description">  </v-text-field>
								</v-flex>
						</v-layout>
						<v-layout row>
							<v-flex xs12 sm6 offset-sm3>
								<h4 class="primary--text">Choose Date & Time</h4>
							</v-flex>
						</v-layout>

						<v-layout row>
							<v-flex xs12 sm6 offset-sm3>
								<v-date-picker v-model="date"></v-date-picker>
							</v-flex>
						</v-layout>
						<v-layout row>
							<v-flex xs12 sm6 offset-sm3>
								<v-time-picker v-model="time"></v-time-picker>

							</v-flex>
						</v-layout>
						<v-layout row>
							<v-flex xs12 sm6 offset-sm3>
							<v-btn class="primary" :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
							</v-flex>
						</v-layout>
				</form>
		</v-flex>
</v-layout>
</v-layout>
</v-container>
</template>
<script>
export default {
	data () {
		return {
			title:'',
			location: '',
			imageurl:'',
			description:'',
			date: new Date().toISOString().substr(0,10),
			time: new Date()
		}
	},
	computed: {
		formIsValid () {
			return this.title !== '' && 
			this.location !== '' && 
			this.imageurl !== '' && 
			this.description !==''
		},
		submittableDateTime () {
			const date = new Date(this.date)
			if (typeof this.time === 'string') {
				const hours = this.time.match(/^(\d+)/)[1]
				const minutes = this.time.match(/:(\d+)/)[1]
				date.setHours(hours)
				date.setMinutes(minutes)
			}
			else {
			date.setHours (this.time.getHours())
			date.setMinutes (this.time.getMinutes())
			}
			return date
		}
	},
	methods: {
		onCreateMeetup () {
			if (!this.formIsValid) {
				return
			}
			const meetupData = {
				title: this.title,
				location: this.location,
				imageurl: this.imageurl,
				description: this.description,
				date: this.submittableDateTime
			}
			this.$store.dispatch('createMeetup', meetupData)
			this.router.push('/meetup')
		}
	}
}
</script>