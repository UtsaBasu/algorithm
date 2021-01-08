function istouching(rectangle1,rectangle2){
    if(rectangle1.x-rectangle2.x<(rectangle1.width/2)+(rectangle2.width/2)&&rectangle2.x-rectangle1.x<(rectangle1.width/2)+(rectangle2.width/2)
    &&rectangle1.y-rectangle2.y<(rectangle1.height/2)+(rectangle2.height/2)&&rectangle2.y-rectangle1.y<(rectangle1.height/2)+(rectangle2.height/2)){
      return true;
  
    }
    else{
      return false;
    }
   
  }
  
  function bounceoff(rectangle1,rectangle2){
    if(rectangle1.x-rectangle2.x<(rectangle1.width/2)+(rectangle2.width/2)&&rectangle2.x-rectangle1.x<(rectangle1.width/2)+(rectangle2.width/2)){
      rectangle1.velocityX=-(rectangle1.velocityX);
      rectangle2.velocityX=-(rectangle2.velocityX);
    }
    else if(rectangle1.y-rectangle2.y<(rectangle1.height/2)+(rectangle2.height/2)&&rectangle2.y-rectangle1.y<(rectangle1.height/2)+(rectangle2.height/2)){
      rectangle1.velocityY=-(rectangle1.velocityY);
      rectangle2.velocityY=-(rectangle2.velocityY);
    }
  } 