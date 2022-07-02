/*
# React
# What? 
It's a JS library which is use to develop UI or frontend
It is develop by Facebook

# Why?
1. Fast

     ----------------                            ----------------
    |     code       | ---------------------->  |     DOM        |
    | HTML, CSS & JS |           |              |                |
     ----------------            |               ----------------
                               React

     --------------         ----------------         ------------          -----------
    |     code     | ----> |     React      | ----> |  Virtual   |  ----> |    DOM    |
    |              |       |     Algo       |       |    DOM     |        |           |
     --------------         ----------------         ------------          -----------
                                Diffing               Identify
                                 Algo                   req.
                                  |                   changes
                                Identify 
                                changes

2. Easy event handling (shortcuts)
3. It's small lib
4. It manages UI by states
5. Components: It's basically isolated, reuseable, independent piece of code.  a. Functional component b. Class component

JSX => HTML + JS

incase if we gave JSX directly to DOM then it will throw error
     ----------------             ----------------
    |      JSX       |  ------>  |     DOM        |  (X)
    |   HTML + JS    |           |                |
     ----------------             ----------------      

     --------------         ----------------         ------------          -----------
    |     JSX      | ----> |     Babel      | ----> |    JS      |  ----> |  Browesr  |
    |              |       |                |       |            |        |           |
     --------------         ----------------         ------------          -----------
*/