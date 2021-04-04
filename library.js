function calculate()
{
    //gather all input
    //ask user for how many books were late
    let totalBooks = parseInt(prompt("How many books are you returning?"));
    //convert to number type

    //ask user for number of dvds
    //convert to number type
    let totalDVDS = parseInt(prompt("How many DVDs are you returning?"));
    //ask user for number of days overdue
    //convert to number type
    let numDays = parseInt(prompt("How many days did you have these for?"));
    //do math...
    // multiply number of books by .25 to get total book fees
    let totalBookFees = totalBooks * .25;
    // multiply number of dvds by .50 to get total dvd fees
    let totalDVDFees = totalDVDS * .5;
    //multiply (total book fees + total dvd fees) by number of overdue days to get total fees
    let totalFees = (totalBookFees + totalDVDFees) * numDays;
    //output

    //alert the total fees
    alert(`You owe $${totalFees.toFixed(2)}, Thank you`);



}