/*

The transform() function should accept data as input and transform it

The contents of data folder is fetched from `input.js` file

The function has to transform the data and generate as per the structure given in `expected-output.js`.

The expected-output data is used to render it on the browser using the code provided in `board-renderer.js` file.

The function should return error message 
"Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
if the data is not an object and / or does not contain boards, lists, cards and comments as its array properties

DO NOT MODIFY THE CODE IN OTHER FILES AS IT WILL IMPACT THE TEST OUTCOME AND BROWSER OUTPUT.

*/
export const transform = (data) => {

    // Provide Solution Code Here
   let output;
//     if(typeof(data.boards)!='object' || typeof(data.lists) !='object' ||typeof(data.cards)!='object'|| typeof(data.comments)!='array'){

//        return "Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!";
//    }else{
   
         output=data.boards.filter(board => board.boardId )
        .reduce((ExpectedOutput,CurrentOutput)=>{
        let current=ExpectedOutput.find(board=>board.boardId == CurrentOutput.boardId)

            if(!current){
                ExpectedOutput.push({
                    boardId:CurrentOutput.boardId,
                    boardTitle:CurrentOutput.boardTitle,
                    lists:[]
                }) 
                let index=0;
                let list=data.lists.filter(list=>list.boardId == CurrentOutput.boardId)
                .map(list=>{

                    

                    ExpectedOutput[0].lists.push({
                        listId:list.listId,
                        listTitle:list.listTitle,
                        cards:[]
                        
                    });
                    //console.log(index);

                    let card =data.cards.filter(card => card.listId == list.listId).map(card=>{
                        let count =0;

                        let comment = data.comments.filter(comment => comment.cardId == card.cardId).map(comment=>{
                            count =count +1;

                        });

                        ExpectedOutput[0].lists[index].cards.push({
                            cardId:card.cardId,
                            cardTitle:card.cardTitle,
                            comments:count  
                        });
                    })
                    index=index+1;
                });
    
            }
            return ExpectedOutput;
        },[]);

    //}
       
    return output;



    
};