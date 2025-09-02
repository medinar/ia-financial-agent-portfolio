import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickResponses = [
  "What types of insurance do you offer?",
  "How do I get a quote?",
  "What's included in home insurance?",
  "Do you offer group benefits?",
  "How do I file a claim?"
];

const botResponses: Record<string, string> = {
  "hello": "Hi there! I'm here to help you with any questions about insurance. How can I assist you today?",
  "quote": "I'd be happy to help you get a quote! You can click 'Get a Free Quote' on our homepage, or I can connect you with Sarah Mitchell for a personalized consultation. What type of insurance are you interested in?",
  "types": "We offer several types of insurance: Life Insurance, Health & Disability, Home & Auto Insurance, Group & Business Insurance, and Retirement Planning. Which one interests you most?",
  "home": "Home insurance typically covers your dwelling, personal property, liability protection, and additional living expenses. In BC, you might also want to consider earthquake and flood coverage. Would you like to schedule a consultation to discuss your specific needs?",
  "auto": "Auto insurance in BC includes basic coverage through ICBC, but you can enhance your protection with additional coverage like comprehensive, collision, and increased liability limits. I can help you find the right additional coverage.",
  "life": "Life insurance provides financial protection for your loved ones. We offer both term life (temporary coverage) and permanent life insurance (lifelong coverage with investment component). The right choice depends on your specific situation and goals.",
  "group": "Yes! We provide group insurance solutions for businesses, including employee health benefits, dental coverage, disability insurance, and group life insurance. This can be a great way to attract and retain talent.",
  "claim": "To file a claim, contact your insurance provider directly using the number on your policy documents. For IA Financial Group policies, I can provide you with the claims contact information. Do you need immediate assistance with a claim?",
  "contact": "You can reach Sarah Mitchell at (555) 123-4567 or sarah.mitchell@ia.ca. Her office is located at 789 West Georgia Street, Suite 1200, Vancouver, BC. You can also book an appointment online!",
  "default": "I'm here to help with insurance questions! You can ask me about our services, how to get quotes, or general insurance information. For detailed discussions, I'd recommend booking a consultation with Sarah Mitchell."
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your virtual insurance assistant. I can help answer questions about our services, get you connected with Sarah, or help you book an appointment. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("hello") || message.includes("hi")) {
      return botResponses.hello;
    } else if (message.includes("quote") || message.includes("price") || message.includes("cost")) {
      return botResponses.quote;
    } else if (message.includes("types") || message.includes("what") && message.includes("offer")) {
      return botResponses.types;
    } else if (message.includes("home")) {
      return botResponses.home;
    } else if (message.includes("auto") || message.includes("car")) {
      return botResponses.auto;
    } else if (message.includes("life")) {
      return botResponses.life;
    } else if (message.includes("group") || message.includes("business")) {
      return botResponses.group;
    } else if (message.includes("claim")) {
      return botResponses.claim;
    } else if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
      return botResponses.contact;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickResponse = (response: string) => {
    handleSendMessage(response);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-xl z-50 flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-sm">Insurance Assistant</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-full px-4">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    message.sender === "user" ? "bg-blue-600" : "bg-gray-200"
                  }`}>
                    {message.sender === "user" ? (
                      <User className="w-3 h-3 text-white" />
                    ) : (
                      <Bot className="w-3 h-3 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="w-3 h-3 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs text-gray-500 px-4">Quick questions:</p>
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickResponse(response)}
                  className="w-full text-xs text-left justify-start h-auto py-2 px-3"
                >
                  {response}
                </Button>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-3">
        <div className="flex w-full gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
            className="flex-1 text-sm"
          />
          <Button
            onClick={() => handleSendMessage(inputValue)}
            size="icon"
            className="h-9 w-9"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}