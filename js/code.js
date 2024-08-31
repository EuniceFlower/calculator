
const varArray={
    display:document.querySelector('#text'),
    simbol:[document.querySelector('.clear'),document.querySelector('.div'),document.querySelector('.por'),
            document.querySelector('.menos'),document.querySelector('.more'),document.querySelector('.punto'),
            document.querySelector('.equal')],
    number:[document.querySelector('.zero'),document.querySelector('.ceroz'),document.querySelector('.one'),
            document.querySelector('.two'),document.querySelector('.tre'),document.querySelector('.four'),
            document.querySelector('.five'),document.querySelector('.six'),document.querySelector('.seven'),
            document.querySelector('.eight'),document.querySelector('.nine')]
}


    varArray.number[1].addEventListener('click',function(){ //evento boton ceros
        if(varArray.display.value.length<15){
            varArray.display.value +='00';

        }else{
            varArray.display.value="";
        }
    });

    
    varArray.simbol[0].addEventListener('click',function(){ //evento boton clear
        varArray.display.value="";
    });
    varArray.simbol[6].addEventListener('click',function(){ //evento boton equal
        if(varArray.display.value==""){
            alert("Display vacio");
        }else{
            varArray.display.value=eval(varArray.display.value);
        }
    });
    varArray.simbol[1].addEventListener('click',function(){ //evento boton div
        varArray.display.value +='/';
        console.log(varArray.display.value.charAt(length));
    });
    varArray.simbol[2].addEventListener('click',function(){ //evento boton mul

        varArray.display.value +='*';
    });
    varArray.simbol[3].addEventListener('click',function(){ //evento boton menos
        varArray.display.value +='-';
    });
    varArray.simbol[4].addEventListener('click',function(){ //evento boton more
        varArray.display.value +='+';
    });
    varArray.simbol[5].addEventListener('click',function(){ //evento boton punto
        varArray.display.value +='.';
    });
    
    varArray.number[0].addEventListener('click',function(){ //evento boton cero
        varArray.display.value +='0';
    });
    varArray.number[2].addEventListener('click',function(){ //evento boton one
        varArray.display.value +='1';
    });
    varArray.number[3].addEventListener('click',function(){ //evento boton two
        varArray.display.value +='2';
    });
    varArray.number[4].addEventListener('click',function(){ //evento boton three
        varArray.display.value +='3';
    });
    varArray.number[5].addEventListener('click',function(){ //evento boton four
        varArray.display.value +='4';
    });
    varArray.number[6].addEventListener('click',function(){ //evento boton five
         varArray.display.value +='5';
    });
    varArray.number[7].addEventListener('click',function(){ //evento boton six
         varArray.display.value +='6';
    });
    varArray.number[8].addEventListener('click',function(){ //evento boton seven
         varArray.display.value +='7';
    });
    varArray.number[9].addEventListener('click',function(){ //evento boton eight
         varArray.display.value +='8';
    });
    varArray.number[10].addEventListener('click',function(){ //evento boton nine
         varArray.display.value +='9';
    });
    
    document.addEventListener('keydown',function(e){
        if((e.keyCode<=57 && e.keyCode>=48)||(e.keyCode<=111 && e.keyCode>=96) || e.keyCode==13){
        
            switch(e.keyCode){
                case(111):
                    varArray.display.value +=e.key;
                    varArray.simbol[1].classList.add('focus');
                    document.addEventListener('keyup',function(){
                        varArray.simbol[1].classList.remove('focus');
                    });
                    break;
                    case(106):
                    varArray.display.value +=e.key;
                    varArray.simbol[2].classList.add('focus');
                    document.addEventListener('keyup',function(){
                        varArray.simbol[2].classList.remove('focus');
                    });
                    break;
                    case(109):
                    varArray.display.value +=e.key;
                    varArray.simbol[3].classList.add('focus');
                    document.addEventListener('keyup',function(){
                        varArray.simbol[3].classList.remove('focus');
                    });
                    break;
                case(107):
                    varArray.display.value +=e.key;//mas
                    varArray.simbol[4].classList.add('focus');
                    document.addEventListener('keyup',function(){
                        varArray.simbol[4].classList.remove('focus');
                    });
                    break;
                case(48):
                case(96):
                    varArray.display.value +=e.key;
                    varArray.number[0].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[0].classList.remove('focus');
                    });
                    break;
                case(49):
                case(97):
                    varArray.display.value+=e.key;
                    varArray.number[2].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[2].classList.remove('focus');
                    });
                    break;
                case(98):
                case(50):
                    varArray.display.value+=e.key;
                    varArray.number[3].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[3].classList.remove('focus');
                    });
                    break;
                case(99):
                case(51):
                    varArray.display.value+=e.key;
                    varArray.number[4].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[4].classList.remove('focus');
                    });
                    break;
                case(100):
                case(52):
                    varArray.display.value+=e.key;
                    varArray.number[5].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[5].classList.remove('focus');
                    });
                    break;
                case(101):
                case(53):
                    varArray.display.value+=e.key;
                    varArray.number[6].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[6].classList.remove('focus');
                    });
                    break;
                case(102):
                case(54):
                    varArray.display.value+=e.key;
                    varArray.number[7].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[7].classList.remove('focus');
                    });
                    break;
                case(103):
                case(55):
                    varArray.display.value+=e.key;
                    varArray.number[8].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[8].classList.remove('focus');
                    });
                    break;
                case(104):
                case(56):
                    varArray.display.value+=e.key;
                    varArray.number[9].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[9].classList.remove('focus');
                    });
                    break;
                case(105):
                case(57):
                    varArray.display.value+=e.key;
                    varArray.number[10].classList.add('focus');
                    document.addEventListener('keyup',function(e){
                        varArray.number[10].classList.remove('focus');
                    });
                    break;
                case(13):
                if(varArray.display.value==""){
                    alert("Display null");
                }else{
                    varArray.display.value=eval(varArray.display.value);
                }
                break;
            }
        }
    });
