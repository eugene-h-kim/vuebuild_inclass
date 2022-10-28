// all imports have to happen here at the top
import ProfPanel from './components/TheProfComponents.js'

(() => {
    // this imports the Vue library as a variable called Vue / instantiate the Vue instance here
  const { createApp } = Vue;

  createApp({
    // ALWAYS get your remote date here, in the created lifecycle hook, using fetch or the dataMiner
    created() {
      // fetch the remote(json) data here and pass it to the data object(Vue instance)
      fetch('./data.json')
        .then(res => res.json())
        .then(data => {
          // throw the data into the Vue instance
          // the "this" keyword ALWAYS refers to the Vue instance itself
          this.dynamicData = data;
        })
      .catch(error => console.error(error));
    },

    data() {
      return {
        welcome: 'Hello Vue!',
        anotherMessage: 'Vue is freaking awesome, yo',
        profs: ['Joe', 'John', 'Jarrod', 'Justin'],
        yetAnotherMessage: 'more data to render on the page',
        dynamicData: {},
        currentProf: {},
        username: '',
        password: ''
      }
    },

    methods: {
      logClicked() {
        console.log('clicked on a button');
      },

      showData(item) {
        // debugger;
        this.currentProf = item;
      },

      sendForm() {
        console.log(this.username, this.password);
      }
    },

    components: {
      profpanel: ProfPanel
    }

  }).mount('#app');
})();