// Here is the data we will use to populate our component
import panelData from './data/panelData.js'
import { open, close } from './data/constants.js'


// Checking our data
console.log(panelData[1].title)


// 1- Comment out panel from HTML and grab its parent element.
const accordion = document.querySelector('.accordion')


// 2- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({ title, content }) {

  // 3- Instantiate all the elements needed for a panel
  const panel = document.createElement('div')
  const panelBar = document.createElement('div')
  const panelContent = document.createElement('div')
  const panelTitle = document.createElement('h3')
  const panelButtons = document.createElement('div')
  const panelOpenButton = document.createElement('button')
  const panelCloseButton = document.createElement('button')


  // 4- Setup the structure of our elements
  panel.appendChild(panelBar)
  panel.appendChild(panelContent)
  panelBar.appendChild(panelTitle)
  panelBar.appendChild(panelButtons)
  panelButtons.appendChild(panelOpenButton)
  panelButtons.appendChild(panelCloseButton)


  // 5- Add classes to our elements
  panel.classList.add('panel')
  panelBar.classList.add('panel-bar')
  panelButtons.classList.add('panel-buttons')
  panelOpenButton.classList.add('panel-btn-open')
  panelCloseButton.classList.add('panel-btn-close', 'hide-btn')
  panelContent.classList.add('panel-content')


  // 6- Set text content
  panelTitle.textContent = title
  panelContent.textContent = content
  panelOpenButton.textContent = open
  panelCloseButton.textContent = close

  panelButtons.addEventListener('click', event => {
    // 7- When the 'open' or 'close' buttons are clicked, the content is toggled on/off
    //      - the open button needs to go away
    //      - the close button needs to show
    //      - the contents need to show
    panelOpenButton.classList.toggle('hide-btn')
    panelCloseButton.classList.toggle('hide-btn')
    panelContent.classList.toggle('toggle-on')
  })

  return panel
}

// const testPanel = makePanel({ title: 'foo', content: 'bar' })
// accordion.appendChild(testPanel)


// 8- Loop through the panelData in the data folder creating panels for each content and title,
// and append them to the DOM
const panelElements = panelData.map(panelData => makePanel(panelData))

panelElements.forEach(panelElement => {
  accordion.appendChild(panelElement)
})

// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
