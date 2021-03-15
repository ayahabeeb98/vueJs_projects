Vue.component('modal', {
    template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
         <div class="field">
          <label class="label">Task</label>
          <div class="control">
            <input class="input" v-model="task" type="text" placeholder="Add a new task .. ">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="$emit('add-task',task)">Submit</button>
          </div>
        </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close-modal')"></button>
    </div>
    `,
    data() {
        return {
            task: ''
        }
    },
});


Vue.component('tabs', {
   template: `
     <div>
         <div class="tabs">
              <ul>
                 <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
                     <a href="#" @click="selectedTab(tab)">
                         {{tab.name}}
                     </a>
                 </li>
              </ul>
         </div>
           
         <div class="tab-content">
            <slot></slot>
          </div>
     </div>
`,
    data() {
      return{
          tabs: []
      }
    },

    created(){
       this.tabs = this.$children;
    },

    mounted() {
       this.tabs[0].isActive = true
    },
    methods: {
        selectedTab(tabName) {
            this.tabs.forEach(tab=>tab.isActive = tab === tabName);
        }
    }

});

Vue.component('tab',{
    template:`
     <div v-show="isActive">
        <slot></slot>
     </div> 
    `,


    props: {
        name: {required:true},
        selected: {default:false}
    },

    data() {
        return {
            isActive: false
        }
    },

    amounted() {
        this.isActive = this.selected
    },

});

var app = new Vue({
    el: '#root',
    data: {
        tasks:[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        ],
        showModal: false
    },
    methods:  {
        add(task) {
            this.tasks.unshift(task);
            this.showModal = false
        }

    }
});
