export default function getMath() {
    let arr = []
    
    
    let term1 = Math.floor(Math.random() * 101)
    let term2 = Math.floor(Math.random() * 101)
    arr.push({ en: term1 + " + " + term2, ru: term1 + term2 })
    
    
    term1 = Math.floor(Math.random() * 101)
    term2 = Math.floor(Math.random() * 101)
    arr.push({ en: term1 + " - " + term2, ru: term1 - term2 })
    
   
    term1 = Math.floor(Math.random() * 21) 
    term2 = Math.floor(Math.random() * 21)
    arr.push({ en: term1 + " * " + term2, ru: term1 * term2 })
    
    
    let divisor = Math.floor(Math.random() * 20) + 1 
    let dividend = divisor * Math.floor(Math.random() * 20) 
    arr.push({ en: dividend + " / " + divisor, ru: dividend / divisor })
    
    console.log(arr)
    return arr
}