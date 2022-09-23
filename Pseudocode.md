
Pseudcode: For mind reader project


## Declare Variables

1. BEGIN
2. Create Variable for headertext
3. Create Variable for example
4. Create Variable for state/pagecount
5. Create Variable for next button
6. Create Variable for reset button
7. END

##  Array

1. BEGIN
2. Populate Array with headertext and example for each state
3. Create Array for symbols
4. END
 

## Function:populate pages

1. BEGIN
2. Create Function to listen for 'NEXT' button click, when clicked the function will follow conditionals to populate the different pages
3. CONDITIONALS;
4. If pageCount = 0; populate header and example from pageView[1]
5. else if pageCount is = 1; populate header and example from pageView[2]
6. else if pageCount is = 2; populate header and example from pageView[3]
7. else if pageCount is = 3; populate header and example from pageView[4]
8. else if pageCount is = 4; populate header and example from pageView[5]
9. END

## Function: reset pages

1. BEGIN
2. Create a Function to listen for "RESET" button click, when clicked the   function will reset to the initial page when conditions are met
3. CONDITIONAL: if (pageCount > 0)
4. Reset the Function:populate headertext and example from pageView[0]
5. END




 
 
 
 


