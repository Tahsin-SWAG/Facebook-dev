const exam = true;
const mark = 80;


export default function Promise(){

function enroll(){
    const promise = new Promise(function(resolve , reject){
        setTimeout(() => {
             if(exam){
                 resolve('Submit successfullt')
             }else{
                 reject('Submit faild')
             }
        }, 2000);
   })

   return promise;
};

function proggress(){
    const proggress = new Promise((resolve , reject) => {
        setTimeout(() => {
             if(exam){
                 resolve('Submit on pending')
             }else{
                 reject('Submit faild')
             }
        }, 2000);
   })

   return proggress
}

function getcurtificate(){
    const success = new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log('Submit Successfully')
        }, 2000);
   })

   return success;
  }

async function promise(){
        await enroll();
        await proggress();
       const massage = await getcurtificate();

       console.log(massage)
}

promise();

return('')

}
