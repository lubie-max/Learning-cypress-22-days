describe('handling tables', () => { it('tables',()=>{


    //  testing table

    // we have to travers the table first. and for it => .each()
    // for getting perticular entry used the sub-string of the 
    // desired entry. for that => elmnt.includes(sub-str)
    // here, need to grab Price value( which is sibling of the currunt elmnt) 
    // for that => cy.get('tr td:nth-child(2)').eq(index).next()
    //  above expression is nothing but a code for getting sibling element from current entry.
    // where, passed the css query {'tr td:nth-child(2)'} which means= in {tr}table row
    //  find {td}table data's 2nd child (the title of course).
    // then. by passing index to {.eq(index)}, simply getting whole row of that table.
    // and with {.next()} function getting the next entry of current td(entry)
    // that's ('tr td:nth-child(3)') [price] section of table.


    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get("tr td:nth-child(2)").each(($el, index, $list)=>{
            
        const elmnt = $el.text()
        if(elmnt.includes('Python')){

            cy.log('element',elmnt)
            cy.get('tr td:nth-child(2)').eq(index).next()
            // cy.log($list)
        }
    })

    // learning : used .next() to access the next sibling.

}) })