const msgRef = document.querySelector("#messages")
const fragment = document.createDocumentFragment()

const msg1 = document.createElement("section")
msg1.classList = "message"
msg1.textContent = "Hey! What's up?"

const msg2 = document.createElement("section")
msg2.classList = "message right"
msg2.textContent = "Not much, just relaxing after work, you?"

const msg3 = document.createElement("section")
msg3.classList = "message"
msg3.textContent = "Not much, too lazy to cook tonight, so I ordered pizza."

const msg4 = document.createElement("section")
msg4.classList = "message right"
msg4.textContent = "Where from?"

const msg5 = document.createElement("section")
msg5.classList = "message"
msg5.textContent = "Domino's, it's so bad but I love it."

fragment.appendChild(msg1)
fragment.appendChild(msg2)
fragment.appendChild(msg3)
fragment.appendChild(msg4)
fragment.appendChild(msg5)

msgRef.appendChild(fragment)