"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    isToday,
} from "date-fns"

import { cn } from "./utils"
import { Button } from "./button"

export function ScratchCalendar({
    selected,
    onSelect,
    disabled,
    className,
}) {
    const [currentMonth, setCurrentMonth] = React.useState(new Date())

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    })

    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

    const handleDayClick = (day) => {
        if (disabled && disabled(day)) return
        onSelect(day)
    }

    return (
        <div className={cn("p-3", className)}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <Button
                    variant="outline"
                    className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-primary/10 hover:text-primary border-primary/20"
                    onClick={prevMonth}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-sm font-semibold text-primary">
                    {format(currentMonth, "MMMM yyyy")}
                </div>
                <Button
                    variant="outline"
                    className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-primary/10 hover:text-primary border-primary/20"
                    onClick={nextMonth}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
                {/* Weekday Headers */}
                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="text-[0.8rem] font-medium text-primary/80 h-9 flex items-center justify-center"
                    >
                        {day}
                    </div>
                ))}

                {/* Days */}
                {calendarDays.map((day, dayIdx) => {
                    const isSelected = selected && isSameDay(day, selected)
                    const isCurrentMonth = isSameMonth(day, monthStart)
                    const isDisabled = disabled ? disabled(day) : false
                    const isDayToday = isToday(day)

                    return (
                        <div key={day.toString()} className="relative p-0">
                            <button
                                type="button"
                                onClick={() => handleDayClick(day)}
                                disabled={isDisabled}
                                className={cn(
                                    "h-9 w-9 p-0 font-normal text-sm rounded-md flex items-center justify-center transition-all",
                                    !isCurrentMonth && "text-muted-foreground opacity-30",
                                    isSelected &&
                                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground shadow-md opacity-100",
                                    !isSelected &&
                                    isCurrentMonth &&
                                    !isDisabled &&
                                    "hover:bg-accent hover:text-accent-foreground",
                                    isDayToday && !isSelected && "bg-accent text-accent-foreground font-bold",
                                    isDisabled && "text-muted-foreground opacity-50 cursor-not-allowed hover:bg-transparent"
                                )}
                            >
                                {format(day, "d")}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
