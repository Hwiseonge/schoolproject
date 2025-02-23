 //검색창 스크립트 부분---------------------------------------------------------------------------- 

 /*교실 정보*/
 const specialRooms = {
    '1층' : ['보건실', '교장실', '행정실', '방송실', '예지홀', '교감실', '1층 교무실', '건강체육교실'],
    '2층' : ['도서관', '체육관', '컴퓨터실'],
    '3층' : ['가정실'],
    '4층' : ['음악실', '미술실','지구과학실','물리실'],
    '5층' : ['화학실','생명과학실', '급식실']
  
};

const classRooms = {
    '1-1': '4층',
    '1-2': '4층',
    '1-3': '4층',
    '1-4': '4층',
    '1-5': '4층',
    '1-6': '5층',
    '1-7': '5층',
    '1-8': '5층',
    '1-9': '5층',
    '1-10': '5층',
    '1-11': '5층',

    '2-1': '3층',
    '2-2': '3층',
    '2-3': '3층',
    '2-4': '3층',
    '2-5': '3층',
    '2-6': '3층',
    '2-7': '3층',
    '2-8': '3층',
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
    '3-11': '3층',

    

};

const teachers = {
    '농담곰': '1층 교무실',
    '에스파': '수학 선생님',
    '엔믹스': '영어 선생님',
    'JYP': '음악 선생님'
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
    let 선생님들 = document.getElementById("_1F_교무실_선생님들");
    let 교무실 = document.getElementById("_1F_교무실");
    
    if (선생님들.style.display === "none" || 선생님들.style.display === "") {
        선생님들.style.display = "block";
        선생님들.style.position = "absolute";
        교무실.style.color='red';
        선생님들.style.top = "40vh";
        선생님들.style.right = "20vw";
        선생님들.style.zIndex = "10";
    } else {
        선생님들.style.display = "none";
        교무실.style.color='black';
    }
}

function teacher_list2() {
    let 교장실선생님들 = document.getElementById("_1F_교장실_선생님들");
    let 교장실 = document.getElementById("_1F_교장실");
    if (교장실선생님들.style.display === "none" || 교장실선생님들.style.display === "") {
        교장실선생님들.style.display = "block";
        교장실선생님들.style.position = "absolute";
        교장실선생님들.style.top = "75vh";
        교장실.style.color='red';
        교장실선생님들.style.right = "30vw";
        교장실선생님들.style.zIndex = "10";
    } else {
        교장실선생님들.style.display = "none";
        교장실.style.color='black';
    }
}

const btnTeacher2F = document.getElementById('btn_teacher_2F');
const teacher2F = document.getElementById('_1F_교장실_선생님들');

btnTeacher2F.addEventListener('click', function() {
    if (teacher2F.style.display === 'block') {
        teacher2F.style.display = 'none';
    } else {
        teacher2F.style.display = 'block';
        // 교무실이 열려 있으면 닫기
        const teacher1F = document.getElementById('_1F_교무실_선생님들');
        teacher1F.style.display = 'none';
    }
});
