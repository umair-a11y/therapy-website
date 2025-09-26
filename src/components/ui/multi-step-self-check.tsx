"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: string
  text: string
  options: {
    value: string | number
    label: string
  }[]
}

interface AssessmentProps {
  title: string
  description?: string
  questions: Question[]
  onComplete: (answers: Record<string, string | number>) => void
  resultComponent?: React.ReactNode
}

export function MultiStepAssessment({
  title,
  description,
  questions,
  onComplete,
  resultComponent
}: AssessmentProps) {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [answers, setAnswers] = React.useState<Record<string, string | number>>({})
  const [showResults, setShowResults] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState<string>("")

  const progress = ((currentStep + 1) / questions.length) * 100

  const handleNext = () => {
    if (selectedValue) {
      const newAnswers = { ...answers, [questions[currentStep].id]: selectedValue }
      setAnswers(newAnswers)

      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1)
        setSelectedValue(answers[questions[currentStep + 1]?.id]?.toString() || "")
      } else {
        onComplete(newAnswers)
        setShowResults(true)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setSelectedValue(answers[questions[currentStep - 1]?.id]?.toString() || "")
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
    setSelectedValue("")
  }

  if (showResults && resultComponent) {
    return (
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {resultComponent}
            <div className="mt-6 flex justify-center">
              <Button
                onClick={handleRestart}
                variant="outline"
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Take Assessment Again
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-therapeutic-primary/20">
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-therapeutic-dark">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="text-therapeutic-muted">
                {description}
              </CardDescription>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-therapeutic-muted">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2 bg-therapeutic-light">
              <div
                className="h-full bg-gradient-to-r from-therapeutic-primary to-therapeutic-secondary transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </Progress>
          </div>
        </CardHeader>

        <CardContent className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-therapeutic-dark leading-relaxed">
                {questions[currentStep].text}
              </h3>

              <RadioGroup
                value={selectedValue}
                onValueChange={setSelectedValue}
                className="space-y-3"
              >
                {questions[currentStep].options.map((option, index) => (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Label
                      htmlFor={`option-${option.value}`}
                      className={cn(
                        "flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200",
                        selectedValue === option.value.toString()
                          ? "border-therapeutic-primary bg-therapeutic-primary/5"
                          : "border-gray-200 hover:border-therapeutic-primary/50 hover:bg-gray-50"
                      )}
                    >
                      <RadioGroupItem
                        value={option.value.toString()}
                        id={`option-${option.value}`}
                        className="border-therapeutic-primary data-[state=checked]:bg-therapeutic-primary data-[state=checked]:border-therapeutic-primary"
                      />
                      <span className="ml-3 text-therapeutic-dark">
                        {option.label}
                      </span>
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </motion.div>
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === currentStep
                    ? "bg-therapeutic-primary w-6"
                    : index < currentStep
                    ? "bg-therapeutic-primary/60"
                    : "bg-gray-300"
                )}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!selectedValue}
            className="gap-2 bg-therapeutic-primary hover:bg-therapeutic-primary/90"
          >
            {currentStep === questions.length - 1 ? (
              <>
                Complete
                <CheckCircle2 className="h-4 w-4" />
              </>
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}