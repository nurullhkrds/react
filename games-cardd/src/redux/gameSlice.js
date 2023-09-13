import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const setCards = () => {
  const newCardList = data.map((card, index) => ({
    ...card,
    id: data.length + (index + 1),
  }));
  return data.concat(newCardList).sort(() => Math.random() - 0.5);
};

export const counterSlice = createSlice({
  name: "game",
  initialState: {
    count: 0,
    data: setCards(),
    newList: [],
    selected: [],
    total:50,
  },
  reducers: {
    openCard: (state, action) => {
      const index = state.data.findIndex((card) => card.id === action.payload);
      state.data[index].active = true;
      state.selected.push(state.data[index]);
    },
    closedCard: (state) => {
      const index1 = state.data.findIndex(
        (select1) => state.selected[0].id === select1.id
      );
      const index2 = state.data.findIndex(
        (select2) => state.selected[1].id === select2.id
      );
      state.data[index1].active = false;
      state.data[index2].active = false;
      state.total -= 10;
      state.selected = [];
    },
    restartSelected: (state) => {
      state.selected = [];
    },
    succesOpenCard: (state) => {
      if (state.selected.length === 2) {
        state.newList.push(state.selected[0]);
        state.newList.push(state.selected[1]);
        state.total += 50;
      }
    },
    restartGame:(state)=>{
      state.data=setCards()
      state.newList=[]
      state.selected=[]
      state.total=100
      


     
    }
  },
});

// Action creators are generated for each case reducer function
export const { openCard, closedCard, restartSelected, succesOpenCard,restartGame } =
  counterSlice.actions;

export default counterSlice.reducer;
