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




// 화면전환


const floors = {
    '1층': { rooms: ['보건실', '교장실', '행정실', '방송실', '예지홀', '교감실', '1층 교무실', '건강체육교실'], href= "index.html" },
    '2층': { rooms: ['도서관', '체육관', '컴퓨터실'], href= "2층.html" },
    '3층': { rooms: ['가정실'], href= "3층.html" },
    '4층': { rooms: ['음악실','미술실','지구과학실','물리실'], href= "4층.html" },
    '5층': { rooms: ['화학실','생명과학실','급식실'], href= "5층.html" },
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

        for (let key in specialRooms) {
        if (key === searchInput) {
            foundFloor = specialRooms[key]; // 해당 층 저장
            exactMatch = `<p><strong>${searchInput}</strong>: ${foundFloor}에 위치</p>`;
        } else if (key.includes(searchInput)) {
            similarMatches.push(`<p><strong>${key}</strong>: ${specialRooms[key]}에 위치</p>`);
        }
    }

    for (let key in classRooms) {
        if (key === searchInput) {
            foundFloor = classRooms[key]; // 해당 층 저장
            exactMatch = `<p><strong>${searchInput}</strong>: ${foundFloor}에 위치</p>`;
        } else if (key.includes(searchInput)) {
            similarMatches.push(`<p><strong>${key}</strong>: ${classRooms[key]}에 위치</p>`);
        }
    }


    console.log(`검색어: ${searchInput}`);
    console.log(`찾은 층: ${foundFloor ? foundFloor : "검색 결과 없음"}`);
    console.log(`카테고리 : ${category}`);

    const isValidCategory = !!foundFloor;
    

    if (isValidCategory) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = exactMatch + "<hr>" + similarMatches.join("");

        if (foundFloor){

            setTimeout(() => {
                console.log(`층 이동 시도: ${foundFloor}`);
                redirectToFloor(foundFloor);
            }, 1000);
        }
    } 
    
    else {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = "검색 결과 없음<br>다른 검색어를 입력해 주세요.";
    }
}
