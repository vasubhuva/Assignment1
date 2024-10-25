const bookingcities = {
    cur: "",
    dest: ""
};

module.exports.getAnswer = function (message) {
    var reply = "Bot=>";
    message = message.toLowerCase();

    if ((/^(hi|hello|hey)$/ig).test(message) == true) {
        return reply + "Welcome to BookMyTrain bot.How can I help you?";
    }

    //checking for booking train
    let words = ["want", "book"];

    let allwords = words.every(word => message.includes(word.toLowerCase()));

    if (allwords) {
        return reply + "Sure.Currently we are operating with these cities (Surat,Ahmedabad,Vadodara,Mumbai,Pune,Delhi,Banglore).If you want to travel between this cities you can enter current city and destination like(Surat-Mumbai)";
    }

    let cities = ["Surat", "Ahmedabad", "Vadodara", "Mumbai", "Pune", "Delhi", "Banglore"];

    cities = "(" + cities.join("|") + ")" + "-" + "(" + cities.join("|") + ")";

    let pattern = new RegExp(cities, "i");

    if (pattern.test(message)) {
        let city = message.split("-");
        bookingcities.cur = city[0];
        bookingcities.dest = city[1];
        if (bookingcities.cur === bookingcities.dest) {
            return reply + "Current city and destination city can't be same.";
        } else {
            return reply + "Please Enter Date in \"dd/mm/yyyy\" format";
        }
    }

    let patt = /^\d{2}\/\d{2}\/\d{4}$/;

    if (patt.test(message)) {
        let date = message;

        let pnrno = Math.floor(100000 + Math.random() * 900000);
        reply += "Congratulation!! Your Ticket has been successfully Booked.";
        reply += "\nFrom:" + bookingcities.cur;
        reply += "\nTo:" + bookingcities.dest;
        reply += "\nDate:" + date;
        reply += "\nPNR No.:" + pnrno;

        return reply;
    }

    return reply + "Sorry, I didn't understand. Could you please enter correctly?";
}   