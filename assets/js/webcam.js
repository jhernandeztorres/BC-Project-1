function OriginWebCamPull(lat, lon) {

    console.log(lat);
    console.log(lon);

    const webcamAPI = 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby=' + lat + ',' + lon + ',16.1?lang=en&orderby=hotness,asc&show=webcams%3Aimage%2Clocation%2Cplayer';

    const encodedWebcamApiUrl = encodeURIComponent(webcamAPI);
    $.ajax({
        type: 'GET',
        headers: {
            "X-RapidAPI-Key": "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ",
        },
        contentType: 'application/json',
        url: 'https://corsbridge2.herokuapp.com/' + encodedWebcamApiUrl,
        success: function (data) {
            console.log(data);
            const results = data.result.webcams;
            const random = results[Math.floor(Math.random() * results.length)];
            const liveVidAvailable = random.player.live.available;
            const liveVid = random.player.live.embed;
            const dayVid = random.player.day.embed;
            const vidDiv = $("<div class ='vid' 'col s6 text-center'>");
            let vid = $("<iframe width='420' height='240' align='center'>");

            if (liveVidAvailable === true) {
                vid.attr("src", liveVid)
                vidDiv.append(vid);
            }

            else {
                vid.attr("src", dayVid);
                vidDiv.append(vid);
            }

            vidDiv.append(vid);
            $("#OriginWebcam").html(vidDiv);
        }
    });
};

function DestinationWebCamPull(lat, lon) {

    console.log(lat);
    console.log(lon);

    const webcamAPI = 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby=' + lat + ',' + lon + ',16.1?lang=en&orderby=hotness,asc&show=webcams%3Aimage%2Clocation%2Cplayer';

    const encodedWebcamApiUrl = encodeURIComponent(webcamAPI);
    $.ajax({
        type: 'GET',
        headers: {
            "X-RapidAPI-Key": "wmtOHk6BKgmshNktC1LmQRv1cxBop1RRcDUjsn341ba0oWctPQ",
        },
        contentType: 'application/json',
        url: 'https://corsbridge2.herokuapp.com/' + encodedWebcamApiUrl,
        success: function (data) {
            console.log(data);
            const results = data.result.webcams;
            const random = results[Math.floor(Math.random() * results.length)];
            const liveVidAvailable = random.player.live.available;
            const liveVid = random.player.live.embed;
            const dayVid = random.player.day.embed;
            const vidDiv = $("<div class ='vid' 'col s6 text-center'>");
            let vid = $("<iframe width='420' height='240' align='center'>");

            if (liveVidAvailable === true) {
                vid.attr("src", liveVid);
                vidDiv.append(vid);
            }

            else {
                vid.attr("src", dayVid);
                vidDiv.append(vid);
            }

            vidDiv.append(vid);
            $("#DestinationWebcam").html(vidDiv);
        }
    });
};
