const fake = [
    data = {
        value: 274.89,
        found_at: "12/10/2018",
        depart_date: "12/24/2018",
        gate: "Flight Network",
        daysAdvance: 14,
    },
    data = {
        value: 210.50,
        found_at: "12/10/2018",
        depart_date: "12/30/2018",
        gate: "My Trip",
        daysAdvance: 20,
    },
    data = {
        value: 174.30,
        found_at: "12/9/2018",
        depart_date: "06/15/2019",
        gate: "My Trip",
        daysAdvance: 188,
    }
]

function fakeFunction(){
for (let i = 0; i < 3; i++) {
    let fakeprice = ('$' + fake[i].value);
    console.log(fakeprice);
    let fakepurchasedDate = fake[i].found_at;
    let fakedepartureDate = fake[i].depart_date;
    let fakepurchasedAt = fake[i].gate;
    let fakenewDate = moment(fakepurchasedDate).format('ll');
    let fakedaysAdvance = moment(fakedepartureDate).diff(moment(fakenewDate), "days");
    let begin = ($("#location-input").val().trim())
    let end = ($("#destination-input").val().trim())
    let fakebeginCap = begin.charAt(0).toUpperCase() + begin.slice(1);
    let fakeendCap = end.charAt(0).toUpperCase() + end.slice(1);

    let fakenewRow = $(`<tr>
                <td class='origin'>${fakebeginCap}</td>
                <td class='destination'>${fakeendCap}</td>
                <td class='price'>${fakeprice}</td>
                <td class='purchasedVenue'>${fakepurchasedAt}</td>
                <td class='purchasedDate'>${fakenewDate}</td>
                <td class='purchasedDate'>${fakedaysAdvance}</td>
                </tr>` )

    $('#input-table-body').append(fakenewRow);

    
}};