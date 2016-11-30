$('.navbar-sticky').affix({offset:{top:function(){return this.top=$('.navbar-sticky').offset().top }}});




// If you change the top: 0px in the css to say something like top: 20px than you need to change the javascript to reflect that. so the above would be changed to this. This will also use the css animations I added.

// $(affixElement).affix({offset:{top:function(){return this.top=$(affixElement).offset().top - 20 }}});

