// Java program to calculate Distance Between
// Two Points on Earth
import java.util.*;
import java.lang.*;
 
class GFG {
 
    public static double distance(double lat1,
                     double lat2, double lon1,
                                  double lon2)
    {
 
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        final int R = 6371; // Radius of the earth
	// Haversine formula
    double latDistance = Math.toRadians(lat2 - lat1);
    double lonDistance = Math.toRadians(lon2 - lon1);
        
  
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)+ Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))* Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
             
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
 
        // Radius of earth in kilometers. Use 3956
        // for miles
        double r = 6371;
		
		double distance = R * c ; // convert to km
 
        // calculate the resut
		
		 distance = Math.pow(distance, 2) + Math.pow(height, 2);

		return Math.sqrt(distance);
		
		
       if (distance>150)
	   {
		   break;
	   }
	   else
	   {
		   system.out.println("the distance between both users is "+ distance);
	   }
	   else if(distance <0)
	   {
		   break;
	   }
  
}

}