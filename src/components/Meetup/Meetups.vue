<template>
<v-container>
    <v-layout row wrap></v-layout>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md-2></v-flex>
        <v-card class="info mb-2" v-for="meetup in meetups" :key="meetup.id">
            <v-container fluid>
                <v-layout row>
                    <v-flex xs5 sm4 md3>
                        
                        <v-img :src="meetup.imageurl"></v-img>
                    </v-flex>
                    <v-flex xs7 sm8 md9>
                        <v-card-title primary-title mb-0>
                            <div>
                                <h5 class="white--text">{{meetup.title}}</h5>
                                <div>{{meetup.date | date}}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn router text :to="'/meetup/' + meetup.id">
                                <v-icon left  >mdi-arrow-right</v-icon>
                                view Bils</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <p>The Meetups Page</p>
    </v-container>
</template>

<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups
        }
    }
}
</script>