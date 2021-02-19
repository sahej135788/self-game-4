class Form{
    constructor(){
        this.greeting=createElement('h2')
        this.name=createElement('h4') 
        this.email=createElement('h4')
        this.title=createElement('h2')
        this.nameinput=createInput('')  
        this.emailinput=createInput('')
        this.submit=createButton('SUBMIT')  
        this.reset=createButton('RESET')  
        
        this.nameinput.style('width','160px')
        this.emailinput.style('width','160px')
    
        this.submit.style('width','100px')
        this.submit.style('height','40px')
        this.submit.style('background','purple')
        
        this.reset.style('width','100px')
        this.reset.style('height','40px')
        this.reset.style('background','purple')
    
        this.q1=createElement('h3',"1. Are you aware of COVID-19 ? ")
        this.radio1=createRadio('h3')
        this.radio1.option('YES')
        this.radio1.option('NO')
        this.radio1.style('width','60px')
    
        this.q2=createElement('h3',"2. Are you infected with COVID-19 ? ")
        this.radio2=createRadio('h3')
        this.radio2.option('YES')
        this.radio2.option('NO')
        this.radio2.style('width','60px')
    
        this.q3=createElement('h3',"3. Are you aware of the precautions of  COVID-19 ? ")
        this.radio3=createRadio('h3')
        this.radio3.option('YES')
        this.radio3.option('NO')
        this.radio3.style('width','60px')
     
        this.q4=createElement('h3',"4. Did you take vaccine for  COVID-19 ? ")
        this.radio4=createRadio('h3')
        this.radio4.option('YES')
        this.radio4.option('NO')
        this.radio4.style('width','60px')
    
        this.q5=createElement('h3',"5. Are you quarantine at home ? ")
        this.radio5=createRadio('h3')
        this.radio5.option('YES')
        this.radio5.option('NO')
        this.radio5.style('width','60px')
    
        
    }
    display(){
        
        this.title.html("COVID-19 SURVEY FORM")
        this.title.position(displayWidth/2-150,20)
    
        this.name.html("YOUR NAME")
        this.name.position(displayWidth/2-200,125)
        this.nameinput.position(displayWidth/2,145)
        
    
        this.email.html("YOUR EMAIL")
        this.email.position(displayWidth/2-200,165)
        this.emailinput.position(displayWidth/2,185)
        
        this.submit.position(displayWidth/2-100,900)
        this.reset.position(displayWidth/2+50,900)
        
        this.q1.position(displayWidth/2-300,300)
        this.radio1.position(displayWidth/2+150,320)
    
        this.q2.position(displayWidth/2-300,400)
        this.radio2.position(displayWidth/2+150,420)

        this.q3.position(displayWidth/2-300,500)
        this.radio3.position(displayWidth/2+150,520)

        this.q4.position(displayWidth/2-300,600)
        this.radio4.position(displayWidth/2+150,620)

        this.q5.position(displayWidth/2-300,700)
        this.radio5.position(displayWidth/2+150,720)

        this.submit.mousePressed(()=>{
        this.greeting.show()
        this.greeting.html("THANK YOU FOR DOING THE SURVEY !")
        this.greeting.position(displayWidth/2-350,800)
        this.greeting.style('width','700px')
        this.greeting.style('height','30px')
        this.greeting.style('background','lightgreen')
        this.greeting.style('padding','20px')
        })
    }
    }