function secondsToTime(seconds){
    return (
        new Date(seconds*1000)
        .toISOString()
        .substring(14,19)
        
    )
    
    
    
}
function secondsToTimee(seconds){
    return (
        new Date(seconds*1000)
        .toISOString()
        
    )
}

export {
    secondsToTime,secondsToTimee
}