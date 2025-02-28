 //검색창 스크립트 부분---------------------------------------------------------------------------- 

/*교실 정보*/
 const specialRooms = {
    '건강체력실': '1층',
    '별무리홀': '1층', '대형강의실':'1층',
    '학생부':'1층',
    '교감실': '1층',
    '교사휴게실': '1층',
    '고사관리실':'1층',
    '산들마루Cafe': '1층',
    '별마루':'1층',
    '방송실': '1층',
    '예지홀': '1층',
    '전통관':'1층',
    '행정실장실': '1층',
    '행정실':'1층',
    '운영위원회의실': '1층',
    '보건실': '1층',


    '학생안전부':'2층',
    '도서관': '2층', '도서실':'2층',
    '컴퓨터실': '2층',
    '체육관': '2층', '강당':'2층', '진달래홀':'2층',
    '메이커스실': '2층',
    '스터디홀':'2층',
    '소인수교실3':'2층',
    '진학상담3실':'2층',
    '자기주도학습2실':'2층',
    '휴게실':'2층',
    '3학년부':'2층', '3학년부 교무실':'2층',
    
   
    '가정연구실':'3층',
    '가정실' : '3층',
    '서버실':'3층',
    'wee클래스2':'3층',
    '별하당':'3층', '홈베이스':'3층', '자습실':'3층', '야자실':'3층',
    '해오름실':'3층',
    '2학년부':'3층', '2학년부 교무실':'3층',
    '소인수교실2':'3층',
    '진학상담2실':'3층',
    '휴게실':'3층' ,
  
  
    '음악실': '4층',
    '미술실': '4층',
    '지구과학실': '4층',
    '물리실': '4층',
    '교육정보부':'4층', '교육정보부 교무실':'4층',
    '리소스실':'4층',
    '별하당':'4층', '홈베이스':'4층', '자습실':'4층', '야자실':'4층',
    '음악연구실':'4층',
    '미술준비실':'4층',
    '소인수교실1':'4층',
    '진학상담1실':'4층',
    '자기주도학습2실':'4층',
    '휴게실':'4층',
  
  
    '화학실':'5층',
    '기자재관리실':'5층',
    '교과연구실':'5층',
    '과학부':'5층', '과학부 교무실':'5층',
    '진로교육부':'5층', '진로교육부 교무실':'5층',
    '인문사회부':'5층', '인문사회부 교무실':'5층',
    '영양사실':'5층',
    '조리실':'5층',
    '급식실': '5층', '식당':'5층',
    '교직원식당':'5층',
    '생명과학실':'5층',
    'wee클래스1': '5층',
    '통합교육지원실':'5층'
  
    
};


const classRooms = {
    '1-1': '4층',
    '1-2': '4층',
    '1-3': '4층',
    '1-4': '4층',
    '1-5': '5층',
    '1-6': '5층',
    '1-7': '5층',
    '1-8': '5층',
    '1-9': '5층',
    '1-10': '5층',

    '2-1': '3층',
    '2-2': '3층',
    '2-3': '3층',
    '2-4': '3층',
    '2-5': '3층',
    '2-6': '3층',
    '2-7': '3층',
    '2-8': '4층',
    '2-9': '4층',
    '2-10': '4층',
    '2-11': '4층',

    '3-1': '2층',
    '3-2': '2층',
    '3-3': '2층',
    '3-4': '2층',
    '3-5': '2층',
    '3-6': '2층',
    '3-7': '2층',
    '3-8': '2층',
    '3-9': '2층',
    '3-10': '3층',
    '3-11': '3층'


};


        const teachers = {
                '농담곰': '매우 귀여워요.❤️',
            '고로케': '맛있어보여요❤️',
            '치이카와': '귀여워',
            '선생님': '왜 부르셨죠?'
        }


        //  검색 함수 (특별실, 교실, 선생님 각각 검색 가능)
        function showInfo(inputId, resultId, data) {
            const searchInput = document.getElementById(inputId).value.trim();
            const resultDiv = document.getElementById(resultId);
            const 교무실텍스트=document.getElementById('_2F_교무실')
            
        
            if (교무실텍스트) 교무실텍스트.classList.remove('highlight')
            if (교장실텍스트) 교장실텍스트.classList.remove('highlight')
        
        if (searchInput) {
            if (data[searchInput]) {
                resultDiv.style.display = 'block';
                resultDiv.textContent = data[searchInput];
        
                if (searchInput === '교무실' &&교무실텍스트) {
                    교무실텍스트.classList.add('highlight');
                }
        
                else if (searchInput === '교장실' &&교장실텍스트) {
                    교장실텍스트.classList.add('highlight');
                }
        
        
            } else {
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = '검색 결과 없음';
            }
        } else {
        resultDiv.style.display = 'none';
        }
        }
    
        //지도 교무실 터치시 쌤 성함 뜨는 곳------------------------------------------------------------------------------

        function teacher_list() {
            let 선생님들 = document.getElementById("_2F_교무실_선생님들");
            let 교무실 = document.getElementById("_2F_교무실");
            
            if (선생님들.style.display === "none" || 선생님들.style.display === "") {
                선생님들.style.display = "block";
                선생님들.style.position = "fixed";
                교무실.style.color='red';
                선생님들.style.top = "60vh";
                선생님들.style.right = "5vw";
                선생님들.style.zIndex = "10";
            } else {
                선생님들.style.display = "none";
                교무실.style.color='black';
            }
        }

        
    
        const btnTeacher2F = document.getElementById('btn_teacher_2F');
     
        btnTeacher2F.addEventListener('click', function() {
            if (teacher2F.style.display === 'block') {
                teacher2F.style.display = 'none';
            } else {
                
                teacher2F.style.display = 'none';
            }
        });
        
    
