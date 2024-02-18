let currentQuestion = 0

let questions = [
  {
    question: 'The script tag must be placed in?',
    options: [
      'The head tag',
      'The title or head',
      'The head or body',
      'After the body tag',
    ],
    answer: 'the head or body',
  },
  {
    question: 'What is the purpose of the HTML <aside> element?',
    options: [
      'To define additional information that is tangentially related to the content around it',
      'To create a section heading',
      'To insert an image',
      'To define a navigation menu',
    ],
    answer:
      'To define additional information that is tangentially related to the content around it',
  },
  {
    question:
      'What does the HTML attribute target="_blank" do when used in a hyperlink?',
    options: [
      'Opens the linked page in a new tab or window',
      'Makes the hyperlink bold',
      'Underlines the linked text',
      'Adds a background color to the linked text',
    ],
    answer: 'Opens the linked page in a new tab or window',
  },
  {
    question:
      'What is the purpose of the charset="utf-8" attribute in an HTML document?',
    options: [
      'It specifies the background color of the document',
      'It defines the character encoding for the document, indicating the use of UTF-8',
      'It sets the font size for the entire document',
      'It determines the documents language',
    ],
    answer:
      'It defines the character encoding for the document, indicating the use of UTF-8.',
  },
  {
    question: 'What does the CSS property margin: 0 auto; do?',
    options: [
      'Adds zero margin to all sides',
      'Centers an element horizontally',
      'Centers an element vertically',
      'Removes the element from the layout',
    ],
    answer: 'Centers an element horizontally',
  },
  {
    question:
      'Which CSS property is used to create a drop shadow for an element?',
    options: ['box-shadow', 'text-shadow', 'shadow-effect', 'drop-shadow'],
    answer: 'box-shadow',
  },
  {
    question: 'Which of the following is an inline element in CSS?',
    options: ['span', 'div', 'strong', 'h1'],
    answer: 'span',
  },
  {
    question: 'In CSS, what does the position: absolute; property do?',
    options: [
      'Positions the element relative to its normal position',
      'Removes the element from the document flow',
      'Centers the element horizontally and vertically',
      'Positions the element relative to the browser window',
    ],
    answer: 'Positions the element relative to its normal position',
  },
  {
    question: 'What does the === operator do in JavaScript?',
    options: [
      ' Compares values for equality without type conversion',
      'Assigns a value to a variable',
      'Compares values for equality with type conversion',
      'Checks if a variable is undefined',
    ],
    answer: 'Compares values for equality without type conversion',
  },
  {
    question: 'In CSS, what does the z-index property control?',
    options: [
      'The opacity of an element',
      'The stacking order of elements',
      'The spacing between elements ',
      'The rotation of an element',
    ],
    answer: 'The stacking order of elements',
  },
  {
    question: 'What is the purpose of the localStorage object in JavaScript?',
    options: [
      'To store data permanently on the server',
      'To store data temporarily on the client side',
      'To manage local network connections',
      'To handle server-side authentication',
    ],
    answer: 'To store data temporarily on the client side',
  },
  {
    question: 'The URL property belongs to which of the following object?',
    options: ['Document', 'Location', 'Element', 'Event'],
    answer: 'Document',
  },
  {
    question:
      'Which function is used to convert a string to an integer in JavaScript?',
    options: ['parseInt()', 'convertInt()', 'toFloat()', 'stringToNumber()'],
    answer: 'parseInt()',
  },
  {
    question:
      'Which method is used to remove the last element from an array in JavaScript?',
    options: ['pop()', 'delete()', 'remove()', 'last()'],
    answer: 'pop()',
  },
  {
    question: 'What is the purpose of the JavaScript fetch API?',
    options: [
      'Sends HTTP requests and receives responses',
      'Manages local storage',
      'Animates elements on the webpage ',
      'Handles user authentication',
    ],
    answer: 'Sends HTTP requests and receives responses',
  },
]
let answers = []
let count = 0
function displayQuestion() {
  const quiz = document.getElementById('quiz')
  quiz.innerHTML = ''
  const currentQuestionObj = questions[currentQuestion]
  const questionDiv = document.createElement('div')

  questionDiv.classList.add('question-container')
  questionDiv.innerHTML = `
          <div class="question">
              <p> Question of ${currentQuestion + 1} to ${questions.length}</p>
              <h2>${currentQuestionObj.question}</h2>
              <button id="nextButton" onclick="nextQuestion()">Next</button>
          </div>
          <div class="options">
              ${currentQuestionObj.options
                .map(
                  (option) => `
                  <div class="option" onclick="selectOption('${option}')">${option}</div>
              `
                )
                .join('')}
          </div>
      `
  quiz.appendChild(questionDiv)
  document.getElementById('nextButton').disabled = true
}

function selectOption(option) {
  document.getElementById('nextButton').disabled = false
  // Deselect all options
  document.querySelectorAll('.option').forEach(function (element) {
    element.classList.remove('selected')
  })
  // Select the clicked option
  event.target.classList.add('selected')
}
let selectedOption = document.querySelectorAll('.option')
// console.log('selectedOption', selectedOption)

function nextQuestion() {
  let selectedOption = document.querySelector('.option.selected')

  if (selectedOption) {
    let selectedAnswer = selectedOption.innerText.trim()
    let currentQuestionObj = questions[currentQuestion]
    if (selectedAnswer === currentQuestionObj.answer) {
      count++
    }
    answers.push(selectedOption.innerText.trim())
  }
  currentQuestion++
  if (currentQuestion >= questions.length) {
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'
    currentQuestion = 0 // Reset back to the first question
    //console.log('Answers:', answers) // Output answers to console
    //console.log('Correctly selected answers:', count)
    document.getElementById('score').innerHTML = count
    answers = [] // Reset answers array
  }
  displayQuestion()
  document.getElementById('nextButton').disabled = true
}

// Initial display
displayQuestion()
const modal = document.getElementById('myModal')
let modalClose = document.getElementsByClassName('close')[0]
modalClose.onclick = function () {
  modal.style.display = 'none'
}

const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('click', function () {
  if (checkbox.checked) {
    document.body.style.backgroundColor = '#333'
    document.body.style.color = 'white'
  } else {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
})
