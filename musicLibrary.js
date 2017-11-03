var library = function(name,creator){
    this.name = name;
    this.creator = creator;
}
library.prototype.playlists = [];

var playlist = function(name){
    this.name = name;
}
playlist.prototype.tracks = [];
playlist.prototype.overallRating = function (){
    var totalRating = this.tracks.reduce((acc, current) =>{
        return acc + current.rating;
    }, 0);
    return totalRating/this.tracks.length;
}
playlist.prototype.totalDuration = function(){
    var totalduration = this.tracks.reduce((acc,current) =>{
        return acc + current.length;
    },0);
    return totalduration;
}

var track = function(title,rating,length){
    this.title = title;
    this.rating = rating;
    this.length =length;
}
