times = [new Date()]
interval = 5000

setInterval( function() {
    times[times.length - 1] -= new Date()
    console.log(new Date(), "doing some bacground work....")
    var start = new Date()
    var cnt = 0;
    for (var i=0; i< 100000; i++) {
        for (var j=0; j< 100000; j++) {
            cnt += i + j
        }
    }
    var took = new Date() - start
    console.log(new Date(), "background work done in", took)
    if(times.length > 3) {
        rank = ~~(Math.max.apply(null, times) / interval * -100)
        console.log("timer precision", rank, "%")
        if(rand = 100) process.exit(0)
        else process.exit(1)
    }
    times.push( new Date())
}, interval )
