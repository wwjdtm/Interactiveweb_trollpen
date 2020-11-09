//타임라인만들기

(function(){
    const sceneInfo = [
        //스크롤섹션 객체 4개
        //애니매이션효과  sticky, 없는애 normal
        {
            //0
            type:'sticky',
            heightNum:5, //브라우저높이의5배로 scrollheight세팅
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                messageD: document.querySelector('#scroll-section-0 .main-message.d')
            },
            values:{
                messageA_opacity: [0,1]
            }

        
        },
        {
            //1
            type:'normal',
            heightNum:5, 
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }

        
        },
        
        {
            //2
            type:'sticky',
            heightNum:5, 
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            }

        
        },
        {
            //3
            type:'sticky',
            heightNum:5, 
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-3')
            }

        
        }
    ];

    function setLayout(){
        //각스크롤섹션 높이세팅
        for (let i=0; i< sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        yOffset = window.pageYOffset;
        //currentscene 자동으로로딩
        let totalScrollHeight=0;
        for(let i=0; i<sceneInfo.length; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight>=yOffset){
                currentScene=i;
                break;
            }
        }
        document.body.setAttribute('id',`show-scene-${currentScene}`);
    }
    let yOffset=0; //window.pageyoffset대신 쓸 변수
    let prevScrollHeight=0; //모든 섹션의 스크롤합 16420
    let currentScene=0; //현재 스크롤섹션 0,1,2,3

    function calcValues(values, currentYOffset){


    }

    function playAnimation(){
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffset = yOffset - prevScrollHeight;

        switch (currentScene){
            case 0:
                console.log('0 play');
                let messageA_opacity_0 = values.messageA_opacity[0];
                let messageA_opacity_1 = values.messageA_opacity[1];
                console.log
                break;
            case 1:
                console.log('1 play');
                break;
            case 2:
                console.log('2 play');
                break;
            case 3:
                console.log('3 play');
                break;
        }

    }

    function scrollLoop(){
        prevScrollHeight=0;
        for(let i=0; i<currentScene; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;

        }
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
            document.body.setAttribute('id',`show-scene-${currentScene}`);
        }
        if(yOffset < prevScrollHeight){
            if(currentScene===0) return;
            currentScene --;
            document.body.setAttribute('id',`show-scene-${currentScene}`);
        }
        // console.log(currentScene);

        playAnimation();
       
        
    }

    
    

    
    //스크롤위치ㅣ
    window.addEventListener('scroll', ()=>{
        //스크롤하면 기본적으로 실행되는함수
        yOffset = window.pageYOffset;
        //console.log(yOffset);//스크롤값찍어줌
        scrollLoop();

    });
    window.addEventListener('load',setLayout);
    window.addEventListener('resize',setLayout);

})();//감싸고,함수바로호출 