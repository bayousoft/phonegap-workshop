var app = {

    initialize: function() {
        var self = this;
        this.store = new WebSqlStore(function() {
            $('body').html(new HomeView(self.store).render().el);
        });        
    }

};

app.initialize();