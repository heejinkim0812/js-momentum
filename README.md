# 자바 스크립트 토이 프로젝트 
:link: **링크** https://heejinkim0812-momentum.netlify.app/ 
<br/>      
![1](https://user-images.githubusercontent.com/71063574/148744501-32df47ff-94a2-4815-9833-aabb07f90db8.jpg)
![2](https://user-images.githubusercontent.com/71063574/148744513-0349818a-1c16-4753-ba43-e6a3bab910b3.jpg)
<br/>       
기본적인 to-do list 사이트 만들기 
<br/>  
<br/>  

## 구현 방법

**background.js + quotes.js**
- 행렬을 형성하여 랜덤 백그라운드, 송출 문구 지정
- Math.random, Math.floor 기능을 사용한 행렬 순번 randomize 

**clock.js**
- Date 객체를 사용하여 날짜와 시간 관련 정보 표현
- setInterval, setTimeout: 일정주기, 일정 시간 이후로 실행되는 타이머 설정

**login.js**
- submit event가 발생할 시, localstorage에 유저 정보 저장
- 유저 정보 저장 유무에 따라 기존의 form을 hidden, 이후 greeting message를 보이게 함

**todo.js**
- 유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장
- localstorage에 저장된 정보의 유무로 li 표현
- li의 추가 및 삭제 기능

**weather.js**
- openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현

<br/>
