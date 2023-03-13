{
    //Promise
    //new Promise 생성자가 반환하는 객체
    //state:pendung(대기)
    //result:undefined

    //resolve(value) ->
    //state: fullfilled(이행)
    //result:value

    //reject(error)
    //state: rejected(거부)
    //result:error
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK') //반환값
        }, 3000)
        //success = resolve
        // failed = reject
    });

    //then 이후 사용 하는 함수 catch(reject인경우에만 실행). finally

    pr.then(function (result) { }, //이행되었을 시 실행 result = 'OK'
        function (err) { }); // 거부 되었을 시 실행

    //같은 코드
    pr.then((result) => { }).catch((err) => { }).finally(() => { }) //finally 이행//거부 항상 실행

    //Promise 없이 일반 함수 로 작성 시
    function Fn1(callback) {
        console.log('Fn1')
        callback();
    };
    function Fn2(callback) {
        console.log('Fn2')
        callback();
    };
    function Fn3(callback) {
        console.log('Fn3')
        callback();
    };
    Fn1(Fn2(Fn3()))//... callback hell

    //Promise 처리
    const f1 = () => {
        return new Promise((res, rej) => {
            //code
        })
    }
    const f2 = (param) => {
        return new Promise((res, rej) => {
            //code
        })
    }
    const f3 = (param) => {
        return new Promise((res, rej) => {
            //code
        })
    }
    f1()
        .then(res => f2(res))
        .then(res => f3(res))
        .catch((err) => {
            //에러
        }).finally(() => {
            //완료
        })

    //에러가 실행되면 뒤에 함수는 실행 X

    //Promise.all(배열)
    Promise.all([f1(), f2(), f3()]).then((res) => {
        //세작업이 동시 실행 및 모두 완료된 후 then 실행
        //중간에 오류가 뜨면 반환값이 없음
        //중간에 누락되는 페이지가 없어야 하는 경우에 사용
    })
    //Promise.race(배열) - 경주
    //하나라도 완료되면 뒤에 작업은 X

}