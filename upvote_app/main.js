Vue.component('blog',{
   template: `
<div>
    <article class="media" :class="{ 'blue-border': submission.votes >= 20  }" :key="submission.id" v-for="submission in sortedSubmissions">
            <figure class="media-left">
                <img class="image is-64x64"
                 :src="submission.submissionImage">
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <a :href="submission.url" class="has-text-info">{{submission.title}}</a>
                            <span class="tag is-small">#4</span>
                        </strong>
                        <br>
                       {{submission.description}}
                        <br>
                        <small class="is-size-7">
                            Submitted by:
                            <img class="image is-24x24"
                                 :src="submission.avatar">
                        </small>
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span class="icon is-small" @click="upvote(submission)">
                <i class="fa fa-chevron-up"></i>
                <strong class="has-text-info">{{submission.votes}}</strong>
                </span>
            </div>
        </article>
   </div>
   `,
    props:['submissions'],
    data() {
       return {
           content : this.submissions
       }
    },

    computed: {
        sortedSubmissions() {
            return this.content.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    },

    methods: {
       upvote(item) {
           item.votes+=1
       }
    }
});


new Vue ({
   el: '#app',
   data: {
       submissions: Seed.submissions
   }
});