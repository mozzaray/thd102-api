$(function(){
    $.ajax({
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-EC7C6301-6DFD-408D-A728-00E39FE4E1E1&format=JSON&locationName=%E5%85%A7%E6%B9%96%E5%8D%80&elementName=T,Wx",
        type: "GET",
        dataType: "json",
        success: function(response){
            let path = response.records.locations[0].location[0];

            $('#city_name').html(response.records.locations[0].locationsName);
            $('#district').html(path.locationName);
            $('#tempture').html(path.weatherElement[0].time[0].elementValue[0].value + "&#176;");

            // console.log(path);
            let j = 0;
            for(let i = 0; i < 10; i++){
                if(i % 2 == 0){
                    let wx = path.weatherElement[1].time[i].elementValue[0].value;
                    console.log(wx);

                    $('#weekday').find('.block').eq(j).find('h6').html(path.weatherElement[0].time[i].elementValue[0].value + "&#176;");
                    //判斷是否有特定關鍵字
                    if(wx.indexOf('晴')> -1){
                        $('.block').eq(j).find('img').attr('src', 'https://i.imgur.com/Shrg84B.png')
                    }else if(wx.indexOf('雲')  > -1){
                        $('.block').eq(j).find('img').attr('src', 'https://i.imgur.com/BeWfUuG.png')
                    }else if(wx.indexOf('雨')  > -1){
                        $('.block').eq(j).find('img').attr('src', './img/rain.png')
                    }


                    j++;

                }
            }

        },
        error: function(){
            console.log('yeeeeee');
        }
    })
})