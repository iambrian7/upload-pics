<template>
  <div id="home">
    <div class="wrapper">
    <header class="header">
      <h1 class="seven-title">{{title}} for today: 4/19/2018 {{today.toLocaleTimeString()}}</h1>
       <h2> {{description}}</h2>
    </header>
  <aside class="sidebar">
    <ul>
      <li @click="content = 'Problem'">Problem</li>
      <li @click="content = 'Solution'">Solution</li>
      <li @click="content = 'Mission'">Mission</li>
      <li @click="content = 'Goal'">Goal</li>
      <li @click="content = 'Scope'">Scope</li>
    </ul>
  </aside>
  <article class="content" v-show="content == 'Problem'">
    <h1>Problem</h1>
    <h2>Different Methods</h2>
   <p>There is hundreds of websites that have AA meetings that can be found in any area of the world that you want to explore. Each one has it's own method of finding a meeting. Some are better than others but each one has it's own method of navigation so each one has to be learned. It could become tedious and slow to find a given location. </p>
   <h2>Expensive</h2>
   <p>Some sites are more expensive to create and maintain than others. The cost of creating a site can range from a few hundred dollars to tens of thousands with each one needing expensive maintenance to continually update new information. Overall cost for all the websites that can be found just within the US must be in the millions. There are currently over 110,000 groups just within the US. </p>
   <h2>Overlapping Information</h2>
   <p>There are some areas with overlapping coverage for meetings in the same area. Often with conflicting or missing data. Some websites are updated differently than others which can lead to a frustrating experience when trying to find a meeting.</p>
   <h2>Inter-group vs Areas</h2>
   <p>Local inter-groups often put out a website with meeting information which covers a metro area which they provide service for. AA.org contains a structure of all the areas in the US with each area that may or may not have a website for each area or a combination of areas. </p>
   <p>The inter-groups are not a part of the overall structure of AA.org. Meetings that are registered at an inter-group may or maynot be forwarded to the AA.org body. Area meeting information goes to AA.org but not neccessarily to an inter-group in that area. </p>
   <h2>Example</h2>
   <p>Minneapolis Intergroup <a href="http://aaminneapolis.org//meetings/" target="_blank">aaminneapolis.org</a> has a very nice meeting direcotry but so does the website <a href="http://aaMinnesota.org/meetings/" target="_blank">aaMinnesota</a> which covers areas 35 & 36 (which is all of Minnesota). The aaMinnesota site covers all locations in the aaMinneapolis site but contains less than half of the meeting found in the aaMinneapolis site. </p> 
   <p>I am aware of this because I live in both the areas covering these two website but I'm pretty sure that the problem exists in many other areas of the contry. </p>
   <h2>Conclusion</h2>
   <p>So we conclude that finding an AA meeting can be dificult or impossible. First you have to find which website covers your location and then learn how to use each one you do find and not be sure of the information you find.</p>
   <p>Maybe there's a better way.</p>
  </article>
  <article class="content" v-show="content == 'Solution'">
    <h1>Solution</h1>
    <h2>One website</h2>
   <p>What if there was a website which contained ALL of the AA meetings in the world. Users would easily be able to find the site since it would quicly rise to the top of every Google search concering AA meetings and the site would become very familiar on how to use it since there would only be one way. It would be made very intuitive and user friendly. And what if meetings could be found geographically by the distance from where ever the users computer is located. Searching by city name can some times miss a meeting very close to where they are but in a different city. For instance: I live in Minnetonka and a search of Minnetonka meetings doesn't show up at a meeting less than a mile from my house because the meeting is in Hopkins. I live close to the Hopkins/Minnetonka border. </p>
   <h2>Members add meetings</h2>
   <p>What if any member of AA could add their meeting as long as they had an email address. Each meeting would be confirmed after adding the information and reponding to a validation email. If a meetings would be confirmed periodically the update information would always be current. Meetings would be abandonded after enough confirmations are ignored which would keep only current meetings viable. </p>
   <h2>Spread the Word</h2>
   <p>If the website had the ability to email anyone with a link to a meeting the scope meeting directory would likely continually expand to greater and greater areas. Eveventually every location in the world would be covered. </p>
   <h2>Starting Up</h2>
   <p>If some members would find meetings in an area and then add some meetings in that area and send the email containing the meetings and ask them to help spread the word about this new site. We could call these people "seeders". If each seeder asked each contact person at the new meetings to become seeders themselves we could fill the world with meetings very quickly. That would be using the internet to carry the message to the still suffering alcoholic.</p>
   <h2>Donations</h2>
   <p>If there was a place to donate to help develop the site then site would contiually improve. A small donation from a lot of people would go a long way to may sure the site would never be abandonded. </p>
   <p>The infrastructure required to host a large on-going enterprise would be formatable. The amount of donations would dictate the functionality of the site. One person would not be cabable of handling the work-load of the site if the directory got to a certain size. I don't know at what point that would happen but I'm sure there would come a time when the site was viable and on its way to be the standard for finding meetings in recovery so decisions about the future would have to be made. </p>
   <p>Having a production quality site is different from playing with a prototype and then the real cost would occur. If no donations were forthcoming the site would be abandonded and shut-down. </p>
  </article>
  <article class="content" v-show="content == 'Mission'">
    <h1>Mission</h1>
     <p>Facilitate the search for AA meetings easily and accuratley and encourage others to spread to all reaches of the globe. </p>
  </article>
  <article class="content" v-show="content == 'Goal'">
    <h1>Goal</h1>
    <h2>First</h2>
      <p>Create a prototype with funtioning search, email and add/update meetings would be created. </p>
      <h2>Second</h2>
      <p>Encourage users to add meetings, email others with meetings in other areas to join us and encourage donations to help fund initial development. </p>
  </article>
  <article class="content" v-show="content == 'Scope'">
    <h1>Scope</h1>
    <h2>Initial Development</h2>
    <p>Initially the adding of meetings would on allowed for US locations.</p>
    <p>All that is needed to add a meeting is a geographical location (latitude and longitude), a day of the week, a time of day and the name of the group. More information such as the name of the venue (church, alano, resturant, etc), address, city, state,zip and options like type of meetings (open/closed, men/women/all, topic/step/big book/ etc. </p>
    <h2>Evenutally</h2>
    <p>World-wide meetings would have a database of over 2-300,000 meetings being held each week, representing millions of AA members.</p>
    <p>Other recovery options could be added such as Alonon, NA, etc.</p>
    <p>Cell phone apps could be using the directory. </p>
    <p>Directory-less meeting information could be provided. i.e. ask Siri find me an aa meeting and the answere would say: there is one starting in 45 minutes about 1.2 miles from here.</p>
  </article>
  <footer class="footer">My footer</footer>
</div>
  </div>
</template>
<script>


 module.exports = {
// export default {
  // components: {
  //         'fit-all': httpVueLoader('./fitall.vue'),
  //         'aa-meetings': httpVueLoader('./meetings.vue'),
  //       },
   data: function() {
        return {
          today: new Date(),
          title: "Site Seven",
          description: "A justification of global AA directories",
          content: "Problem"
        }
    },
    methods: {
       startTimer: function(){

        var self = this;
        setInterval(function(){
          self.today = new Date()
        },1000)
      },
    },
    created(){
      // debugger
      this.startTimer();
    }
}
</script>
<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', 'sans-serif';
  background-color: #fff;
  color: #444;
}

