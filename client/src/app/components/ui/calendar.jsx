"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  mode = "single",
  selected,
  onSelect,
  ...props
}) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  // Handle month navigation
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  // Generate days
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  // Weekday headers
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div
      className={cn(
        "p-4 md:p-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 w-fit",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <span className="text-lg font-bold text-gray-800">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-8 w-8 bg-white/80 border-gray-200 p-0 hover:bg-white hover:text-[#f37021] hover:border-[#f37021] transition-all duration-200 shadow-sm rounded-lg flex items-center justify-center"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-8 w-8 bg-white/80 border-gray-200 p-0 hover:bg-white hover:text-[#f37021] hover:border-[#f37021] transition-all duration-200 shadow-sm rounded-lg flex items-center justify-center"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="w-full">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="h-9 w-9 flex items-center justify-center text-[0.8rem] font-medium text-muted-foreground uppercase tracking-wider"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-y-2">
          {days.map((day, dayIdx) => {
            const isSelected = selected && isSameDay(day, selected);
            const isToday = isSameDay(day, new Date());
            const isOutside = !isSameMonth(day, monthStart);
            const isDisabled = props.disabled && typeof props.disabled === 'function' ? props.disabled(day) : false;

            if (isOutside && !showOutsideDays) {
              return <div key={day.toString()} className="h-9 w-9" />;
            }

            return (
              <div key={day.toString()} className="flex items-center justify-center">
                <button
                  onClick={() => onSelect && onSelect(day)}
                  disabled={isOutside || isDisabled}
                  className={cn(
                    "h-9 w-9 p-0 font-normal text-sm rounded-full transition-all duration-200 flex items-center justify-center relative",
                    isSelected &&
                    "bg-[#f37021] text-white hover:bg-[#f37021] hover:text-white shadow-lg shadow-[#f37021]/30 font-semibold scale-105 z-10",
                    !isSelected &&
                    !isOutside &&
                    !isDisabled &&
                    "hover:bg-[#f37021]/10 hover:text-[#f37021] text-gray-700",
                    isToday &&
                    !isSelected &&
                    "bg-gray-100 text-gray-900 font-bold border border-gray-200",
                    (isOutside || isDisabled) && "text-gray-300 opacity-50 cursor-not-allowed"
                  )}
                >
                  {format(day, "d")}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Calendar };
