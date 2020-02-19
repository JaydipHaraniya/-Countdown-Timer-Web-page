(function ($) {
  "use strict";

  $.fn.extend({

    countdown100: function (options) {
      var defaults = {
        timeZone: "",
        endtimeYear: 0,
        endtimeMonth: 0,
        endtimeDate: 0,
        endtimeHours: 0,
        endtimeMinutes: 0,
        endtimeSeconds: 0,
      }

      var options = $.extend(defaults, options);

      return this.each(function () {
        var obj = $(this);
        var timeNow = new Date();

        var tZ = options.timeZone; console.log(tZ);
        var endYear = options.endtimeYear;
        var endMonth = options.endtimeMonth;
        var endDate = options.endtimeDate;
        var endHours = options.endtimeHours;
        var endMinutes = options.endtimeMinutes;
        var endSeconds = options.endtimeSeconds;

        if (tZ == "") {
          var deadline = new Date(endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds);
        }
        else {
          var deadline = moment.tz([endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds], tZ).format();
        }

        if (Date.parse(deadline) < Date.parse(timeNow)) {
          var deadline = new Date(Date.parse(new Date()) + endDate * 24 * 60 * 60 * 1000 + endHours * 60 * 60 * 1000);
        }


        initializeClock(deadline);


        /**
        * @description This API is used to create new user post.
        * @author jaydip Haraniya
        * @date 28-11-2019
       * @param {number} days 
       * @param {number} hours  this is for the type of post 
       * @param {number} minutes this is the flag value for the type of post
       * @param {number} seconds
       * @param {string} description this is the day countdown function where we can count the days
      
        */
        var specialDay = "Dec 24, 2019 23:59:59";//set you date here format like this "Jan 5, 2021 15:37:25"
        var countDownDate = new Date(specialDay).getTime();

        var x = setInterval(function () {

          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Output the result in an belove element with id

          document.getElementById("days").innerHTML = days;
          document.getElementById("hours").innerHTML = hours;
          document.getElementById("minutes").innerHTML = minutes;
          document.getElementById("seconds").innerHTML = seconds;



          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            //document.getElementById("demo").innerHTML = "EXPIRED";
            document.getElementById("days").innerHTML = "WISH";
            document.getElementById("hours").innerHTML = "YOU";
            document.getElementById("minutes").innerHTML = "MERRY";
            document.getElementById("seconds").innerHTML = "Chrishmash";
          }
        }, 1000);


        /* 
        end of function
        */

        function getTimeRemaining(endtime) {
          var t = Date.parse(endtime) - Date.parse(new Date());
          var seconds = Math.floor((t / 1000) % 60);
          var minutes = Math.floor((t / 1000 / 60) % 60);
          var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          var days = Math.floor(t / (1000 * 60 * 60 * 24));
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
        }

        function initializeClock(endtime) {
          var daysSpan = $(obj).find('.days');
          var hoursSpan = $(obj).find('.hours');
          var minutesSpan = $(obj).find('.minutes');
          var secondsSpan = $(obj).find('.seconds');

          function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.html(t.days);
            hoursSpan.html(('0' + t.hours).slice(-2));
            minutesSpan.html(('0' + t.minutes).slice(-2));
            secondsSpan.html(('0' + t.seconds).slice(-2))

            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
          }

          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
        }




      });
    }
  });



})(jQuery);