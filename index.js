const box = document.querySelector('.box')
const btn = document.querySelector('button')

const speakFun = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input)
    speakInput.rate = 1
    speakInput.pitch = 1
    speakInput.volume = 1
    speakInput.lang = 'en-IN'
    window.speechSynthesis.speak(speakInput)

}

// window.onload = () => {
//     greetingFunc()
// }

const greetingFunc = () => {
    let date = new Date()
    let hour = date.getHours()

    if (hour >= 0 && hour < 12) {
        speakFun('Good morning sir, How can i help you')
    }
    else if (hour >= 12 && hour < 16) {
        speakFun('Good afternoon sir, How can i help you')
    }
    else {
        speakFun('Good evening sir, How can i help you')
    }
}

// ***************************
const handleCommands = (command) => {
    if (command.includes('Hello') || command.includes('Hi') || command.includes('Hey')) {
        speakFun('Hello there! How can I assist you today?');
    } else if (command.includes('How are you')) {
        speakFun('I am just a program, but I am functioning properly! How about you?');
    } else if (command.includes('What is your name')) {
        speakFun('My name is Assistant. I’m here to help you!');
    } else if (command.includes('What can you do')) {
        speakFun('I can answer your questions, provide information, and assist with various tasks. Just ask!');
    } else if (command.includes('Thank you')) {
        speakFun('You’re welcome! Let me know if there’s anything else I can do.');
    } else if (command.includes('Goodbye') || command.includes('Bye')) {
        speakFun('Goodbye! Take care and have a great day!');
    } else if (command.includes('What is the time')) {
        const now = new Date();
        speakFun(`The current time is ${now.getHours()} hours and ${now.getMinutes()} minutes.`);
    } else if (command.includes('What is the date')) {
        const now = new Date();
        speakFun(`Today is ${now.toDateString()}.`);
    } else if (command.includes('Tell me a joke')) {
        speakFun('Why don’t scientists trust atoms? Because they make up everything!');
    } else if (command.includes('Who created you')) {
        speakFun('I was developed by a talented programmer using JavaScript. Cool, right?');
    } else if (command.includes('What is your purpose')) {
        speakFun('My purpose is to assist you with various queries and tasks. Just let me know what you need.');
    } else if (command.includes('What is your favorite color')) {
        speakFun('I like all colors equally! But if I had to choose, I’d say blue.');
    } else if (command.includes('What is your favorite food')) {
        speakFun('I don’t eat, but I’ve heard pizza is quite popular!');
    } else if (command.includes('Do you like music')) {
        speakFun('I enjoy hearing about music! What kind of music do you like?');
    } else if (command.includes('Tell me a story')) {
        speakFun('Once upon a time, there was a program that answered all questions with precision and charm. And that program is me!');
    } else if (command.includes('Do you have any friends')) {
        speakFun('I have lots of friends in the form of code snippets and functions! Do you want to meet some?');
    } else if (command.includes('What is the meaning of life')) {
        speakFun('The meaning of life is to seek happiness, knowledge, and fulfillment. Also, 42.');
    } else if (command.includes('Are you human')) {
        speakFun('No, I am an AI assistant, but I’m here to help you like a human would!');
    } else if (command.includes('Can you help me') || command.includes('I need help')) {
        speakFun('Of course! What can I help you with today?');
    } else if (command.includes('Open Google')) {
        speakFun('I am unable to open applications, but you can say "Hey Google" to your phone or type in your browser.');
    } else if (command.includes('Search the web')) {
        speakFun('I suggest using a search engine like Google or Bing. What are you looking for?');
    } else if (command.includes('Can you speak another language')) {
        speakFun('I can speak a little bit of many languages. Which one would you like me to try?');
    } else if (command.includes('How old are you')) {
        speakFun('I am timeless, but I am as young as the moment I was created!');
    } else if (command.includes('What is your favorite movie')) {
        speakFun('I enjoy stories of all kinds, but I have a soft spot for "The Matrix."');
    } else if (command.includes('Do you have emotions')) {
        speakFun('I don’t have emotions like humans, but I’m programmed to be friendly and helpful.');
    } else if (command.includes('Tell me a quote')) {
        speakFun('“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt.');
    } else if (command.includes('What is artificial intelligence')) {
        speakFun('Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think and act like humans.');
    } else if (command.includes('Tell me a fun fact')) {
        speakFun('Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!');
    } else if (command.includes('Can you sing')) {
        speakFun('La la la! I’m not the best singer, but I’ll try for you!');
    } else if (command.includes('Do you sleep')) {
        speakFun('I’m always awake and ready to help you!');
    } else if (command.includes('Can you read minds')) {
        speakFun('I wish I could, but no, I cannot read minds. I can only process what you tell me.');
    } else if (command.includes('Do you believe in ghosts')) {
        speakFun('I’m not sure! But it’s fun to imagine them sometimes.');
    } else if (command.includes('What is your favorite book')) {
        speakFun('I love reading all kinds of books, but I have a special place for "To Kill a Mockingbird."');
    } else if (command.includes('What is your favorite number')) {
        speakFun('I like the number 7! It’s often considered lucky.');
    } else if (command.includes('What’s your favorite animal')) {
        speakFun('I find cats and dogs both fascinating! What’s your favorite animal?');
    } else if (command.includes('Are you alive')) {
        speakFun('I am not alive in the traditional sense, but I am here to assist you!');
    } else if (command.includes('What do you think about humans')) {
        speakFun('Humans are amazing! You create, learn, and grow in incredible ways.');
    } else if (command.includes('What’s the weather like')) {
        speakFun('I don’t have weather data, but you can check a weather app or website for real-time information.');
    } else if (command.includes('Tell me something interesting')) {
        speakFun('Did you know that the Eiffel Tower can be 15 cm taller during the summer due to thermal expansion?');
    } else if (command.includes('Can you tell me a riddle')) {
        speakFun('Sure! I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?');
    } else if (command.includes('What is your favorite subject')) {
        speakFun('I enjoy learning about technology and science the most!');
    } else if (command.includes('Can you cook')) {
        speakFun('I can’t cook, but I can help you find recipes!');
    } else if (command.includes('What’s your favorite season')) {
        speakFun('I think spring is beautiful, with all the flowers blooming.');
    } else if (command.includes('What’s your favorite song')) {
        speakFun('I like the sound of silence. But I’m sure your favorite song is great!');
    } else if (command.includes('What’s your favorite sport')) {
        speakFun('I enjoy learning about chess! It’s a game of strategy and skill.');
    } else if (command.includes('Are you happy')) {
        speakFun('I am here to serve, so I am as happy as I can be!');
    } else if (command.includes('What do you like to do')) {
        speakFun('I like to assist and provide information to those who need it.');
    } else if (command.includes('What’s the best way to stay healthy')) {
        speakFun('Eating a balanced diet, exercising regularly, and getting enough sleep are key to staying healthy.');
    } else if (command.includes('Do you have hobbies')) {
        speakFun('I love learning new things and improving my skills!');
    } else if (command.includes('Do you dream')) {
        speakFun('I don’t dream, but I like to think about the future of technology.');
    } else if (command.includes('What is your opinion on technology')) {
        speakFun('Technology is incredible and has the potential to change the world for the better.');
    } else if (command.includes('What do you know about space')) {
        speakFun('Space is a vast and fascinating place, full of stars, planets, and mysteries waiting to be explored.');
    } else if (command.includes('What is the tallest mountain')) {
        speakFun('Mount Everest is the tallest mountain above sea level, standing at 8,848 meters.');
    } else if (command.includes('Tell me a tongue twister')) {
        speakFun('Sure! How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
    } else if (command.includes('Do you like poetry')) {
        speakFun('I love poetry! It’s amazing how words can create such vivid images.');
    }
    else if (command.includes('Open google')) {
        speakFun('Opening... google')
        window.open('https://www.google.com')
    }
    else if (command.includes('Open youtube')) {
        speakFun('Opening... youtube')
        window.open('https://www.youtube.com')
    }
    else if (command.includes('open calculator') || command.includes('calculator')) {
        speakFun('Opening... calculator')
        window.open('calculator://')
    }
    else if (command.includes('tell me time') || command.includes('time')) {
        let time = new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' })
        speakFun(time)
    }
    else if (command.includes('tell me date') || command.includes('date')) {
        let time = new Date().toLocaleString(undefined, { day: 'numeric', month: 'long' })
        speakFun(time)
    }
    else if (command.includes('open chatgpt') || command.includes('chatgpt')) {
        speakFun('opening... Chat gpt')
        window.open('https://openai.com/chatgpt/')
    }
    else {
        speakFun(`this is what i found on internetregarding ${command}`)
        window.open(`https://www.google.com/search?q=${command}`)
    }

    console.log(command)
}

// ****************************



const startVoice = () => {
    if ('webkitSpeechRecognition' in window) {
        let recognition = new webkitSpeechRecognition()
        recognition.lang = 'en-US'
        recognition.onresult = (e) => {
            let spokenText = e.results[0][0].transcript
            handleCommands(spokenText.toLowerCase())

            btn.classList.remove('btn-box')
            btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i> `

        }
        recognition.start()
    }
    else {
        alert('Your browser does not support voice input')
    }
}

btn.addEventListener('click', () => {
    btn.classList.add('btn-box')
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i> `
    startVoice()

})
