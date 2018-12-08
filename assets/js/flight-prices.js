function flightPrices(origin, destination) {
console.log(origin, destination);
    const apiKey = "bc96059820e0418c8372befa541b0739";
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = cors + 'https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=' + origin + '&destination=' + destination + '&period_type=year&page=1&show_to_affiliates=true&sorting=price&trip_class=0&token=' + apiKey;

    // console.log(url);
    
        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response){
            let results = response;
            console.log(results);
            for (let i =0; i < 3; i++){
                let price = results.data[i].value;
                let purchasedDate = results.data[i].found_at;
                let purchasedAt = results.data[i].gate;
                let newDate = moment(purchasedDate).format('ll');
                console.log(price);
                console.log(purchasedDate);
                console.log(purchasedAt);
                console.log(newDate);
            }
            
        });
    };