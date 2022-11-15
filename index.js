function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
      
      switch (hours) {
        case 1:
        case 21:
          hours = `${hours} час`
          break;
        case 2:
        case 3:
        case 4:  //Statements executed when the
        case 22:
        case 23:
          hours = `${hours} часа`//result of expression matches value2
          break;
        default:
          hours = `${hours} часов`
          break;
      }

      switch (minutes) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
          minutes = `${minutes} минуту`
          break;
        case 2:
        case 3:
        case 4:  //Statements executed when the
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54: 
          minutes = `${minutes} минуты`//result of expression matches value2
          break;
        default:
          minutes = `${minutes} минут`
          break;
      }
      
      switch (seconds) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
          seconds = `${seconds} секунду`
          break;
        case 2:
        case 3:
        case 4:  //Statements executed when the
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54: 
          seconds = `${seconds} секунды`//result of expression matches value2
          break;
        default:
          seconds = `${seconds} секунд`
          break;
      }
      // if (minutes < 10) minutes = "0" + minutes;
      // if (seconds < 10) seconds = "0" + seconds;
      let h = document.querySelector('.main-aside__box-time__clock-hours');
      let m = document.querySelector('.main-aside__box-time__clock-minutes');
      let s = document.querySelector('.main-aside__box-time__clock-seconds');

      h.innerHTML = hours;
      m.innerHTML = minutes;
      s.innerHTML = seconds;
        setTimeout("digitalClock()", 1000);
   }

   digitalClock();