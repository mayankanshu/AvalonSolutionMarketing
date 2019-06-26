$(document).ready(function () {

    
    var cl = new CanvasLoader('loadingbox');
    cl.setColor('#bf515b'); // default is '#000000'
    cl.setShape('square'); // default is 'oval',spiral,square,rect,roundRect
    cl.setDiameter(40); // default is 40
    cl.setDensity(40); // default is 40
    cl.setRange(0.9); // default is 1.3
    cl.setSpeed(2);
    cl.setFPS(40); // default is 24
    cl.show(); // Hidden by default

    //This bit is only for positioning - not necessary
    var loaderObj = document.getElementById("canvasLoader");
    loaderObj.style.position = "absolute";
    //loaderObj.style["top"] =  cl.getDiameter() * -0.5 + "px";
    //loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
   //loaderObj.style["background"] = "#ffffff";
    loaderObj.style["z-index"] = "10000";
      
//    var cl = new CanvasLoader("loadingbox", { id: "canvasLoader", safeVML: true });
//            cl.setColor('#8c7c6f');
//            cl.setShape("roundRect");
//            cl.setDiameter(70);
//            cl.setDensity(14);
//            cl.setFPS(37);
//            cl.setSpeed(1);
//            cl.setRange(1);
//            cl.show();









    
   
     

}); 