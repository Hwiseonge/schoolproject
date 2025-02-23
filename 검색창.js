// 화면전환


const floors = {
    '1F': { rooms: ['1층 교무실', '행정실','교장실','보건실', '방송실', '예지홀', '건강체육교실'], url: "index.html" },
    '2F': { rooms: ['도서관', '컴퓨터실','체육관', '학생부','메이커스실','3-1','3-2','3-3','3-4','3-5','3-6','3-7','3-8','3-9'], url: "2층.html" },
    '3F': { rooms: ['가정실','3-10','3-11','2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8'], url: "3층.html" },
    '4F': { rooms: ['음악실','미술실','지구과학실','물리실','2-9','2-10','2-11','1-1','1-2','1-3','1-4','1-5'], url: "4층.html" },
    '5F': { rooms: ['화학실','급식실','생명과학실','wee클래스','1-6','1-7','1-8','1-9','1-10','1-11'], url: "5층.html" },
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

    if (category === 'special') {
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
    } else if (category === 'class') {
        for (let room in classRooms) {
            if (room === searchInput) {
                foundFloor = classRooms[room];  
                exactMatch = `<p><strong>${searchInput}</strong>: ${foundFloor}에 위치</p>`;
            } else if (room.includes(searchInput)) {
                similarMatches.push(`<p><strong>${room}</strong>: ${classRooms[room]}에 위치</p>`);
            }
        }
    }

    console.log(`검색어: ${searchInput}, 찾은 층: ${foundFloor}, 카테고리 : ${category}`);

    const isValidCategory =
        (category === 'special' && specialRooms[searchInput]) ||
        (category === 'class' && classRooms[searchInput]);

    if (isValidCategory) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = exactMatch + "<hr>" + similarMatches.join("");

        if (foundFloor) {
            setTimeout(() => {
                if (['1F', '2F', '3F', '4F', '5F'].includes(foundFloor)) {
                    redirectToFloor(foundFloor);
                }
            }, 1000); 
        }
    } else {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = "검색 결과 없음<br>다른 검색어를 입력해 주세요.";
    }
}

