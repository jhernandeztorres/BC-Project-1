function flightPrices(origin, destination) {
    $('#input-table-body').empty();
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
                let price = ('$'+ results.data[i].value);
                let purchasedDate = results.data[i].found_at;
                let departureDate = results.data[i].depart_date;
                let purchasedAt = results.data[i].gate;
                let newDate = moment(purchasedDate).format('ll');
                let daysAdvance = moment(departureDate).diff(moment(newDate), "days");
                let begin = ($("#location-input").val().trim())
                let end = ($("#destination-input").val().trim())
                let beginCap = begin.charAt(0).toUpperCase() + begin.slice(1);
                let endCap = end.charAt(0).toUpperCase() + end.slice(1);

                let newRow = $(`<tr>
                <td class='origin center'>${beginCap}</td>
                <td class='destination center'>${endCap}</td>
                <td class='price center'>${price}</td>
                <td class='purchasedVenue'>${purchasedAt}</td>
                <td class='purchasedDate center'>${newDate}</td>
                <td class='purchasedDays'>${daysAdvance}</td>
                </tr>` )

                $('#input-table-body').append(newRow);
                // console.log(newRow);
                // console.log(price);
                // console.log(purchasedDate);
                // console.log(purchasedAt);
                console.log(newDate);
                console.log(departureDate);
                console.log(daysAdvance);
            }
            
        })
    }
        // .catch((err)=>{
        //     //Do something if the api call fails
        //     fake = [
        //         data = {
        //             value : 274.89,
        //             found_at: "12/10/2018",
        //             depart_date: "12/24/2018",
        //             gate: "Flight Network",
        //             daysAdvance: 14,
        //         },
        //         data = {
        //             value : 210.50,
        //             found_at: "12/10/2018",
        //             depart_date: "12/30/2018",
        //             gate: "My Trip",
        //             daysAdvance: 20,
        //         },
        //         data = {
        //             value : 174.30,
        //             found_at: "12/9/2018",
        //             depart_date: "06/15/2019",
        //             gate: "My Trip",
        //             daysAdvance: 188,
        //         }
        //     ]

        //     for (let i =0; i < 3; i++){
        //         let fakeprice = ('$'+ fake.data[i].value);
        //         let fakepurchasedDate = fake.data[i].found_at;
        //         let fakedepartureDate = fake.data[i].depart_date;
        //         let fakepurchasedAt = fake.data[i].gate;
        //         let fakenewDate = moment(fakepurchasedDate).format('ll');
        //         let fakedaysAdvance = moment(fakedepartureDate).diff(moment(fakenewDate), "days");
        //         let begin = ($("#location-input").val().trim())
        //         let end = ($("#destination-input").val().trim())
        //         let fakebeginCap = begin.charAt(0).toUpperCase() + begin.slice(1);
        //         let fakeendCap = end.charAt(0).toUpperCase() + end.slice(1);

        //         let fakenewRow = $(`<tr>
        //         <td class='origin'>${fakebeginCap}</td>
        //         <td class='destination'>${fakeendCap}</td>
        //         <td class='price'>${fakeprice}</td>
        //         <td class='purchasedVenue'>${fakepurchasedAt}</td>
        //         <td class='purchasedDate'>${fakenewDate}</td>
        //         <td class='purchasedDate'>${fakedaysAdvance}</td>
        //         </tr>` )

        //         $('#input-table-body').append(fakenewRow);
        //         // console.log(newRow);
        //         // console.log(price);
        //         // console.log(purchasedDate);
        //         // console.log(purchasedAt);
        //         console.log(newDate);
        //         console.log(departureDate);
        //         console.log(daysAdvance);
        //     }
    //     });
    // };