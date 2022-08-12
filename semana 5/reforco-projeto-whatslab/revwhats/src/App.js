import React from 'react'

export default function App() {

  return (
    <AppContainer>
    <MessagesContainer>{resultMessageMapping}</MessagesContainer>
    <MessageForm addMessage={addMessage} />
  </AppContainer>
  );
}
