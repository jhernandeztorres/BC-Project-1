function WebCamPull(lat, lon) {

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
            const vidDiv = $("<div class ='vid'>");
            let vid = $("<iframe width='420' height='240' controls>");

            if (liveVidAvailable === true) {
                vid.attr("src", liveVid);
                vidDiv.append(vid);
            }

            else {
                vid.attr("src", dayVid);
                vidDiv.append(vid);
            }

            const clickHere = $("<p>").html("<h1>Click here to view live feed</h1>")
            vidDiv.append(vid);
            vidDiv.append(clickHere);
            $("#Webcam").html(vidDiv);
        }
    });
};
