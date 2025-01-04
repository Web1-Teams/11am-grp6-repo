
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase().trim();
  
    // Feature mapping for restaurant filters
const featureMap = {
    park: "park",
    restaurant: "restaurant",
    cafe: "cafe", 
    play:"play-center",
    archaeological:"archaeological-site",
};

const matchedFeature = Object.keys(featureMap).find((feature) =>
    lowerCaseMessage.includes(feature)
);

if (matchedFeature) {
    this.actionProvider.handleRestaurantFilter(featureMap[matchedFeature]);
    return;
}

const personalQuestions = [
    { type: "tell me about visitme website", keywords: [ "about visitme",  "about website","website"] }, 
    { type: "how are you", keywords: ["how are you", "how's it going", "how are you doing","how are u"] },
    { type: "what is your name", keywords: ["what is your name", "who are you", "name", "your name"] },
    { type: "how is the weather", keywords: ["how is the weather", "weather", "weather today", "current weather"] },
    { type: "What are the top 5 tourist attractions in nablus?", keywords: ["tourist", "attractions", "top 5", "places to visit", "must-see", "top sights", "best places", "top attractions in nablus"] }, 
    { type: "Describe nablus", keywords: ["describe nablus", "about nablus", "tell me about nablus", "Nablus description"] }, 
    { type: "What is Nablus famous for?", keywords: ["famous for", "known for", "speciality", "famous in Nablus", "Nablus specialties"] }, 
    { type: "What are some of the main religions practiced in Nablus?", keywords: ["religions", "religion", "beliefs", "religious practices"] }, 
    { type: "What is the best time to visit Nablus?", keywords: ["best time to visit", "when to visit", "best season", "best time", "good time to visit"] },
    { type: "How do I get to Nablus?", keywords: ["get to nablus", "transportation", "reach nablus", "how to reach Nablus", "travel to Nablus"] }, 
    { type: "What is the local currency?", keywords: ["currency", "money", "pay", "local currency", "currency in Nablus"] },
    { type: "Thank you", keywords: ["thank you", "thank","thanks", "appreciate", "thank you very much"] },
    { type: "Goodbye", keywords: ["goodbye", "bye", "see you later", "see you", "later", "have a good day", "take care"] },
    { type: "Can you help me?", keywords: ["help", "assist", "assistance", "need help", "can you help"] }, 
    { type: "I need your help", keywords: ["need your help", "need help", "I need assistance"] },
    { type: "What can you do?", keywords: ["can you do", "capabilities", "features", "what are your abilities", "what do you offer"] },
    { type: "What are you good at?", keywords: ["good at", "expertise", "what are you good at", "your strengths"] },
    { type: "Is there anything else you can do?", keywords: ["anything else", "more", "other things", "more options"] },
    { type: "Do you have any other skills?", keywords: ["other skills", "skills", "other abilities"] },
    { type: "Can you provide more information?", keywords: ["more information", "details", "tell me more", "explain further"] },
    { type: "Have a nice day", keywords: ["have a nice day", "nice day"] }, 
    { type: "Thank you for your help", keywords: ["thank you for your help"] }, 
    { type: "You're very helpful", keywords: ["you're very helpful", "very helpful"] },
    { type: "Have a good one", keywords: ["have a good one", "good one"] }, 
    { type: "Thanks", keywords: ["thanks"] }, 
    { type: "Thanks a lot", keywords: ["thanks a lot"] }, 
    { type: "Appreciate it", keywords: ["appreciate it", "appreciate"] },
    { type: "Are you a robot?", keywords: ["robot", "AI", "artificial intelligence", "are you a bot", "are you an AI"] }, 
    { type: "Do you have feelings?", keywords: ["feelings", "emotions", "have feelings", "experience emotions"] }, 
    { type: "Tell me a joke", keywords: ["joke", "funny", "humor", "tell me a joke", "tell a joke"] }, 
    { type: "Can you tell me a story?", keywords: ["story", "tell me a story", "story time", "can you tell a story"] }, 
    { type: "Do you like Nablus?", keywords: ["like Nablus", "favorite city", "do you like Nablus", "your opinion on Nablus"] } ,
    { type: "How can I log in?", keywords: ["log in", "login", "sign in", "account access", "enter account"] }, 
    { type: "How do I change my password?", keywords: ["change password", "update password", "reset password", "password change"] },
    { type: "How do I contact support?", keywords: ["contact support", "customer support", "help", "get help", "support contact"] },
    { type: "What are the system requirements?", keywords: ["system requirements", "system specs", "compatibility"] },
    { type: "What are your hours of operation?", keywords: ["hours of operation", "business hours", "opening hours", "available hours"] },
    { type: "How can I register?", keywords: ["register", "sign up", "create account", "new account"] }, 
    { type: "Is VisitMe free to use?", keywords: ["free to use", "free", "cost", "pricing", "free or paid"] }, 
    { type: "How can I update my profile?", keywords: ["update profile", "edit profile", "profile settings", "change profile"] },
    { type: "Can I save my favorite places?", keywords: ["save places", "favorites", "bookmark", "save for later"] },
    { type: "What languages does VisitMe support?", keywords: ["languages", "language support", "available languages"] },
    { type: "Is there a mobile app?", keywords: ["mobile app", "app", "download app", "app available"] },
    { type: "What events are happening in Nablus?", keywords: ["events in Nablus", "upcoming events", "Nablus events","events"] },
    { type: "who is Dareen Abu Aisheh", keywords: ["dareen", "who is Dareen", "about Dareen"] },
    { type: "who is Suhad Shaheen", keywords: ["suhad", "who is Suhad", "about Suhad"] },
    { type: "who is Hamza Nasser", keywords: ["hamza nasser", "who is Hamza Nasser", "about Hamza Nasser"] },
    { type: "who is Hamza Zarour", keywords: ["hamza zarour", "who is Hamza Zarour", "about Hamza Zarour"] },
    { type: "who is Remaa Saleh", keywords: ["remaa", "reema","who is Remaa", "about Remaa"] },
    { type: "who is Waseem Qaneer", keywords: ["waseem","wasseem", "who is Waseem", "about Waseem"] },
    { type: "who is Ashour Jarrar", keywords: ["ashour", "who is Ashour", "about Ashour"] },


  ];
  
      const matchedPersonalQuestion = personalQuestions.find((q) =>
        q.keywords.some((keyword) => lowerCaseMessage.includes(keyword))
      );
  
      if (matchedPersonalQuestion) {
        this.actionProvider.handlePersonalQuestion(matchedPersonalQuestion.type);
        return;
      }
  
      const greetings = ["hello", "hi", "hey", "good morning", "good afternoon"];
      if (greetings.some((greet) => lowerCaseMessage.includes(greet))) {
        this.actionProvider.handleGreeting();
        return;
      }
  

      this.actionProvider.handleGeneralQuery(lowerCaseMessage);
    }
  }
  
  export default MessageParser;
  