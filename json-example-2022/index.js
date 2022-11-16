import data from './rawBooks.json' assert { type: 'json' };
console.log(data);
let readBooks = 0;
let greatestTimeTaken = 0
let authorList={}
let mostRecentReads=[]
let longestBook=0
let shortestBook= 10000000
let shortestBookTitlenAuthor = ""
let longestBookTitlenAuthor = ""
let diagnostic =[]
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
data.forEach(book =>{
    let readingTime=parseInt(book['Time on TBR (years)'])
    let bookIsRead=book['read?'].localeCompare("Yes")
    let bookAuthor=book['author']
    let dateRead=book['Date Read']
    let Title=book['title']
    let bookLength = book['# Pages'] 

    if(bookIsRead===0){
        readBooks++
        if(Number.isInteger(bookLength)){
            if(bookLength>longestBook){
                longestBookTitlenAuthor= (Title + " by "+bookAuthor)
                
                longestBook=bookLength
            }
            else if(bookLength<shortestBook){
                shortestBookTitlenAuthor= (Title + " by "+bookAuthor)
                
                shortestBook=bookLength
            }
        }
    }
    if(readingTime>greatestTimeTaken && readingTime<70){
        greatestTimeTaken=parseInt(book['Time on TBR (years)']);
    }
    
    if(bookAuthor in authorList==false){
        authorList[bookAuthor]= "1";
        
    }
    else{
        authorList[bookAuthor]++
    }
    if((dateRead.includes('November') && dateRead.includes('2022'))){
        mostRecentReads.push(" "+Title)
     }
    
    
    
    
    }
);
delete authorList["Many"]
delete authorList[""]
let mostOwnedAuthor = ""
let mostOwnedAuthorNumBooks=0
for (const [author, numBooks] of Object.entries(authorList)) {
    
    if(parseInt(numBooks)>mostOwnedAuthorNumBooks){
        mostOwnedAuthorNumBooks=parseInt(numBooks)
        mostOwnedAuthor=author
    }
  }
//console.log(authorList)
console.log("the longest book read is "+longestBookTitlenAuthor+ ", and the shortest book read is "+shortestBookTitlenAuthor+".")
console.log("longest time taken:"+ greatestTimeTaken)
console.log("number of books read: "+ readBooks); 
console.log("the most owned author is "+mostOwnedAuthor+ ", with a total of "+ mostOwnedAuthorNumBooks+ " books")
//I totally, knew that one's answer, btw
console.log("the most recent read(s) are/is: "+ mostRecentReads)


// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

