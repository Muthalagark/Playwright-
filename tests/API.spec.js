import {test,expect} from '@playwright/test'
var reqid;
//Post Mathod
test('Post method',async({request})=>{
    const reqresponse=await request.post("https://reqres.in/api/users",
        {data:{"name": "John Doe","job": "Engineer"},headers:{
            "x-api-key": "reqres-free-v1",
            "Accept":"application/json","Content-Type": "application/json"

        }
    });
    const respose= await reqresponse.json();
    console.log(respose)
    await expect(reqresponse.status()).toBe(201);
    let id = await respose.id;
    reqid = id;
    console.log(reqid);
})

//Get method
test('Get Method',async({request})=>{
        const get_respose=await request.get("https://reqres.in/api/users/5",{headers:{
            "x-api-key": "reqres-free-v1"}})
        const get_return=await get_respose.json();
        console.log(get_return);
})
//PUT Method
test('PUT Method',async({request})=>{
        const put_respose=await request.put("https://reqres.in/api/users/5",{data:{"name": "John Doe","job": "Junior Engineer"},headers:{
            "x-api-key": "reqres-free-v1",
            "Accept":"application/json","Content-Type": "application/json"}});
        const put_return=await put_respose.json();
        console.log(put_return);
})
//Patch Method
test('Patch Method',async({request})=>{
        const patch_respose=await request.patch("https://reqres.in/api/users/5",{data:{"name": "John Doe","job": "Senior Engineer"},headers:{
            "x-api-key": "reqres-free-v1",
            "Accept":"application/json","Content-Type": "application/json"}});
        const patch_return=await patch_respose.json();
        await expect(patch_respose.status()).toBe(200);
        console.log(patch_return);
})
//Delete Method
test.only('delete Method',async({request})=>{
        const delete_respose=await request.delete("https://reqres.in/api/users/5",{headers:{
            "x-api-key": "reqres-free-v1"}})
        // const delete_return=await delete_respose.json();
        // console.log(delete_return)
        console.log("Status:", delete_respose.status());
        await expect(delete_respose.status()).toBe(204);
        });