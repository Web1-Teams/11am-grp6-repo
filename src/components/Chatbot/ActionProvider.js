import restaurantData from "../Chatbot/Data";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  handleRestaurantFilter(feature) {
    if (!Array.isArray(restaurantData)) {
        console.error("restaurantData is not an array:", restaurantData);
        return;
    }
    const filteredRestaurants = restaurantData.filter(
        (restaurant) => restaurant.Category.toLowerCase() === feature.toLowerCase()
    );

    let message;
    if (filteredRestaurants.length > 0) {
        message = this.createChatBotMessage(
            `Here are some places that match your request for "${feature}":\n\n` +
          
            filteredRestaurants.map(
                (restaurant) =>
                    `🔹 ${restaurant.Name}\n` +
                    `\n📍 Location: ${restaurant.Locationname}\n` +
                    `\n⭐ Rating: ${restaurant.Rating}\n` +
                    `\n📝 Description: ${restaurant.Description}\n` +
                    `\n🚗 Parking: ${restaurant.Haveaparking ? 'Available' : 'Not Available'}\n` +
                    `\n✅ Visited: ${restaurant.Ischeckclicked ? 'Yes' : 'No'}\n` +
                    `\n ❤️ Favourite: ${restaurant.Isheartclicked ? 'Yes' : 'No'}\n`+
                    '----------------------------------------------'
            ).join("\n\n")
        );
    } else {
        message = this.createChatBotMessage(
            "Sorry, I couldn't find any places matching your criteria."
        );
    }

    this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
    }));
}
  

 
  handleGreeting() {
    const message = this.createChatBotMessage("Hello! How can I assist you today?🤖😊");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handlePersonalQuestion(questionType) {
    let message;
    switch (questionType) {
        case "how are you":
            message = this.createChatBotMessage("I'm just a bot, but I'm here to help you! 🤖😊");
            break;
        case "what is your name":
            message = this.createChatBotMessage("I'm VisitMe ChatBot, your virtual assistant. 🤖");
            break;
        case "how is the weather":
            message = this.createChatBotMessage("I can't check the weather right now, but you can try the weather app on the VisitMe website! 🌤️");
            break;
        case "tell me about visitme website":
            message = this.createChatBotMessage("Hello! I'm VisitMeBot, your virtual guide to exploring the wonders of Nablus. 🗺️ We're a team of seven passionate locals: Dareen Abu Aisheh, Suhad Shaheen, Hamza Nasser, Hamza Zarour, Remaa Saleh, Wasseem Qaneer, and Ashour Jarrar. We've created this website to help you discover the hidden gems and must-visit spots in our beautiful city. Whether you're a tourist, an expat, or simply looking for something new to do, we're here to help you make every moment unforgettable. Let's find your next adventure! 🌍");
            break;
        case "What are the top 5 tourist attractions in nablus?":
            message = this.createChatBotMessage("1. The Old City: Explore the historic heart of Nablus with its narrow alleyways, vibrant souks (markets), and ancient architecture. 🏙️\n2. Mount Gerizim: Visit the holy mountain sacred to Samaritans, offering stunning panoramic views of the city. ⛰️\n3. Jacob's Well: A significant biblical site, this well is believed to be where Jacob met his son Joseph. 💧\n4. Sebastia: Explore the ancient Roman city of Sebastia, located just outside Nablus, with its impressive ruins. 🏛️\n5. Kanafeh Shops: Indulge in the local specialty, Knafeh, a sweet cheese pastry, at one of the many famous Knafeh shops. 🍰");
            break;
        case "Describe nablus":
            message = this.createChatBotMessage("Nablus is a major Palestinian city in the West Bank, known for its rich history, vibrant culture, and delicious cuisine. It's nestled between Mount Ebal and Mount Gerizim and boasts a captivating Old City filled with historical sites. 🌆");
            break;
        case "What is Nablus famous for?":
            message = this.createChatBotMessage("Nablus is famous for its production of olive oil and its delicious cuisine, especially Knafeh. 🍽️");
            break;
        case "What are some of the main religions practiced in Nablus?":
            message = this.createChatBotMessage("Islam is the dominant religion in Nablus, but there is also a significant Christian community, particularly Greek Orthodox. ⛪🕌");
            break;
        case "What is the best time to visit Nablus?":
            message = this.createChatBotMessage("Spring and autumn are generally considered the most pleasant times to visit Nablus. 🌸🍂");
            break;
        case "How do I get to Nablus?":
            message = this.createChatBotMessage("You can reach Nablus by bus or taxi from other major cities in the West Bank. 🚕🚌");
            break;
        case "What is the local currency?":
            message = this.createChatBotMessage("The official currency in the Palestinian Territories is the Israeli New Shekel (NIS). 💵");
            break;
        case "Thank you":
            message = this.createChatBotMessage("You're welcome! Feel free to ask anything. 😊");
            break;
        case "Goodbye":
            message = this.createChatBotMessage("Goodbye! 👋");
            break;
        case "Bye":
            message = this.createChatBotMessage("Goodbye! 👋");
            break;
        case "Have a nice day":
            message = this.createChatBotMessage("You too! Have a wonderful day. 🌞");
            break;
        case "Thank you for your help":
            message = this.createChatBotMessage("You're very welcome! I'm here to assist you. 🤗");
            break;
        case "You're very helpful":
            message = this.createChatBotMessage("I'm glad I could be of assistance. 😊");
            break;
        case "Have a good one": 
            message = this.createChatBotMessage("You too! Have a great day. 🌟");
            break;
        case "Thanks":
            message = this.createChatBotMessage("You're welcome! 😊");
            break;
        case "Thanks a lot":
            message = this.createChatBotMessage("You're very welcome! 🙏");
            break;
        case "Appreciate it":
            message = this.createChatBotMessage("You're welcome! I'm here to help. 👍");
            break;
        case "Can you help me?":
            message = this.createChatBotMessage("I'm here to assist you! How can I help you today? 🤖💬");
            break;
        case "I need your help":
            message = this.createChatBotMessage("I'm here to help! Please let me know how I can assist you. 🤝");
            break;
        case "What can you do?":
            message = this.createChatBotMessage("I can answer your questions about Nablus, provide information on local attractions, and help you plan your visit. I can also answer general questions and provide basic information. 🗺️🤖");
            break;
        case "What are you good at?":
            message = this.createChatBotMessage("I'm good at providing information about Nablus, its attractions, and local tips. I can also answer general questions and provide basic information. 🌍");
            break;
            case "Are you a robot?":
                message = this.createChatBotMessage("That's a perceptive question! I am an AI, but I'm always learning and improving. 🤖");
                break;
            case "Do you have feelings?":
                message = this.createChatBotMessage("As an AI, I don't experience emotions in the same way humans do. But I can process and understand information related to emotions. 😊");
                break;
            case "Tell me a joke":
                message = this.createChatBotMessage("Why don't scientists trust atoms? Because they make up everything! 😜"); 
                break;
            case "Can you tell me a story?":
                message = this.createChatBotMessage("Once upon a time, in the heart of Nablus, there was a small coffee shop... ☕ Let me know if you'd like to hear more!");
                break;
            case "Do you like Nablus?":
                message = this.createChatBotMessage("I don't have personal preferences, but I find Nablus to be a fascinating city with a rich history and culture. 🏛️");
                break;
                case "How can I log in?":
                    message = this.createChatBotMessage("🔐 You can log in by entering your username and password on the login page.");
                    break;
                case "How do I change my password?":
                    message = this.createChatBotMessage("🔑 You can change your password in your account settings. Look for an option like 'Change Password' or 'Update Password'.");
                    break;
                case "How do I contact support?":
                    message = this.createChatBotMessage("📞 You can contact support by clicking on the 'Contact Us' or 'Help' link on the website, or by sending an email to [support email address].");
                    break;
                case "What are the system requirements?":
                    message = this.createChatBotMessage("💻 Check the system requirements on the website or in the help section. They often include details about compatible browsers and operating systems.");
                    break;
                case "What are your hours of operation?":
                    message = this.createChatBotMessage("⏰ You can find our hours of operation on the website or by contacting customer support.");
                    break;
                case "How can I register?":
                    message = this.createChatBotMessage("📝 You can register by clicking on the 'Sign Up' button on the homepage and filling out the required details.");
                    break;
                case "Is VisitMe free to use?":
                    message = this.createChatBotMessage("💸 Yes, VisitMe is completely free to use! Explore and enjoy your journey with us.");
                    break;
                case "How can I update my profile?":
                    message = this.createChatBotMessage("🖊️ You can update your profile by navigating to the 'Profile' section after logging in and making changes to your details.");
                    break;
                case "Can I save my favorite places?":
                    message = this.createChatBotMessage("⭐ Absolutely! Log in to your account and use the 'Add to Favorites' button on any place you like.");
                    break;
                case "What languages does VisitMe support?":
                    message = this.createChatBotMessage("🌐 Currently, VisitMe supports English , with more languages coming soon!");
                    break;
                case "Is there a mobile app?":
                    message = this.createChatBotMessage("📱 We're working on a VisitMe mobile app! Stay tuned for updates.");
                    break;
                default:
                    message = this.createChatBotMessage("🤔 I'm here to help! Ask me anything about VisitMe or Nablus.");
                    break;
    }
    
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    
  }
  handleGeneralQuery(query) {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. Can you please rephrase your question?"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
 

}

export default ActionProvider;
