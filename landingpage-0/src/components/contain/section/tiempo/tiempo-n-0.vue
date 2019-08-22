<template>
    
                                    <li>
                                        <p :class="times.clase1">{{times.time}}</p>
                                        <p :class="times.clase2">{{times.text}}</p>
                                    </li>                                        
                                
</template>
<script>

export default {  
     el: "#countdown",
  data: {
    startTime: "Aug 21, 2019 23:18:00",
    endTime: "Aug 22, 2020 23:18:00",
    times: [
      { id: 0, text: "Days", time: 1, clase1: "days", clase2:"timeRefDays" },
      { id: 1, text: "Hours", time: 1, clase1: "hours", clase2:"timeRefHours" },
      { id: 2, text: "Minutes", time: 1, clase1: "minutes", clase2:"timeRefMinutes" },
      { id: 3, text: "Seconds", time: 1, clase1: "seconds", clase2:"timeRefSeconds" }
    ],
    progress: 100,
    // isActive: false,
    timeinterval: undefined
  },
  methods: {
    updateTimer: function() {
      if (
        this.times[3].time > 0 ||
        this.times[2].time > 0 ||
        this.times[1].time > 0 ||
        this.times[0].time > 0
      ) {
        this.getTimeRemaining();
        this.updateProgressBar();
      } else {
        clearTimeout(this.timeinterval);
        // this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
      }
    },
    getTimeRemaining: function() {
      let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
     if(t >= 0){
      this.times[3].time = Math.floor(t / 1000 % 60); //seconds
      this.times[2].time = Math.floor(t / 1000 / 60 % 60); //minutes
      this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24); //hours
      this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
       }else {
         this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
       }
    },
    updateProgressBar: function() {
      let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      let interval = parseFloat(
        (currentTime - startTime) / (endTime - startTime) * 100
      ).toFixed(2);
      this.progress = 100-interval;
    }
  },
  created: function() {
    this.updateTimer();
    this.timeinterval = setInterval(this.updateTimer, 1000);
  }
   
  
  
}
</script>