h1, p {
  margin: 0 0 1em 0;
}
a{ color: rgba(171, 203, 233, 0.993);}
.wrapper {
  max-width: 940px;
  margin: 0 20px;
  display: grid;
  grid-gap: 10px;
  border: 1px solid black;
}
 .wrapper {
    margin: 0 auto;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 150px 500px;
  }
@media screen and (min-width: 500px) {

  /* no grid support? */
  .sidebar {
    float: left;
    width: 19.1489%;
  }
  .sidebar li{
    cursor: pointer;
  }

  .content {
    float: right;
    width: 79.7872%;
  }

  .header{
    /* margin-top: 48px; */
}
  .header, .footer {
    grid-column: 1 / -1;
    /* needed for the floated layout */
    clear: both;
  }

}
.wrapper .content{
  min-height: 600px;
  overflow: auto;
}
.wrapper > * {
  background-color: rgba(42, 9, 230, 0.678);
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 1.0em;
  line-height: 1.6;
  /* needed for the floated layout*/
  margin-bottom: 10px;
}
.sidebar{
  padding: 5px;
  font-size: 1.4em;
}
.header {
  font-size: 14px;
}
/* We need to set the widths used on floated items back to auto, and remove the bottom margin as when we have grid we have gaps. */
@supports (display: grid) {
  .wrapper > * {
    width: auto;
    margin: 0;
  }
   /* .header{
    margin-top: 48px;
} */
}

/* We need to set the widths used on floated items back to auto, and remove the bottom margin as when we have grid we have gaps. */
@supports (display: grid) {
  .wrapper > * {
    width: auto;
    margin: 0;
  }
   /* .header{
    margin-top: 48px;
} */
}
.container{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px 
}
  #home{
    width: 100%;
    height: 100%;
    background: #ddd;
    color: black;
    background-image: url("../../../images/clouds01.jpg");
        /* min-height: 80vh; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h2{
    margin:auto;
  }
  

</style>

