// 화면전환


// 층 및 방 정보
const floors = {
    '1F': { rooms: ['건강체력실','별무리홀','학생부','교감실','대형강의실','교사휴게실','고사관리실','산들마루Cafe','별마루','방송실','예지홀','전통관', '보건실','운영위원회의실','행정실','행정실장실'], url: "index.html" },
    '2F': { rooms: ['3-9','3-8','3-7','3-6','3-5', '3-4','3-3','3-2','3-1','3학년부 교무실','3학년부','휴게실', '자기주도학습2실', '진학상담3실','소인수교실3','스터디홀','메이커스실','진달래홀','강당','체육관','컴퓨터실','도서관','학생안전부'], url: "2층.html" },
    '3F': { rooms: ['3-11','3-10','2-7','2-6', '2-5', '2-4','2-3','2-2','2-1','휴게실', '진학상담2실','소인수교실2','2학년부 교무실','2학년부','해오름실','야자실','자습실', '홈베이스','별하당','wee클래스2','서버실','가정실','가정연구실'], url: "3층.html" },
    '4F': { rooms: ['2-11','2-10', '2-9','2-8','1-4', '1-3','1-2','1-1','휴게실','자기주도학습2실','진학상담1실','소인수교실1','미술준비실', '음악연구실','야자실','자습실','홈베이스', '별하당','리소스실','교육정보부 교무실' '교육정보부','물리실','지구과학실','미술실','음악실'], url: "4층.html" },
    '5F': { rooms: ['1-10','1-9','1-8', '1-7','1-6','1-5','통합교육지원실','wee클래스1','생명과학실', '교직원식당','식당','급식실''조리실',  '영양사실','인문사회부 교무실', '인문사회부','진로교육부 교무실','진로교육부','과학부 교무실','과학부','교과연구실', '기자재관리실','화학실'], url: "5층.html" },
};

// 특정 층으로 자동 이동
function redirectToFloor(targetFloor) {
    if (!targetFloor || !floors[targetFloor]) return;

    console.log(`층 이동 실행: ${targetFloor} → ${floors[targetFloor].url}`);
    window.location.href = floors[targetFloor].url;
}

function combinedSearch(inputId, resultId, data, category) {
    showInfo(inputId, resultId, data);
    showSearchResults(inputId, resultId, data, category);
}

// 검색 후 자동 이동하는 함수
function showSearchResults(inputId, resultId, data, category) {
    const searchInput = document.getElementById(inputId).value.trim();
    const resultDiv = document.getElementById(resultId);

    if (!searchInput) {
        resultDiv.style.display = 'none';
        return;
    }

    let foundFloor = null;
    let exactMatch = "";
    let similarMatches = [];

    for (let floor in floors) {
        if (floors[floor].rooms.includes(searchInput)) {
            foundFloor = floor;
            exactMatch = `<p><strong>${searchInput}</strong>: ${floor}에 위치</p>`;
        } else {
            floors[floor].rooms.forEach(room => {
                if (room.includes(searchInput)) {
                    similarMatches.push(`<p><strong>${room}</strong>: ${floor}에 위치</p>`);
                }
            });
        }
    }

    console.log(`검색어: ${searchInput}, 찾은 층: ${foundFloor}, 카테고리 : ${category}`);

    const isValidCategory =
        (category === 'special' && specialRooms[searchInput]) ||
        (category === 'class' && classRooms[searchInput]);
    

    if (isValidCategory) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = exactMatch + "<hr>" + similarMatches.join("");

        if (foundFloor && ((category === 'special' && specialRooms[searchInput]) ||
                           (category === 'class' && classRooms[searchInput]))) {

            setTimeout(() => {
                if (['1F','2F','3F','4F','5F'].includes(foundFloor)) {
                    redirectToFloor(foundFloor);
                }
            }, 1000);
        }
    } 
    
    else {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = "검색 결과 없음<br>다른 검색어를 입력해 주세요.";
    }
}
