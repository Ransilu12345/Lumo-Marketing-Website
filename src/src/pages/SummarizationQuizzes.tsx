import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { BookText, FileText, File, Copy, ListChecks, Star, Users, Brain, TrendingUp, DownloadCloud, Clock, CheckCircle, XCircle, HelpCircle, ArrowRight, Award} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

const SummarizationQuizzes = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // seconds
  const [summaryCount, setSummaryCount] = useState(0); // Counter for summarization attempts
  const [error, setError] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the URL contains a hash (e.g., #summarization-section)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const questions = [
    {
      id: 1,
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
      correctAnswer: 1,
      explanation: 'Mitochondria are often referred to as the powerhouse of the cell because they generate most of the cell\'s supply of ATP, used as a source of chemical energy.'
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
      correctAnswer: 2,
      explanation: 'Mars is often called the Red Planet due to the iron oxide prevalent on its surface, which gives it a reddish appearance.'
    },
    {
      id: 3,
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Gd', 'Au', 'Ag'],
      correctAnswer: 2,
      explanation: 'The chemical symbol for gold is Au, which comes from the Latin word "aurum", meaning gold.'
    },
    {
      id: 4,
      question: 'Which of the following is NOT a programming language?',
      options: ['Java', 'Python', 'HTML', 'Oracle'],
      correctAnswer: 3,
      explanation: 'Oracle is a database management system, not a programming language. HTML is a markup language, while Java and Python are programming languages.'
    },
    {
      id: 5,
      question: 'What year did World War II end?',
      options: ['1943', '1945', '1947', '1950'],
      correctAnswer: 1,
      explanation: 'World War II ended in 1945 with the surrender of Germany in May and Japan in September.'
    },
  ];

  const benefits = [
    { id: 1, title: "Save Time", description: "Extract key information from lengthy texts in seconds." },
    { id: 2, title: "Improve Comprehension", description: "Focus on core concepts and main ideas for better understanding." },
    { id: 3, title: "Efficient Review", description: "Quickly revisit important points before exams or presentations." },
    { id: 4, title: "Information Retention", description: "Condensed formats are easier to remember and recall." },
    { id: 5, title: "Active Recall", description: "Strengthen memory by actively retrieving information rather than passively reviewing." },
    { id: 6, title: "Knowledge Assessment", description: "Identify knowledge gaps and areas that need more attention." },
    { id: 7, title: "Exam Preparation", description: "Simulate test conditions to reduce anxiety and improve performance." },
    { id: 8, title: "Immediate Feedback", description: "Learn from mistakes instantly with detailed explanations." }
  ];

  const testimonials = [
    { id: 1, name: "Customer 01", role: "", content: "", rating: 0 },
    { id: 2, name: "Customer 02", role: "", content: "", rating: 0 },
    { id: 3, name: "Customer 03", role: "", content: "", rating: 0 },
    { id: 4, name: "Cutomer 04", role: "", content: "", rating: 0 },
    { id: 5, name: "Customer 05", role: "", content: "", rating:0  },
    { id: 6, name: "Customer 06", role: "", content: "", rating: 0 },
  ];

  const analytics = {
    Processed: 0 ,
    Usage: 0,
    activeUsers: 0,
    userInterest: 0,
  };

  const generateSummary = () => {
    // Check if the user has reached the limit
    if (summaryCount >= 3) {
      setError('Click on this to Try Out PAWS !');
      return;
    }
  
    // Clear any previous error and start loading
    setError('');
    setIsLoading(true);
  
    // Simulate API call or summary generation
    setTimeout(() => {
      setSummary(`This is a concise summary of the text you provided. It contains the main points and key arguments while eliminating unnecessary details.`);
      setSummaryCount((prevCount) => prevCount + 1); // Increment the counter
      setIsLoading(false);
    }, 2000);
  };

  const sampleTexts = [
    { 
      id: 1, 
      title: 'Cell Biology Introduction', 
      icon: BookText,
      preview: 'The cell is the basic structural and functional unit of life...' 
    },
    { 
      id: 2, 
      title: 'French Revolution', 
      icon: FileText,
      preview: 'The French Revolution was a period of radical social and political...' 
    },
    { 
      id: 3, 
      title: 'Quantum Mechanics', 
      icon: File,
      preview: 'Quantum mechanics is a fundamental theory in physics that...' 
    },
  ];  

  
  const handleSampleTextClick = (id: number) => {
    let selectedText = "";
  
    if (id === 1) {
      selectedText = "The cell is the basic structural, functional, and biological unit of all known organisms. Cells are the smallest units of life, and hence are often referred to as the 'building blocks of life'. The study of cells is called cell biology, cellular biology, or cytology.\n\nCells consist of cytoplasm enclosed within a membrane, which contains many biomolecules such as proteins and nucleic acids. Most plant and animal cells are only visible under a microscope, with dimensions between 1 and 100 micrometres. Cells were discovered by Robert Hooke in 1665, who named them for their resemblance to cells inhabited by Christian monks in a monastery.\n\nOrganisms can be classified as unicellular (consisting of a single cell such as bacteria) or multicellular (including plants and animals). The number of cells in plants and animals varies from species to species; it has been estimated that humans contain somewhere around 40 trillion cells. Most plant and animal cells are visible only under a microscope, with dimensions between 1 and 100 micrometres.";
    } else if (id === 2) {
      selectedText = "The French Revolution was a period of radical social and political change in France from 1789 to 1799. It began with the financial crisis and widespread discontent among the lower classes, leading to the storming of the Bastille on July 14, 1789. The revolution abolished the monarchy, established a republic, and saw the rise of radical political groups like the Jacobins.\n\nKey events included the Reign of Terror, during which thousands were executed by guillotine, and the rise of Napoleon Bonaparte, who eventually became the ruler of France. The revolution profoundly influenced the course of modern history, promoting ideas of liberty, equality, and fraternity, and inspiring other revolutionary movements worldwide.";
    } else if (id === 3) {
      selectedText = "Quantum mechanics is a fundamental theory in physics that describes the behavior of matter and energy on the atomic and subatomic scales. It challenges classical physics by introducing concepts such as wave-particle duality, superposition, and entanglement. These principles explain phenomena that cannot be understood through classical mechanics.\n\nThe theory was developed in the early 20th century by scientists like Max Planck, Albert Einstein, Niels Bohr, and Erwin Schrödinger. Quantum mechanics has led to groundbreaking advancements in technology, including semiconductors, lasers, and quantum computing. Despite its success, it raises philosophical questions about the nature of reality and the role of the observer in measurement.";
    }
  
    setText(selectedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
  };

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setTimeRemaining(60);
  };

  const handleViewStatisticsClick = () => {
    setShowMessage(true);
  };

  const handleCheckOut = () => {
    // Redirect to your application
    window.location.href = "https://your-application-url.com"; // Replace with your app's URL
  };

  const handleLater = () => {
    setShowMessage(false);
  };

  return (
    <div id ="summarization-section2" className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Content Summarization & Interactive Quizzes</h1>
              <p>
                Transform lengthy texts into concise, easy-to-review summaries and test your knowledge with interactive quizzes.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Benefits of Smart Summarization & Quiz Generation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                  key={benefit.id} 
                  className={`border-l-4 ${index % 2 === 0 ? 'border-l-green-500' : 'border-l-purple-500'}`}
                  >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                  </Card>
                ))}
              </div>
            </div>


            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Summarization & Quizzes Analytics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h3 className="text-sm font-medium text-gray-500">Processed</h3>
                    <p className="text-2xl font-bold">{analytics.Processed}M</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Brain className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h3 className="text-sm font-medium text-gray-500">Usage</h3>
                    <p className="text-2xl font-bold">{analytics.Usage}M</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h3 className="text-sm font-medium text-gray-500">User Interest</h3>
                    <p className="text-2xl font-bold">{analytics.userInterest}%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
                    <p className="text-2xl font-bold">{analytics.activeUsers.toLocaleString()}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">User Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={testimonial.id} 
                  className={`border-l-4 ${index % 2 === 0 ? 'border-l-green-500' : 'border-l-purple-500'}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center font-bold mr-3">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  ))}
              </div>
            </div>
            

            <h2 className="text-2xl font-semibold mb-6 text-center">See It in Action</h2>

            
            <div id="summarization-section" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {sampleTexts.map((item) => (
              <Card 
                key={item.id} 
                className="cursor-pointer hover:shadow-md transition"
                onClick={() => handleSampleTextClick(item.id)}
              >
                <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-[#111827] text-white flex items-center justify-center mr-3">
                  {React.createElement(item.icon, { size: 20 })}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{item.preview}</p>
                </CardContent>
              </Card>
              ))}
            </div>
            
            <Card className="mb-8">
              <CardHeader>
              <CardTitle>Input Text</CardTitle>
              <CardDescription>
                Paste the text you want to summarize or click on one of the sample texts above
              </CardDescription>
              </CardHeader>
              <CardContent>
              <textarea
                className="w-full h-48 p-4 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Try out above samples..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (error) setError(''); // Clear the error message when the user types
                }}
              />
              </CardContent>
              <CardFooter className="flex justify-end">
              <Button
                onClick={generateSummary}
                disabled={!text.trim() || isLoading} // Button remains clickable
                className={`bg-[#111827] text-white hover:bg-[#1f2937]`}
              >
                {isLoading ? 'Generating...' : 'Generate Summary'}
              </Button>
              </CardFooter>


                {error && (
                <a 
                href="#" 
                onClick={handleViewStatisticsClick} 
                className="mb-4 text-center text-red-500 font-medium flex justify-center"
                >
                {error}
                </a>
                )}
            </Card>
            
            {summary && (
              <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                <CardTitle>Summary</CardTitle>
                <div className="flex space-x-2">
                  <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyToClipboard}
                  >
                  <Copy className="h-4 w-4 mr-2" /> Copy
                  </Button>
                  <Button 
                  variant="outline" 
                  size="sm"
                  >
                  <DownloadCloud className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 border rounded-md bg-gray-50">
                <p className="whitespace-pre-line">{summary}</p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center text-sm text-gray-500">
                <ListChecks className="h-4 w-4 mr-2" /> 
                Original text: {text.length} characters | Summary: {summary.length} characters ({Math.round((summary.length / text.length) * 100)}% of original)
                </div>
              </CardFooter>
              </Card>
            )}




            <div id="quiz-section" className="mb-8 mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Try This Quiz!</h2>

              {!quizCompleted ? (
              <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                    <CardTitle>General Knowledge Quiz</CardTitle>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</span>
                    </div>
                    </div>
                  <CardDescription>
                    Question {currentQuestion + 1} of {questions.length}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">
                      {questions[currentQuestion].question}
                    </h3>
                    
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className={`w-full p-4 text-left rounded-lg border transition ${
                            selectedAnswer === index
                              ? selectedAnswer === questions[currentQuestion].correctAnswer
                                ? 'bg-green-50 border-green-300'
                                : 'bg-red-50 border-red-300'
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={() => handleAnswerClick(index)}
                          disabled={isAnswered}
                        >
                          <div className="flex justify-between items-center">
                            <span>{option}</span>
                            {isAnswered && selectedAnswer === index && (
                              selectedAnswer === questions[currentQuestion].correctAnswer ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-500" />
                              )
                            )}
                            {isAnswered && selectedAnswer !== index && index === questions[currentQuestion].correctAnswer && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {isAnswered && (
                    <div className={`p-4 rounded-lg ${
                      selectedAnswer === questions[currentQuestion].correctAnswer 
                        ? 'bg-green-50 border border-green-100' 
                        : 'bg-red-50 border border-red-100'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <HelpCircle className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">
                            {selectedAnswer === questions[currentQuestion].correctAnswer 
                              ? 'Correct!' 
                              : 'Incorrect'}
                          </p>
                          <p className="text-sm text-gray-700">
                            {questions[currentQuestion].explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-gray-500">
                    Score: {score}/{currentQuestion + (isAnswered ? 1 : 0)}
                  </div>
                  {isAnswered && (
                    <Button 
                      onClick={handleNextQuestion}
                      className="bg-[#111827] text-white hover:bg-[#1f2937]"
                    >
                      {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Quiz Results</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-[#111827] text-white text-3xl font-bold mb-4">
                      {score}/{questions.length}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {score === questions.length 
                        ? 'Perfect Score!' 
                        : score >= questions.length / 2 
                          ? 'Good Job!' 
                          : 'Keep Learning!'}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      You answered {score} out of {questions.length} questions correctly.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 mr-2 text-gray-500" />
                        <h4 className="font-medium">Time Spent</h4>
                      </div>
                      <p className="text-2xl font-bold">3:25</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 mr-2 text-gray-500" />
                        <h4 className="font-medium">Achievement</h4>
                      </div>
                      <p className="text-2xl font-bold">{score === questions.length ? 'Gold Star' : 'Silver Star'}</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={restartQuiz}
                    className="bg-[#111827] text-white hover:bg-[#1f2937]"
                  >
                    Try Again
                  </Button>
                </CardContent>
                
                <CardFooter className="justify-center">
                  <div
                    className="flex items-center text-sm text-gray-500 cursor-pointer hover:text-gray-700"
                    onClick={handleViewStatisticsClick}>
                    View all quiz statistics
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>
          </div>
        </div>
      </main>
      
      <Footer />

      {/* Conditional Message */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Check out our application!</h3>
            <p className="text-gray-600 mb-6">Explore more features and enhance your learning experience.</p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={handleCheckOut}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Check out!
              </Button>
              <Button
                onClick={handleLater}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Later
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummarizationQuizzes;