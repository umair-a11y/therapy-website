"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, ArrowLeft, Heart, Brain, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import SelfCheckResults from "./self-check-results"

// Resolve Men's Therapy brand colors

interface Question {
  id: string
  question: string
  options: {
    text: string
    value: number
  }[]
}

const questions: Question[] = [
  {
    id: "mood",
    question: "How would you describe your overall mood over the past two weeks?",
    options: [
      { text: "Very positive and uplifted", value: 1 },
      { text: "Generally good with some ups and downs", value: 2 },
      { text: "Neutral, neither particularly good nor bad", value: 3 },
      { text: "Often low or down", value: 4 },
      { text: "Consistently very low or depressed", value: 5 },
    ],
  },
  {
    id: "energy",
    question: "How has your energy level been recently?",
    options: [
      { text: "High energy, feeling very motivated", value: 1 },
      { text: "Good energy most days", value: 2 },
      { text: "Average energy, some good and bad days", value: 3 },
      { text: "Often feeling tired or drained", value: 4 },
      { text: "Consistently low energy or exhausted", value: 5 },
    ],
  },
  {
    id: "sleep",
    question: "How would you rate your sleep quality?",
    options: [
      { text: "Very good - sleeping well and feeling rested", value: 1 },
      { text: "Good - mostly sleeping well", value: 2 },
      { text: "Fair - some nights better than others", value: 3 },
      { text: "Poor - often having trouble sleeping", value: 4 },
      { text: "Very poor - consistently poor sleep", value: 5 },
    ],
  },
  {
    id: "stress",
    question: "How well are you managing stress in your daily life?",
    options: [
      { text: "Very well - I feel in control", value: 1 },
      { text: "Well - I have good coping strategies", value: 2 },
      { text: "Moderately - some days better than others", value: 3 },
      { text: "Poorly - often feeling overwhelmed", value: 4 },
      { text: "Very poorly - stress feels unmanageable", value: 5 },
    ],
  },
  {
    id: "relationships",
    question: "How satisfied are you with your relationships and social connections?",
    options: [
      { text: "Very satisfied - strong, supportive relationships", value: 1 },
      { text: "Satisfied - good connections with others", value: 2 },
      { text: "Somewhat satisfied - mixed experiences", value: 3 },
      { text: "Unsatisfied - struggling with relationships", value: 4 },
      { text: "Very unsatisfied - feeling isolated or disconnected", value: 5 },
    ],
  },
  {
    id: "focus",
    question: "How is your ability to concentrate and focus?",
    options: [
      { text: "Very good - very focused and productive", value: 1 },
      { text: "Good - able to concentrate most of the time", value: 2 },
      { text: "Fair - sometimes distracted but manageable", value: 3 },
      { text: "Poor - often having trouble focusing", value: 4 },
      { text: "Very poor - consistently unable to concentrate", value: 5 },
    ],
  },
]

export default function MentalHealthSelfCheck() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  const progress = ((currentStep + 1) / questions.length) * 100
  const currentQuestion = questions[currentStep]

  const handleOptionSelect = (value: number) => {
    setSelectedOption(value)
  }

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: selectedOption,
      }))

      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        setIsComplete(true)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      setSelectedOption(answers[questions[currentStep - 1].id] || null)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setSelectedOption(null)
    setIsComplete(false)
  }

  if (isComplete) {
    return <SelfCheckResults answers={answers} onRestart={handleRestart} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 rounded-full bg-resolve-forest/10">
              <Brain className="h-8 w-8 text-resolve-forest" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-balance text-foreground">Mental Health Self-Check</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-lg mx-auto">
            Take a moment to reflect on your mental wellbeing. This educational self-check helps you understand your current state.
          </p>
          <p className="text-sm text-muted-foreground/70 italic">
            Educational only. Not a clinical assessment or diagnosis.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              Question {currentStep + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-resolve-sage/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-resolve-forest to-resolve-compass transition-all duration-700 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card
          className="border-0 shadow-lg bg-card/80 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge
                variant="secondary"
                className="bg-resolve-sage/20 text-resolve-forest border-resolve-forest/20"
              >
                Step {currentStep + 1}
              </Badge>
            </div>
            <CardTitle className="text-xl font-medium text-balance leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Choose the option that best describes your experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option.value)}
                className={cn(
                  "w-full p-6 text-left rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-md",
                  "focus:outline-none focus:ring-2 focus:ring-resolve-forest/50 focus:border-resolve-forest",
                  selectedOption === option.value
                    ? "border-resolve-forest bg-resolve-forest/5 shadow-md"
                    : "border-border bg-card hover:border-resolve-forest/30 hover:bg-resolve-sage/10",
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                      selectedOption === option.value
                        ? "border-resolve-forest bg-resolve-forest"
                        : "border-muted-foreground/30",
                    )}
                  >
                    {selectedOption === option.value && <CheckCircle className="h-4 w-4 text-white" />}
                  </div>
                  <span className="text-base leading-relaxed text-foreground">{option.text}</span>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center gap-2 bg-card/50 border-resolve-sage/30 hover:bg-resolve-sage/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-resolve-forest" />
            <span>Take your time</span>
          </div>

          <Button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="flex items-center gap-2 bg-resolve-forest hover:bg-resolve-forest-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {currentStep === questions.length - 1 ? (
              <>
                Complete
                <Sparkles className="h-4 w-4" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}