{
    //함수옆에 * 사용으로 제너레이터 선언
    function* fn() { 
        // yield 키워드로 함수의 사용을 멈춤
        console.log('1')
        yield 1; //data
        console.log('2')
        yield 2;
        yield 3;
        return 'end'
    }

    //next 메소드 사용
    //가장 가까운 yield 키워드 만날때까지 실행후 멈춤
    fn().next();
    //-> yield 1을 만날때까지 함수 실행 후 데이터 객체 반환
    //반환된 객체는 value:, done: property를 가짐
    //value: yield 의 r-value 값
    //done: 함수코드가 끝났는지 안끝났는지 bool값 반환
    //done : false = 실행할 함수가 남음
    //done : true = 모든 함수 실행 완료

    //메소드
    //return(), throw()
    fn().return() // 그 즉시 완료
    fn().throw()   //건너뛰기
    

    //iterable
    //symbol.iterator 메서드가 있다
    //symbol.iterator 는 iterator를 반환해야 한다

    //iterator
    //next 메서드를 가진다
    //next메소드는 value와 done속성을 가진 객체를 반환
    //작업이 끝나면 done 은 true가 된다

}
