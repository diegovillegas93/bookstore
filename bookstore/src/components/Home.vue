<template>
  <v-jumbotron color="grey lighten-1">
    
    <v-container fill-height>

      <!--
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">
              {{ $t('welcome.title',{app: 'Vuejs 2 + Firebase'})}}
          </h3>
          <span class="subheading">{{$t('welcome.content')}}</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">{{$t('welcome.call_to_action')}}</div>
          <v-btn large color="primary" class="mx-0">{{$t('welcome.action_button')}}</v-btn>
        </v-flex>
      </v-layout>
     -->
     
     <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" ></v-carousel-item>
      </v-carousel>
    </v-container>
  </v-jumbotron>
</template>

</<script>
export default {
  name: 'home',
  data () {
      return {
        items: [
          {
            src: 'https://www.viajarafrancia.com/wp-content/uploads/2016/04/oto%C3%B1o-en-la-ciudad-de-paris-1024x640.jpg'
          },
          {
            src: 'https://farm9.staticflickr.com/8386/8494638855_b35f10fea4_c.jpg'
          },
          {
            src: 'https://s3.pixers.pics/pixers/700/FO/57/66/83/93/700_FO57668393_b309fa6993e3ee57c8dca196a40bf5ce.jpg'
          },
          {
            src: 'http://3.bp.blogspot.com/-H1NS9l_t6no/UZkBQTj0RpI/AAAAAAAADW8/3l6U8z2DzQQ/s1600/Fondo+HD+para+bajar+-+WiriWiri_info+-+(38).jpg'
          }
        ]
      }
    }
  
}
</script>

