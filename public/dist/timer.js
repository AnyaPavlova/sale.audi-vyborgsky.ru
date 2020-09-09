function ready() {
        var clockInPage = document.querySelector("#clock");
        if(clockInPage) {
          var days;
          var hours;
          var minutes;
          var seconds;

          var daysBlock = document.querySelector('#clock-days');
          var hoursBlock = document.querySelector('#clock-hours');
          var minutesBlock = document.querySelector('#clock-minutes');
          var secondsBlock = document.querySelector('#clock-seconds');

          var blockDaysText = document.querySelector('#clock-name-days');

          $('#clock').countdown('2020/09/30', function(event) {
            days = event.strftime('%D');
            hours = event.strftime('%H');
            minutes = event.strftime('%M');
            seconds = event.strftime('%S');

            var daysNum = +days;            
            if((daysNum > 20) || (days <5)) {
              var number = daysNum%10;
              if((number === 4) || (number === 3) || (number === 2)) {
                blockDaysText.innerText = 'Дня';
              } else if (number === 1) {
                blockDaysText.innerText = 'День';
              } else {
                blockDaysText.innerText = 'Дней';
              }
            } else if ( (daysNum <= 20) && (daysNum >4 ) ) {
              blockDaysText.innerText = 'Дней';
            } 
            days = "<span>" + days[0] + "</span><span>" + days[1] + "</span>";
            hours = "<span>" + hours[0] + "</span><span>" + hours[1] + "</span>";
            minutes = "<span>" + minutes[0] + "</span><span>" + minutes[1] + "</span>";
            seconds = "<span>" + seconds[0] + "</span><span>" + seconds[1] + "</span>";

            daysBlock.innerHTML = days;
            hoursBlock.innerHTML = hours;
            minutesBlock.innerHTML = minutes;
            secondsBlock.innerHTML = seconds;

                  // $(this).html(event.strftime('%D:%H:%M:%S'));
                });

        }
      }
      document.addEventListener("DOMContentLoaded", ready);

      function ready2() {
        var clockInPage = document.querySelector("#new-clock");
        if(clockInPage) {
          var days;
          var hours;
          var minutes;
          var seconds;

          var daysBlock = document.querySelector('#new-clock-days');
          var hoursBlock = document.querySelector('#new-clock-hours');
          var minutesBlock = document.querySelector('#new-clock-minutes');
          var secondsBlock = document.querySelector('#new-clock-seconds');

          var blockDaysText = document.querySelector('#new-clock-name-days');

          $('#new-clock').countdown('2020/09/30', function(event) {
            days = event.strftime('%D');
            hours = event.strftime('%H');
            minutes = event.strftime('%M');
            seconds = event.strftime('%S');

            var daysNum = +days;            
            if((daysNum > 20) || (days <5)) {
              var number = daysNum%10;
              if((number === 4) || (number === 3) || (number === 2)) {
                blockDaysText.innerText = 'Дня';
              } else if (number === 1) {
                blockDaysText.innerText = 'День';
              } else {
                blockDaysText.innerText = 'Дней';
              }
            } else if ( (daysNum <= 20) && (daysNum >4 ) ) {
              blockDaysText.innerText = 'Дней';
            } 
            days = "<span>" + days[0] + "</span><span>" + days[1] + "</span>";
            hours = "<span>" + hours[0] + "</span><span>" + hours[1] + "</span>";
            minutes = "<span>" + minutes[0] + "</span><span>" + minutes[1] + "</span>";
            seconds = "<span>" + seconds[0] + "</span><span>" + seconds[1] + "</span>";

            daysBlock.innerHTML = days;
            hoursBlock.innerHTML = hours;
            minutesBlock.innerHTML = minutes;
            secondsBlock.innerHTML = seconds;

                  // $(this).html(event.strftime('%D:%H:%M:%S'));
                });

        }
      }
      document.addEventListener("DOMContentLoaded", ready2);