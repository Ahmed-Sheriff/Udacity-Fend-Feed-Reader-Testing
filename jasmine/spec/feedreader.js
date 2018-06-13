/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Make test to Define each Url in the feeds and to be also not empty

         it('URL are defined', function(){

            allFeeds.forEach(function(element, index){
                   expect(element.url).toBeDefined();
                   expect(element.url.length).not.toBe(0); 
            });
         });


        // Make test to Define each Name in the feeds and to be also not empty
 
         it('Names are defined', function(){

            allFeeds.forEach(function(element, index){
                  expect(element.name).toBeDefined();
                  expect(element.name.length).not.toBe(0);  
            })  
         })
    });

         // Make a test to Define the Default hiding of the menu list   

         describe('The menu', function(){

            const body = $('body');
            const menuIcon = $('.menu-icon-link');


            it('Is hidden by default', function(){

                expect(body.hasClass('menu-hidden')).toBe(true); //Menu list is hidden by default
            });


            // Make a test for checking the visibility of the menu list with clicking 

            it('Displaying / hiding menu after clicking ', function(){
      
              menuIcon.click();

              expect(body.hasClass('menu-hidden')).toBe(false); // Displaying Menu List 

              menuIcon.click();

              expect(body.hasClass('menu-hidden')).toBe(true); // Hiding Minu List

             });      

    });


        // Make a test to Define all Entries and to check if it has at least one entry  

          describe('Initial Entries', function(){

                const container = $('.feed');

                let entry = $('article.entry');

                beforeEach(function(done){

                    init();
                    done();
                }); 

                it('has at least one entry', function(){

                    expect( (container > entry).length ).not.toBe(0);
                    
                });   
          });  


        // Make a test to Check if a feed is selected the content changes     

         describe('New Feed Selection', function(){
            
            const container = $('.feed');
            let oldFeed;
            let newFeed;

                beforeEach(function(done) {
                  loadFeed(0, function callback() {
                    oldFeed = container.html(); 

                     }); 

                    loadFeed(1, function callback() {
                      newFeed = container.html();
                       done();
                    });
             });

                 it('should change when a new feed is loaded', function callback(){

                    expect(oldFeed).not.toBe(newFeed);    
                      
                 }); 
        
     });           


}());
