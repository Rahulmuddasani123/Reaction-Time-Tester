function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
getRandomColor()
var start = new Date().getTime();

function move() {
    var left;
    var top;
    var right;
    var wh;
    left = Math.random() * 800;
    right = Math.random() * 300;
    top = Math.random() * 150;
    wh = ((Math.random() * 300) + 50);
    document.getElementById('cont').style.left = left + 'px';
    document.getElementById('cont').style.right = right + 'px';
    document.getElementById('cont').style.top = top + 'px';
    document.getElementById('cont').style.width = wh + 'px';
    document.getElementById('cont').style.height = wh + 'px';
    document.getElementById('cont').style.display = 'block';
    document.getElementById('cont').style.backgroundColor = getRandomColor();
    start = new Date().getTime();
}
move();
document.getElementById('cont').onclick = function() {
    var count = 0;
    count = count + 1
    document.getElementById('cont').style.display = 'none'
    var endTime = new Date().getTime()
    var time = (endTime - start) / 1000
    var total = 0;
    total = total + time
    //document.getElementById('score').innerHTML = 'Time : ' + total + " sec ";
    move();
    var tweets = [];
    tweets.push(total);

    document.getElementById('score').innerHTML = 'Time : ' + tweets + " sec ";
    getRandomColor();

}