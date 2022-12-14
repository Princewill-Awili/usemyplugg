import { nanoid } from "nanoid"
export const artisans = {
     lagos:{
          carpenters:[
               {
                    name:"Taofeek",
                    avatar:"data:image/jpeg;base64,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"
               }
          ],
          mechanics:[],
     }
          

}

export const artisanA = {
     name:"Taofeek",
     avatar:"https://i0.wp.com/jerryexpressng.com/wp-content/uploads/2021/08/young-african-carpenter-smiling-while-260nw-1903900408-e1628884224149.jpg?fit=390%2C253&ssl=1",
     rating:4,
     area:"Ajah, Lagos",
     verified:true,
     contact:"+2348038765342",
     summary:"A hardworking,intelligent and motivated mechanic with experience working on Japanese and German cars such as Toyota, Nissan, Honda, Mercedes Benz and Kia.",
     services:['Car Mechanic','Motor Tecnician'],
     id: nanoid()
}

export const artisanB = {
     name:"Ifeanyi",
     avatar:"",
     rating:3,
     area:"Agege, Lagos",
     verified:false,
     summary:"An experienced electrician in household electrical works and installations. Wiring of new houses and repair of electrical appliances.",
     contact:"+234803823442",
     services:['Electrician'],
     id:nanoid()
}

export const artisanList = [artisanA,artisanB]