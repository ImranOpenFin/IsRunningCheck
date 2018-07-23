

fin.desktop.Window.getCurrent().addEventListener("connected", ()=>{


    console.log("im connected")

});

fin.desktop.Application.createFromManifest('http://localhost:8080/app_two.json', function(app) {
    app.run();
  }, function(error) {
    console.error('Failed to create app from manifest: ', error);
  });


  const app = fin.desktop.Application.wrap("AnotherApp");

  app.isRunning(running => {
      if(running){
          app.getWindow().bringToFront();
          console.log("Brought to Front");
      }
    else{
        alert("Application two is not running, cannot bring to front.");
        console.log("the application is not running");
    }
      
   });


