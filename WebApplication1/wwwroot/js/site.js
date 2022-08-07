// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
const eventSource = new window.EventSource('/')

eventSource.onmessage = (message) => {
    if (!message || !message.data) return console.error('skipping empty message')
    const live = JSON.parse(message.data, {})
    console.log('sse live visitors', live)
    // in a react component you could update the state
    this.setState({ live })
}