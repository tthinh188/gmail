import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
    selectedSidebarOption: "Inbox",
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
    selectOption: (state, action) => {
      state.selectedSidebarOption = action.payload;
    }
  },
});

export const { selectOption, selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;
export const selectOpenMail = state => state.mail.selectedMail;
export const selectActiveOption = state => state.mail.selectedSidebarOption;

export default mailSlice.reducer;
