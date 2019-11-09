<template>
<v-container>
<v-layout row wrap class="mt-2">
    <v-flex xs-12 sm-6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetup" class="info">Explore Bils</v-btn>
    </v-flex>
    <v-flex xs-12 sm-6 class="text=xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Bils</v-btn>
    </v-flex>
</v-layout>
<v-layout row wrap class="mt-2">
    <v-flex xs12>
        <v-carousel>
    <v-carousel-item
    style="cursor:pointer"
      v-for="meetup in meetups"
      :key="meetup.id"
      :src="meetup.imageurl"
      @click="onLoadMeetup(meetup.id)"
      reverse-transition="fade-transition"
      transition="fade-transition">
      <div class="title">
          {{meetup.title}}
      </div>
    </v-carousel-item>
  </v-carousel>
    </v-flex>
</v-layout>
<v-layout row wrap class="mt-2">
    <v-flex xs12 class="text-center">
        <p>Join our awesome Bils</p>
    </v-flex>
</v-layout>
</v-container>
</template>
<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        }
    },
    methods: {
        onLoadMeetup(id) {
            this.$router.push('/meetup/' + id);
        }
    }
}
</script>
<style scoped>
.title{
    position:absolute;
    left: 40%;
    bottom: 50px;
    background-color:rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 2em; 
}
</style>