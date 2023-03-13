{
    //async를 사용하면 Promise를 반환한다
    async function getPromise() {
        return new Promise((res) => { }, (rej) => { })
    }

    //async 사용함수는 뒤에 then 사용가능
    getPromise().then((value) => { })

    //await 키워드는 async 내에서만 사용가능
    async function setAwait() {
        await getPromise(); //await 키워드 오른쪽엔 Promise 형식 // 그 Promise가 처리 될때 까지 기다림
    }

    async function order() {
        const result1 = await fn1();
        const result2 = await fn2(result1);
        const result3 = await fn3(result2);
        console.log(`ENd ${result3}`)
        //or
        const result_all = await Promise.all([fn1(), fn2(), fn3()]);
        console.log(`ENd ${result3}`)
    }

    async function order() {
        //오류 발생 처리 try catch
        try {
            const result1 = await fn1();
            const result2 = await fn2(result1);
            const result3 = await fn3(result2);
            console.log(`ENd ${result3}`)
        } catch (err) {
            console.log(`ERR`)
        }
        console.log(`ENd ${result3}`)
    }
}