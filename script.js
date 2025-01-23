 // Circumference //
 let pi = 3.14;
 let radius = 6.378e6;
 let n2 = 2;
 let circumeference = (2*(pi)*(radius));

 // Surcface area //
 let surfaceAREA = (4*(pi)*((radius)*(radius)));

 // Volume //
 let volume = ((4/3)*(pi)*((radius)*(radius)*(radius)));

 document.write('The radius of the sphere is ' + radius + '. <br>');
 document.write('The circumference is ' + circumeference + '. <br>');
 document.write('The surface area is ' + surfaceAREA + '. <br>');
 document.write('The volume is ' + volume + '. <br>');