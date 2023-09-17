import { createSlice } from '@reduxjs/toolkit'
import words from '../data.json'


const wordCount = 50;

const getWords = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const newWords = shuffled.slice(0, num);
  return newWords;
};

  
  export const speedSlice = createSlice({
    name: 'speed',
    initialState:{
        words:getWords(words.words,wordCount),
        writeWord:"",
        correctWords:[],
        wrongWords:[],
        countCorrect:0,
        countWrong:-1,
        index:0,
        time:60,
        start:false,
        tickCount:0,
        language:"TR"

    },
    reducers: {
      getNewWords:(state)=>{
        const newWords=getWords(words.words,wordCount)
        state.words=newWords
        state.correctWords=[]
        state.wrongWords=[]
        state.index=0
      },
        writedWord:(state,action)=>{
         const text=action.payload.trim()
         if(text.length>0){
            state.writeWord=text
            
           
         }
         
        },
        correctWordsFunc:(state,action)=>{
          const objectWord=action.payload
          if(objectWord){
            state.correctWords.push(objectWord)
            state.countCorrect+=1
          }

        },
        wrongWordsFunc:(state,action)=>{
          const objectWord=action.payload
          if(objectWord){
            state.wrongWords.push(objectWord)
            state.countWrong+=1
   
          }
     
        }
        ,
        next:(state)=>{
          state.index+=1
        },
        timeDecrement:(state)=>{
          state.time-=1
          
        },
        startFunc:(state)=>{
          state.start=true

        },
        finishFuc:(state)=>{
          state.start=false

        },
        tickCountFunc:(state)=>{
          state.tickCount+=1

        },
        replay:(state)=>{
          state.words=getWords(words.words,wordCount)
          state.correctWords=[]
          state.wrongWords=[]
          state.tickCount=0
          state.writeWord=""
          state.countCorrect=0
          state.countWrong=-1
          state.index=0
          state.time=60
          state.start=false
          
        },
        setLanguage:(state,action)=>{
          const selectedLanguage=action.payload
          state.language=selectedLanguage

        }
       
       
    },
  })
  
  export const { 
    writedWord,
    correctWordsFunc,
    wrongWordsFunc,
    next,getNewWords,
    timeDecrement,startFunc,
    finishFuc,tickCountFunc,
    replay,
    setLanguage
  } = speedSlice.actions
  
  export default speedSlice.reducer