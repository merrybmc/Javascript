// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 현재시간 출력
console.log(new Date('Jun 5, 2022')); // 날짜 지정
console.log(new Date('2022-12-17')); // 날짜 지정
console.log(new Date('2022-12-17T03:25')); // 날짜 및 시간 지정
console.log(Date.now());
console.log(Date.parse('2022-12-17T03:25'));

const now = new Date();
now.setFullYear(2023); // 년도 설정
now.setMonth(10); // 월 설정 , 0: 1
now.setDate(25); // 일 설정
console.log(now);
console.log(now.getFullYear()); // 년도만 출력
console.log(now.getMonth()); // 월만 출력
console.log(now.getDate()); // 일만 출력
console.log(now.getDay()); // 요일 출력 0: 일요일
console.log(now.getTime()); // 시간 출력
console.log(now.getHours()); // 시만 출력
console.log(now.getMinutes()); // 분만 출력
console.log(now.getSeconds()); // 초만 출력
console.log(now.getMilliseconds()); // 밀리초만 출력

console.log(now.toString()); // 요일 날짜 시간 출력
console.log(now.toDateString()); //날짜만 출력
console.log(now.toTimeString()); // 시간만 출력
console.log(now.toISOString()); // ISO 8601 형식으로 출력
console.log(now.toLocaleString('en-US')); // 특정 지역에 맞게 출력
console.log(now.toLocaleString('ko-KR')); // 특정 지역에 맞게 출력
