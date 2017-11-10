<template>
  <v-app>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in" >
            <v-layout column align-center v-if="show" style="margin:0 10%">
              <blockquote v-if="show">
                <span class="quote" transition="slide-x-transition">&#8220;{{quote.quote}}&#8221;</span>
                <footer>
                  <small>
                    <span class="author"><em>&mdash;{{quote.author}}</em></span>
                  </small>
                </footer>
              </blockquote>
            </v-layout>
          </v-slide-y-transition>
          <div class="social-sharing">
            <social-sharing url="https://devx.fun"
              :title="quote.quote+' - '+quote.author"
              hashtags="devx.fun"
              inline-template>
                <div>
                  <network network="facebook">
                    <i class="fa fa-fw fa-facebook"></i> Facebook
                  </network>
                  <network network="twitter">
                    <i class="fa fa-fw fa-twitter"></i>| Twitter
                  </network>
                </div>
              </social-sharing>
          </div>
        </v-container>
      </v-content>
    </main>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import quotes from './quotes';
let n = 0;
  export default {
    data () {
      return {
        quoteInterval:'',
        progressInterval:'',
        value:0,
        show: false,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        quote: {
          quote:'',
          author:''
        },
        quotes: []
      }
    },
    beforeDestroy () {
      clearInterval(this.quoteInterval);
    },
    mounted(){
      this.loadQuotes();
      this.quoteInterval = setInterval(this.renderQuote,15000);
    },
    methods: {
      loadQuotes(){
        this.quotes = quotes;
        this.renderQuote();
      },
      renderQuote(){
        this.show = false;
        if(this.quotes.length > 0){
          n = Math.floor(Math.random() * (Math.floor(this.quotes.length) - 0) + 0);
          console.log(n);
          this.quote = this.quotes[n];
          setTimeout( ()=>{this.show = true},500 );
        }else{
          console.log('No quotes found');
        }
      }
    }
  }
</script>
<style type="text/css">
.quote{
  font-size: 35px !important;
}
.author{
  font-size: 18px !important;
}
.fluid{
  margin-top: 10%;
}
.social-sharing{
  float: right;
  margin-right: 10%;
  cursor: pointer;
}
</style>
