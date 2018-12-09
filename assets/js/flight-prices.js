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
                let price = ('$'+results.data[i].value);
                let purchasedDate = results.data[i].found_at;
                let purchasedAt = results.data[i].gate;
                let newDate = moment(purchasedDate).format('ll');
                let begin = ($("#location-input").val().trim())
                let end = ($("#destination-input").val().trim())
                let beginCap = begin.charAt(0).toUpperCase() + begin.slice(1);
                let endCap = end.charAt(0).toUpperCase() + end.slice(1);

                let newRow = $(`<tr>
                <td class='origin'>${beginCap}</td>
                <td class='destination'>${endCap}</td>
                <td class='price'>${price}</td>
                <td class='purchasedVenue'>${purchasedAt}</td>
                <td class='purchasedDate'>${newDate}</td>
                </tr>` )

                $('#input-table-body').append(newRow);
                // console.log(newRow);
                // console.log(price);
                // console.log(purchasedDate);
                // console.log(purchasedAt);
                // console.log(newDate);
            }
            
        });
    };