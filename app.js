const day = document.querySelector(".day")
const time = document.querySelector(".time")
const year = document.querySelector(".year")


function changeTime() {

    let date = new Date()


    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    let timeFormat = `${hour}:${minute}:${seconds}`

    console.log(timeFormat);
    time.innerHTML = timeFormat


    let currentday = date.getDay()
    if ( currentday === 0 ) {
        day.innerHTML = "Yakshanba"
    }else if(currentday === 1){
        day.innerHTML = "Dushanba"

    }else if(currentday === 2){
        day.innerHTML = "Seshanba"

    }else if(currentday === 3){
        day.innerHTML = "Chorshanba"

    }else if(currentday === 4){
        day.innerHTML = "Payshanba"

    }else if(currentday === 5){
        day.innerHTML = "Juma"

    }else if(currentday === 6){
        day.innerHTML = "Shanaba"

    }




    let kun = date.getDate()
    let oy = date.getMonth()
    let yil = date.getFullYear()
    
    // console.log( `${kun} - ${oy}. ${yil}` );
    let daqiqa = `${kun} - ${oy}. ${yil}`


    console.log(daqiqa);
    time.innerHTML = timeFormat


    let bugun = date.getDate()
    if ( bugun === 1 ) {
        year.innerHTML = "1"
    }else if(bugun === 2){
        year.innerHTML = "2"

    }else if(bugun === 3){
        year.innerHTML = "3"

    }else if(bugun === 4){
        year.innerHTML = "4"

    }else if(bugun === 5){
        year.innerHTML = "5"

    }else if(bugun === 6){
        year.innerHTML = "6"

    }else if(bugun === 7){
        year.innerHTML = "7"

    }else if(bugun === 8){
        year.innerHTML = "8"

    }else if(bugun === 9){
        year.innerHTML = "9"

    }else if(bugun === 10){
        year.innerHTML = "10"

    }else if(bugun === 11){
        year.innerHTML = "11"

    }else if(bugun === 12){
        year.innerHTML = "12"

    }else if(bugun === 13){
        year.innerHTML = "13"

    }else if(bugun === 14){
        year.innerHTML = "14"

    }else if(bugun === 15){
        year.innerHTML = "15"

    }else if(bugun === 16){
        year.innerHTML = "16"

    }else if(bugun === 17){
        year.innerHTML = "17"

    }else if(bugun === 18){
        year.innerHTML = "18"

    }else if(bugun === 19){
        year.innerHTML = "19"

    }else if(bugun === 20){
        year.innerHTML = "20"

    }else if(bugun === 21){
        year.innerHTML = "21"

    }else if(bugun === 22){
        year.innerHTML = "22"

    }else if(bugun === 23){
        year.innerHTML = "23"

    }else if(bugun === 24){
        year.innerHTML = "24"

    }else if(bugun === 25){
        year.innerHTML = "25"

    }else if(bugun === 26){
        year.innerHTML = "26"

    }else if(bugun === 27){
        year.innerHTML = "27"

    }else if(bugun === 28){
        year.innerHTML = "28"

    }else if(bugun === 29){
        year.innerHTML = "29"

    }else if(bugun === 30){
        year.innerHTML = "30"

    }else if(bugun === 31){
        year.innerHTML = "31"

    }






    let buoy = date.getMonth()+1
    if ( buoy === 0 ) {
        year.innerHTML = "Yanvar"
    }else if(buoy === 1){
        year.innerHTML = "Fevral"

    }else if(buoy === 2){
        year.innerHTML = "Mart"

    }else if(buoy === 3){
        year.innerHTML = "Aprel"

    }else if(buoy === 4){
        year.innerHTML = "May"

    }else if(buoy === 5){
        year.innerHTML = "Iyun"

    }else if(buoy === 6){
        year.innerHTML = "Iyul"

    }else if(buoy === 7){
        year.innerHTML = "Avgust"

    }else if(buoy === 8){
        year.innerHTML = "Sentabr"

    }else if(buoy === 9){
        year.innerHTML = "Oktabr"

    }else if(buoy === 10){
        year.innerHTML = "Noyabr"

    }else if(buoy === 11){
        year.innerHTML = "Dekabr"

    }

    console.log(buoy);



    // let buoy = date.getMonth()
    // if ( buoy === 1 ) {
    //     year.innerHTML = "1"
    // }else if(buoy === 2){
    //     year.innerHTML = "2"

    // }else if(buoy === 3){
    //     year.innerHTML = "3"

    // }else if(buoy === 4){
    //     year.innerHTML = "4"

    // }else if(buoy === 5){
    //     year.innerHTML = "5"

    // }else if(buoy === 6){
    //     year.innerHTML = "6"

    // }else if(buoy === 7){
    //     year.innerHTML = "7"

    // }else if(buoy === 8){
    //     year.innerHTML = "8"

    // }else if(buoy === 9){
    //     year.innerHTML = "9"

    // }else if(buoy === 10){
    //     year.innerHTML = "10"

    // }else if(buoy === 11){
    //     year.innerHTML = "11"

    // }else if(buoy === 12){
    //     year.innerHTML = "12"

    // }







    let buyil = date.getFullYear()



















    

    console.log(bugun);
    // console.log(buoy);

    let soat = `${bugun}. ${buoy}. ${buyil}`

    console.log(soat);

    year.innerHTML = soat



    // year.innerHTML = kun
    // year.innerHTML = oy
    // year.innerHTML = yil
    
    // let currentDate = date.getDate()
    // let currentMonth = date.getMonth()
    // let currentYear = date.getFullYear()
   

    // year.innerHTML = currentDate
    // year.innerHTML = currentMonth
    // year.innerHTML = currentYear

    

}
changeTime()

setInterval(function(){
    changeTime()
}, 1000)




