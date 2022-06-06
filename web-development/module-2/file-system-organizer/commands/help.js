function helpFn() {
    console.log(`
    usage: peppy [tree <path>]
                 [organize <path>] 
                 [help]
    `);                                                                                                     // In JS, strings are single lined, we can't make multiple line string but with temperate literal - ` ` we can get the string in multiple line & in the same way as we write inside ` `.  
}

module.exports = {                                                                                           // in case we put any object in front of module.export then they would export the object  
    helpKey: helpFn
}