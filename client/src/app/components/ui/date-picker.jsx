"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "./utils"
import { Button } from "./button"
import { ScratchCalendar } from "./scratch-calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"

export function DatePicker({ date, setDate, className, placeholder = "Pick a date", ...props }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-between text-left font-normal",
                        !date && "text-muted-foreground",
                        className
                    )}
                >
                    {date ? format(date, "dd/MM/yyyy") : <span>{placeholder}</span>}
                    <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 glass" align="start">
                <ScratchCalendar
                    selected={date}
                    onSelect={setDate}
                    {...props}
                />
            </PopoverContent>
        </Popover>
    )
}
