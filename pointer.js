class pointer {
    constructor(x,y,width,height){

        var options={
            isStatic : false       
            
}

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        World.add(world, this.body);
        this.Visiblity = 255;   
    }


   


        display(){
           if(this.body.speed < 10){
            
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle)
            rectMode(CENTER);
            fill("blue");
            rect(0,0,this.width,this.height);
            pop();
           }else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            
            pop();

           }
        }


        display2(){
            if(this.body.speed < 10){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            fill("yellow");
            rect(0,0,this.width,this.height);
            pop();
            }else{
                World.remove(world, this.body);
                push();
                this.Visiblity = this.Visiblity - 5;
                tint(255,this.Visiblity);
                pop();

            }


    }


    display3(){
        if(this.body.speed < 10){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("orange");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();

        }


        
    
    }

    display4(){
           
        if(this.body.speed < 10){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("violet");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();

        }

        
    
    }

    display5(){
        if(this.body.speed < 10){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }else{
      
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();

    }

        
    
    }

   


};

