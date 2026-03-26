function Cars(name,model){
    this.name=name,
    this.model=model,
    this.speed=0
}

Cars.prototype.isRunning=function(){
        if(this.speed>0) console.log("running") ;
        else console.log("not running");
    },
Cars.prototype.changeSpeed=function(newSpeed){
        this.speed=newSpeed;
    }

Cars.prototype.printDetails=function(){
    console.log(this.name,this.model,this.speed);
}

const creta=new Cars("creta","700");
creta.changeSpeed(10);
creta.printDetails();