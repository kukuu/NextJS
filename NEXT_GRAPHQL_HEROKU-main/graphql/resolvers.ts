

import * as casual from 'casual';



export const resolvers = {
    Query: {
        people:  (_, args, context) => {

                    let arr = [];
            for (let i = 0; i < 2000; i++) {
                const generatedId = casual.uuid;
                arr.push({
                  cursor: i,
                  node: {
                    id: generatedId,
                    name: casual.name,
                    address: casual.address,
                    email: casual.email,
                    phone: casual.phone,
                  },
                });
              }
              let hasNext = true;
              let end = args.first ;

              if(!args.after){
               arr = arr.slice(0,args.first+1)
              }else{
                if(args.after + args.first > arr.length){
                  hasNext = false;
                  arr = arr.slice(args.after,arr.length)
                  end = arr.length-1;

                }else{

                arr = arr.slice(args.after,args.after + args.first)
                end = args.after + args.first;
              }
            }
              


           const res =  {edges: arr,
                pageInfo:{
                    hasNextPage: hasNext,
                    endCursor: end
                }
            }
          
            return res;
        },
        hello: (_, { name }) => `Hello ${name}!`,
},


}

// const fakeData = [];
// for (let i = 0; i < 2000; i++) {
//   fakeData.push({
//     name: faker.name.findName(),
//     address: faker.address.streetAddress(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//   });
// }
// return fakeData;
// }
// return [
//     {
//         id: '0',
//         name: 'John Doe',
//         address: '123 Main St',
//         email: 'cvbcxv',
//         phone: '555-555-5555'
//     },
//     {
//         id: '1',
//         name: 'John Doe',
//         address: '123 Main St',
//         email: 'cvbcxv',
//         phone: '555-555-5555'
//     },
//     {
//         id: '2',
//         name: 'Jane Doe',
//         address: '123 Main St',
//         email: 'xcvbxc',
//         phone: '555-555-5555'
//     },
//     {
//         id: '3',
//         name: 'Jane Doe',
//         address: '123 Main St',
//         email: 'xcvbxc',
//         phone: '555-555-5555'
//     },
//     {
//         id: '4',
//         name: 'Priya Doe',
//         address: '123 Main St',
//         email: 'xcvbxc',
//         phone: '555-555-5555'
//     },]