   //검색창 스크립트 부분---------------------------------------------------------------------------- 
   
   const specialRooms = {
    '1층 교무실': '1층',
    '행정실': '1층',
    '교장실':'1층',
    '도서관': '2층',
    '컴퓨터실': '2층',
    '가정실' : '3층',
    '음악실': '4층',
    '미술실': '4층',
    '화학실':'5층',
    '급식실': '5층'
    
};

    const classRooms = {
        '1-1': '1층\n주변 교실: 1-2, 교무실',
        '1-2': '1층\n주변 교실: 1-1, 교무실',
        '2-1': '2층\n주변 교실: 3-1',
        '3-1': '3층\n주변 교실: 2-1'
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
        const 교무실텍스트=document.getElementById('_1F_교무실')
        const 교장실텍스트=document.getElementById('_1F_교장실')
    
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
        let 선생님들 = document.getElementById("_4F_교무실_선생님들");
        let 교무실 = document.getElementById("_4F_교무실");
        
        if (선생님들.style.display === "none" || 선생님들.style.display === "") {
            선생님들.style.display = "block";
            선생님들.style.position = "fixed";
            교무실.style.color='red';
            선생님들.style.top = "70vh";
            선생님들.style.right = "10vw";
            선생님들.style.zIndex = "10";
        } else {
            선생님들.style.display = "none";
            교무실.style.color='black';
        }
    }


    const btnTeacher2F = document.getElementById('btn_teacher_2F');
    const teacher2F = document.getElementById('_4F_교장실_선생님들');

    btnTeacher2F.addEventListener('click', function() {
        if (teacher2F.style.display === 'block') {
            teacher2F.style.display = 'none';
        } else {
            teacher2F.style.display = 'block';
            // 교무실이 열려 있으면 닫기
            const teacher1F = document.getElementById('_4F_교무실_선생님들');
            teacher1F.style.display = 'none';
        }
    });
    
