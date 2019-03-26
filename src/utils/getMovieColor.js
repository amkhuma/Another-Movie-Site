export const getProgressColour = (percentage) => {
    if (percentage > 0 && percentage < 50)
        return ("error")        
    else if (percentage > 49 && percentage < 80)
        return ("warning")                
    else if (percentage > 79 && percentage <= 100)
        return ("success")        
}