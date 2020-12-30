//add this to index html

//function that return a value
function Touch(object1,object2){  ///input arguments , dummy variable

    if (object1.x - object2.x < object2.width/2 + object1.width/2
          && object2.x - object1.x < object2.width/2 + object1.width/2
          && object1.y - object2.y < object2.height/2 + object1.height/2
          && object2.y - object1.y < object2.height/2 + object1.height/2) {
        
            return true; //boolean values (>=1)
      }
      else {
        return false;//boolean values (0)
      }
    
    
    }
    
    function BounceOff(object1,object2){
      if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2)
      {
        object1.velocityX=object1.velocityX*-1;
        object2.velocityX=-(object2.velocityX*6);
        }
    }
    
    function Collide(object1,object2){
     if(Touch(object1,object2)==true){
        object1.velocityX=0;
        object2.velocityX=0;
     }
}























