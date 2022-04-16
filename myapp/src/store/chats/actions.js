export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (newCaht)=> ({
    type: ADD_CHAT,
    payload: newCaht
});

export const deleteChat = (idToDelete)=> ({
    type: DELETE_CHAT,
    payload: idToDelete
});