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
                container: document.querySelector('#scroll-section-0')
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
    }
    let yOffset=0; //window.pageyoffset대신 쓸 변수
    let prevScrollHeight=0; //모든 섹션의 스크롤합 16420
    let currentScene=0; //현재 스크롤섹션 0,1,2,3

    function scrollLoop(){
        prevScrollHeight=0;
        for(let i=0; i<currentScene; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;

        }
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }
        if(yOffset < prevScrollHeight){
            if(currentScene===0) return;
            currentScene --;
        }
        console.log(currentScene);
        
    }

    window.addEventListener('resize',setLayout);
    //스크롤위치ㅣ
    window.addEventListener('scroll', ()=>{
        //스크롤하면 기본적으로 실행되는함수
        yOffset = window.pageYOffset;
        //console.log(yOffset);//스크롤값찍어줌
        scrollLoop();

    });

    setLayout();

})();//감싸고,함수바로호출됨